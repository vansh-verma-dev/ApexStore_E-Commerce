const express = require("express");

const router = express.Router();

const {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");


// ==================================================
// Product Routes
// ==================================================

// POST /product
// Create Product
router.post("/", createProduct);


// GET /product
// Get All Products
router.get("/", getProduct);


// GET /product/:id
// Get Single Product
router.get("/:id", getSingleProduct);


// PUT /product/:id
// Update Product
router.put("/:id", updateProduct);


// DELETE /product/:id
// Delete Product
router.delete("/:id", deleteProduct);


module.exports = router;