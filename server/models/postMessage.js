import mongoose from "mongoose";

// intialize the Schema
const postSchema = mongoose.Schema({
    creator: String,
    title: String,
    message: String,
    tags:[String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

// create model from the Schema
const PostMessage = mongoose.model('PostMessage', postSchema);

// export mongoose model
export default PostMessage;