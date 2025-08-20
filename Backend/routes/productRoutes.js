import expres from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  getInsecticides,
  getSeeds,
  getTools,
  getFeed
} from "../controllers/productController.js";

const router = expres.Router();

router.get("/", getProducts);
router.get("/insecticides", getInsecticides);
router.get("/seeds", getSeeds);
router.get("/tools", getTools);
router.get("/feed", getFeed);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
