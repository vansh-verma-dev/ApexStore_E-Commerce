const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 1000000
    },

    category: {
        type: String,
        required: true,
        enum: [
            "Electronics",
            "Clothing",
            "shoes",
            "Books",
            "Accessories"
        ]
    },

    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    },

    stock: {
        type: Number,
        required: true,
        min: 0,
        max: 10000
    },

    image: {
        type: String
    }
});

const product = mongoose.model("products", productSchema);

module.exports = product;