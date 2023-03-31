import express from "express";
import Post from '../models/Post.js'

export const getPost = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch(error) {
        res.json({message: err})
    }
}

export const createPost = async (req, res) => {
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
}

export const deletePost = async (req, res) => {
    try {
        const removedPost = await Post.findByIdAndDelete(req.params.postsId)
        res.json(removedPost)
    } catch(error) {
        res.json({message: error})
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: {title: req.body.title}}
            )
        res.json(updatedPost)
    } catch (error) {
        res.json({message: error})
    }
}