import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js"
import { sql } from "./config/db.js";
import { aj } from "./lib/arcjet.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet()); // Security middleware
app.use(morgan("dev")); //Log the requests
app.use(cors());


app.use(async (req, res, next) => {
    try {
        const decision = await aj.protect(req, {
            requested: 1 //specifies the each request consume 1 token
        })

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                res.status(429).json({ error: "Too Many Requests" });
            } else if (decision.reason.isBot()) {
                res.status(403).json({ error: "Access Denied: Bot Detected" });
            } else {
                res.status(403).json({ error: "Forbidden" });
            }
            return;
        }
        //check for spoofed bots
        if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())){
            res.status(403).json({ error: "Access Denied: Spoofed Bot Detected" });
            return;
        }

        next();
    } catch (error) {
        console.error("Arcjet Error:", error);
        next(error);
    }
});


app.use("/api/products", productRoutes);


async function initDB() {
    try {
        await sql`
          CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `;
        console.log("DataBase Initialization successfully");
    } catch (error) {
        console.log("Error InitDB", error);
    }
}
console.log();
initDB().then(() => {
    app.listen(3000, () => {
        console.log(`Server is running on port ` + PORT);
    });
})