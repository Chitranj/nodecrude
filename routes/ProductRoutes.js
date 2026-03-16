import express from 'express';
import { getProducts, getProductById, addProducts, deleteProduct, updateProduct} from '../controllers/ProductController.js';
import {verifyToken} from '../middleware/auth.js';

const router = express.Router();

router.get("/getProducts", getProducts);
router.get("/getProductById/:id", getProductById);
router.post("/addProducts", verifyToken, addProducts);
router.delete("/deleteProduct/:id", verifyToken, deleteProduct);
router.put("/updateProduct/:id", verifyToken, updateProduct);

export default router;