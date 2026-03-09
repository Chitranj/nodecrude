import express from 'express';

const router = express.Router();

router.get("/getProducts", getProducts);
router.get("/getProductById/:id", getProductById);
router.post("/addProducts", addProducts);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);