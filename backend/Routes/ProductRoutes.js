import express from "express"
import asyncHandler from "express-async-handler"
import Product from "../Models/ProductModel.js"

const productRoute = express.Router()

// GET ALL PRODUCTS
productRoute.get("/", asyncHandler(
    async(req, res) =>{
        const products = await Product.find({})
        res.json(products)
    }
)
);

//  GET SINGLE PRODUCT
productRoute.get(`http://localhost:5000/api/products/:id`, asyncHandler(
    async(req, res) =>{
        const product = await Product.findById(product.useParams.id)
        if (product) {
            res.json(product)
        } else {
            res.status(404)
            throw new Error("Product not found")
        }
    }
)
);
export default productRoute