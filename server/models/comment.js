import mongoose from "mongoose";
const { Schema } = mongoose

const commentSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    comment: { type: String, required: true },
    replies: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        reply: String,
        createdAt: { type: Date, default: Date.now }
    }],
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Comment", commentSchema)