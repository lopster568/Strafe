import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUser = await User.findOne({email})
        if(!existingUser) return res.status(500).json({message: "User not found!"})
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCorrect) return res.status(500).json({message: "Invalid Credentials"})
        
        const token = jwt.sign({email: existingUser.email, id: existingUser._id},')H@McQfThWmZq4t7w!z%C*F-JaNdRgUk', { expiresIn: '3d' } )
        res.status(200).json({user: existingUser, token})
    } catch(err){
        res.status(500).json({message: err.message})
    }
}
export const registerUser = async (req, res) => {
    const { email, password, displayName, username } = req.body
    try{
        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(500).json({message: "User Already Exists"})
        const hashedPassword = await bcrypt.hash(password, 10)
        const createdUser = await User.create({
            email, displayName, username, 
            password: hashedPassword
        })
        const token = jwt.sign({email: createdUser.email, id: createdUser._id},')H@McQfThWmZq4t7w!z%C*F-JaNdRgUk', { expiresIn: '3d' } )
        res.status(200).json({user: createdUser, token})
    } catch (err)
    {
        res.status(500).json({message: err.message})
    }
}
export const logout = (req, res) => {
    res.status(200).json({msg: "hello there"})
}
