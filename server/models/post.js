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
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Post", PostSchema);