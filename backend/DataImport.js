import express from "express"
import users from "./data/user.js"
import User from "./Models/UserModel.js"

const ImportData =express.Router()

ImportData.post("/user",async (req,res)=>{
    await User.remove({})
    const importUser = await User.insertMany(users)
    res.send({importUser})
})

export default ImportData
