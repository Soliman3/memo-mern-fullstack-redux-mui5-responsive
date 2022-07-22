// create controllers functions for routes
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";


// Retrieving All Posts From Database...
export const getPosts = async (req, res)=>{
    try {
        const postMessages = await PostMessage.find(); 
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
   
}

// Create New Post in Database...
export const createPost = async (req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json({newPost});
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

// Update Post in DataBase...
export const updatePost = async (req, res)=>{
    const {id:_id} =req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with this id value'); 
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
    res.json(updatedPost)
}

// delete Post from DataBase...
export const deletePost = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with this id value');
    await PostMessage.findByIdAndDelete(id);
    console.log('Delete controller in serverSide');
    res.json({ message: 'item deleted'});
}

// increasing the like counter oncliking...
export const likePost = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with this id value');
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});
    res.json(updatedPost);
}