import express from "express";
import { protect, verifyRole } from "../middleware/authMiddleware.js";
import { adminDashboard, sellerDashboard, updateProfile, userDashboard } from "../controllers/dashboardController.js";

const router = express.Router();

// Routes for dashboards
router.get("/admin", protect, verifyRole(["admin"]), adminDashboard);
router.get("/seller", protect, verifyRole(["seller"]), sellerDashboard);
router.get("/user", protect, verifyRole(["user"]), userDashboard);
router.put("/updateProfile/:id", protect, updateProfile);

export default router;
