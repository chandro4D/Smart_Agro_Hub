import { sql } from "../config/db.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const getProducts = async (req, res) => {
  try {
    const products = await sql`
      SELECT * FROM products
      ORDER BY create_at DESC
    `;

    console.log("fetched all products successfully");
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in getProducts function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Create New User
export const createUser = async (req, res) => {
  const { name, email, password, photo_url, user_role } = req.body;

  if (!name || !email || !password || !photo_url || !user_role) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await sql`
      INSERT INTO users (name, email, password, photo_url, user_role)
      VALUES (${name}, ${email}, ${hashedPassword}, ${photo_url}, ${user_role})
      RETURNING *
    `;

    res.status(201).json({ success: true, data: newUser[0] });
  } catch (error) {
    console.log("Error in createUser function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


// For User LogIn
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  try {
    // find user by email
    const user = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;

    if (!user[0]) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }
    // 3. Create JWT (SECRET should be in your .env)
    const token = jwt.sign(
      { id: user[0].id, email: user[0].email, user_role: user[0].user_role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // login successful
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user[0].id,
        name: user[0].name,
        email: user[0].email,
        photo_url: user[0].photo_url,
        user_role: user[0].user_role,
      },
    });




  } catch (error) {
    console.log("Error in loginUser function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


// Create New Product
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
