import express from "express";
import Post from '../models/Post.js'

const router = express.Router()

// get back all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch(error) {
        res.json({message: err})
    }
})

// submit the posts
router.post('/', async (req, res)=> {
    const post = new Post({
        title: req.body.title, 
        description: req.body.description
    })

    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch(error) {
        res.json({message: error})
    }
})

// sepecific post based on the id value
router.get('/:postId', async (req, res)=> {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    res.json(post)
    } catch (err) {
        res.json({message: err})
    }
})

// delete post based on the id value
router.delete('/:postsId',async (req, res)=> {
    try {
        const removedPost = await Post.findByIdAndDelete(req.params.postsId)
        res.json(removedPost)
    } catch(error) {
        res.json({message: error})
    }
})

// update post 
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: {title: req.body.title}}
            )
        res.json(updatedPost)
    } catch (error) {
        res.json({message: error})
    }
})

// router.get('/sepecific', (req, res) => {
//     res.send('We are on sepecific')
// })

export default router