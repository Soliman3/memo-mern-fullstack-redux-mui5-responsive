// create controllers functions for routes
import PostMessage from "../models/postMessage.js";



export const getPosts = async (req, res)=>{
    try {
        const postMessages = await PostMessage.find(); // to retrieving all posts from db
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
   
}

export const createPost = async (req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json({message: error.message});
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}