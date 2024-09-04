import express from "express";
import { GetProducts, AddProduct, DeleteProduct, UpdateProduct } from "../controllers/products.controller.js";

const router = express.Router();

router.post("/", AddProduct);
router.get("/", GetProducts);
router.delete("/:id", DeleteProduct);
router.put("/:id", UpdateProduct);

export default router