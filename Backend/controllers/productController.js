import { sql } from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const products = await sql`
      SELECT * FROM products
      ORDER BY create_at DESC
    `;

    console.log("fetched products", products);
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in getProducts function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, image, category } = req.body;

  if (!name || !price || !image || !category) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const newProduct = await sql`
      INSERT INTO products (name,price,image,category)
      VALUES (${name},${Number(price)},${image},${category})
      RETURNING *
    `;

    res.status(201).json({ success: true, data: newProduct[0] });
  } catch (error) {

    console.log("Error in createProduct function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await sql`
     SELECT * FROM products WHERE id=${id}
    `;

    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.log("Error in getProduct function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
// INSECTICIDE products get 
export const getInsecticides = async (req, res) => {
  try {
    const products = await sql`
      SELECT * FROM products WHERE category = 'insecticides'
    `;

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in getInsecticides function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
// SEED products get
export const getSeeds = async (req, res) => {
  try {
    const products = await sql`
      SELECT * FROM products WHERE category = 'seed'
    `;

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in getSeeds function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Tools products get
export const getTools = async (req, res) => {
  try {
    const products = await sql`
      SELECT * FROM products WHERE category = 'tools'
    `;

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in getTools function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
// Feed products get
export const getFeed = async (req, res) => {
  try {
    const products = await sql`
      SELECT * FROM products WHERE category = 'feed'
    `;

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in getFeed function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image, category } = req.body;

  try {
    const updateProduct = await sql`
      UPDATE products
      SET name=${name}, price=${price}, image=${image}, category=${category}
      WHERE id=${id}
      RETURNING *
    `;

    if (updateProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({ success: true, data: updateProduct[0] });
  } catch (error) {
    console.log("Error in updateProduct function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await sql`
      DELETE FROM products WHERE id=${id} RETURNING *
    `;

    if (deletedProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({ success: true, data: deletedProduct[0] });
  } catch (error) {
    console.log("Error in deleteProduct function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
