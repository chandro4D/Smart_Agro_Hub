import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  getInsecticides,
  getSeeds,
  getTools,
  getFeed,
  createUser,
  login,
  createCartItem,
  getUserCartItems
} from "../controllers/productController.js"; // ✅ remove protect from here

import { protect } from "../middleware/authMiddleware.js"; // ✅ keep this one

const router = express.Router();

// Public routes
router.get("/", getProducts);
router.get("/insecticides", getInsecticides);
router.get("/seeds", getSeeds);
router.get("/tools", getTools);
router.get("/feed", getFeed);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.post("/users", createUser);
router.post("/login", login);
router.post("/cart", createCartItem);
router.get("/cart/:user_id", getUserCartItems);

// Protected route
router.get("/protected", protect, (req, res) => {
  res.json({ message: `Hello ${req.user.email}, you are authenticated!` });
});

export default router;
