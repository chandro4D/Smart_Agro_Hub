import { sql } from "../config/db.js";
export const getProducts = async (req, res) => {
    try {
        const products = await sql`
            SELECT * FROM products
            ORDER BY create_at DESC
        `;
        console.log("Fetched Products", products);
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error in getProducts Function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const createProduct = async (req, res) => {
    const { name, price, image } = req.body;
    if (!name || !price || !image) {
        return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }
    try {
        const newProduct = await sql`
            INSERT INTO products (name, price, image)
            VALUES (${name}, ${price}, ${image})
            RETURNING *
        `;
        console.log("New Product Created", newProduct);
        res.status(201).json({ success: true, data: newProduct[0] });
    } catch (error) {
        console.log("Error in createProduct Function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }

};

export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await sql`
        SELECT * FROM products WHERE id = ${id}
        `;
        res.status(200).json({ success: true, data: product[0] });
    } catch (error) {
        console.log("Error in getProduct Function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {name,price,image} = req.body;
    try {
        const updatedProduct = await sql`
            UPDATE products
            SET name = ${name}, price = ${price}, image = ${image}
            WHERE id = ${id}
            RETURNING *
        `;
        if (updatedProduct.length === 0) {
            res.status(404).json({ success: false, message: "Product not found" });
        } else {
            res.status(200).json({ success: true, data: updatedProduct[0] });
        }
    } catch (error) {
        console.log("Error in updateProduct Function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
 };

export const deleteProduct = async (req, res) => { };