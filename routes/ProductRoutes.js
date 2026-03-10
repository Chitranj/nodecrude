import express from 'express';
import { getProducts, getProductById, addProducts, deleteProduct, updateProduct} from '../controllers/ProductController.js';

const router = express.Router();

router.get("/getProducts", getProducts);
router.get("/getProductById/:id", getProductById);
router.post("/addProducts", addProducts);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);

export default router;