import Post from '../models/post.js'
import User from '../models/user.js'
import Comment from '../models/comment.js'
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
        const createdPost = await Post.create({
            img, author, prompt
        })
        author.posts.push(createdPost)
        await author.save()
        res.status(200).json(createdPost)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

export const commentPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const user = await User.findById(req.userId)
        const comment = {
            user, comment: req.body.comment
        }
        const createdComment = await Comment.create(comment)
        console.log(createdComment, "THIS IS COMMENT")
        console.log(post, "THIS IS POST")
        post.comments.push(createdComment)
        const commentedPost = await post.save()
        res.status(200).json(commentedPost)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const replyComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id)
        const user = await User.findById(req.userId)
        const reply = {
            user, reply: req.body.reply
        }
        comment.replies.push(reply)
        const repliedComment = await comment.save()
        res.status(200).json(repliedComment)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}