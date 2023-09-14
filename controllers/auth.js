const User = require('../models/user');
require('dotenv').config();

exports.signup = async (req, res) => {
    try {
        const { name, email} = req.body
        const existinUser = await User.findOne({ email })
        if (existinUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists"
            })
        }
    
        //create entry for user
        const user = await User.create({name,email});
        return res.status(200).json({
            success: true,
            message: 'User created successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

exports.findAll= async (req,res)=>{
    try {
        const user = await User.find();
        return res.status(200).json({
            success: true,
            message: 'User created successfully',
            data:user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}