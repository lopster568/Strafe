import Post from '../models/post.js'
import User from '../models/user.js'
import generateImage from '../generate.js'

export const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find({})
        res.status(200).json(allPosts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await Post.findById(id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const createPost = async (req, res) => {
    const { img, prompt } = await generateImage()
    try {
        const author = await User.findById(req.userId)
        const post = await Post.create({
            img, author, prompt
        })
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
