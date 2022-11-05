import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new mongoose.Schema({
    displayName: { type: String },
    username: { type: String },
    email: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    avatar: { type: String },
    likes: [{
        type: Schema.Types.ObjectId, ref: 'Post'
    }],
    posts: [{
        type: Schema.Types.ObjectId, ref: 'Post'
    }]
})

export default mongoose.model("User", userSchema)