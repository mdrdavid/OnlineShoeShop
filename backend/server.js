import express from "express"
import products from "./data/Products.js";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDB.js"
import ImportData from "./DataImport.js"
import cors from "cors"
import productRoute from "./Routes/ProductRoutes.js"
import { errorHandler, notFound } from "./Middleware/Error.js";



dotenv.config()
connectDatabase()

const app = express()

app.use(cors());


app.use("/api/import", ImportData)
app.use("/api/products", productRoute)
// Error handler middleware
app.use(notFound)
app.use(errorHandler)


// Load product from server
app.get("/api/products", (req, res) => {
    res.json(products)
});

// Single product from server
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params._id)
    res.json(product)
});


app.get("/", (req, res) => {
    res.send("API is running")
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`Server run in port ${PORT}`))