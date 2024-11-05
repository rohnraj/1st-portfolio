const express=require('express')
const routes=express.Router()
const UserData=require('../models/protfolioModel')

routes.post('/Thankyou', async (req,res)=>{
    try{

        const {name, email, message}=req.body
        await UserData.create({name, email, message})
        res.status(200).json({message:'new data added successfully'})
    }
    catch(e){
        res.status(400).json({message:'data not added to the DB'})
    }
})

module.exports=routes