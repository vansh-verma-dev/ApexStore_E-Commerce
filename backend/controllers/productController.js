const Product = require("../models/Product")

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)

        res.status(201).json(product);

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}

const getProduct =   async (req, res) => {
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
};

const getSingleProduct =  async (req, res) => {
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
};
 const updateProduct =  async (req, res) => {
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
};

 const deleteProduct =  async (req, res) => {
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
};
module.exports = {
    createProduct , 
    getProduct , 
    getSingleProduct , 
    updateProduct , 
    deleteProduct
}; 