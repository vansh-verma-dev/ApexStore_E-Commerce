const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const app = express();

// ==================================================
// Middleware
// ==================================================

app.use(express.json());

// ==================================================
// Home Route
// ==================================================

app.get("/", (req, res) => {
    res.send("Apex Store Backend Running...");
});

// ==================================================
// Product Routes
// ==================================================

// POST /products
// Create New Product
app.post("/products", async (req, res) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json(product);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// GET /products
// Get All Products
app.get("/products", async (req, res) => {
    try {
        const { search } = req.query;

        let filter = {};

        if (search) {
            filter.name = {
                $regex: search,
                $options: "i"
            };
        }

        const products = await Product.find(filter);

        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// GET /products/:id
// Get Single Product
app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product Not Found"
            });
        }

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// PUT /products/:id
// Update Product
app.put("/products/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!product) {
            return res.status(404).json({
                message: "Product Not Found"
            });
        }

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// DELETE /products/:id
// Delete Product
app.delete("/products/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(
            req.params.id
        );

        if (!product) {
            return res.status(404).json({
                message: "Product Not Found"
            });
        }

        res.status(200).json({
            message: "Product Deleted Successfully",
            product: product
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// ==================================================
// MongoDB Connection
// ==================================================

mongoose
    .connect("mongodb://127.0.0.1:27017/apexStore")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error", error);
    });


// ==================================================
// Start Server
// ==================================================

app.listen(7000, () => {
    console.log("Server running on port 7000");
});