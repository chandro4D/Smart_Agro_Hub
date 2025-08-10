import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js"
import { sql } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(helmet()); // Security middleware
app.use(morgan("dev")); //Log the requests
app.use(cors());

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