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
  login
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

// Protected route
router.get("/protected", protect, (req, res) => {
  res.json({ message: `Hello ${req.user.email}, you are authenticated!` });
});

export default router;
