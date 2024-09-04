import mongoose from "mongoose";
import Product from "../models/products.model.js";
export const AddProduct = async(req, res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message: "All fields are required"});
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save()
        res.status(201).json({success: true,data: newProduct});
    } catch (error) {
        console.log("Error in Creating product", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
} 
export const GetProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true,data: products});
    } catch (error) {
        console.log("Error in Fetching products", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
} 

export const DeleteProduct = async(req, res) => {   
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: `Invalid Product Id`});
    }
    try {
        await Product.findOneAndDelete(id);
        res.status(200).json({success: true, message: "Product Deleted Successfully"});
    }
    catch(error){
        res.status(500).json({success: false, message: "Server Error"});
    }

}

export const UpdateProduct = async(req, res) => {
    const {id} = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return(res.status(404).json({success: false, message: `Invalid Product Id`}));
    }
    try {
     const UpdatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
     res.status(200).json({success: true, data: UpdatedProduct});
    } catch (error) {
     res.status(500).json({success: false, message: "Server Error"});
    }
}
 
