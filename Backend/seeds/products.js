import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
 
];

async function seedDatabase() {
  try {
    // first, clear existing data
    await sql`TRUNCATE TABLE products RESTART IDENTITY`;

    // insert all products
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image, category)
        VALUES (${product.name}, ${product.price}, ${product.image}, ${product.category})
      `;
    }

    console.log("Database seeded successfully");
    process.exit(0); // success code
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1); // failure code
  }
}

seedDatabase();
