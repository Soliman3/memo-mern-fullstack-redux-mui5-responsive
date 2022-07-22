import express from 'express';
import { getPosts , createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';


const router = express.Router();

// get route for geting all memories...
router.get('/', getPosts );
// Add route for creating new memory...
router.post('/', createPost);
// Update route for updating specific memory...
router.patch('/:id', updatePost);
// Delete route for Deleting specific memory...
router.delete('/:id', deletePost);
// Update route for likes numbers in memory...
router.patch('/:id/likePost', likePost);

export default router;