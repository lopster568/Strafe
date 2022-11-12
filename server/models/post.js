import mongoose from 'mongoose'
const { Schema } = mongoose

const PostSchema = new mongoose.Schema({
    caption: { type: String },
    img: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    likes: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    prompt: String,
    comments: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        comment: String,
        createdAt: { type: Date, default: Date.now }
    }],
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Post", PostSchema);