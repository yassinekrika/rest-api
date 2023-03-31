import express from "express";
import Post from '../models/Post.js'
import { getPost, createPost, deletePost, updatePost, getPostId } from "../controller/handlePosts.js";

const router = express.Router()

// get back all the posts
router.get('/', getPost)

// submit the posts
router.post('/', createPost)

// sepecific post based on the id value
router.get('/:postId', getPostId)

// delete post based on the id value
router.delete('/:postsId', deletePost)

// update post 
router.patch('/:postId', updatePost)

// router.get('/sepecific', (req, res) => {
//     res.send('We are on sepecific')
// })

export default router