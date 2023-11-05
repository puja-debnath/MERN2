const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./model/user.model')
const jwt = require("jsonwebtoken")

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/full-mern-stack') 

app.post('/api/Register', async(req,res) => {
  console.log(req.body)
  try{
        await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
       })
       res.json({status:"ok"})
       
      }catch(err){
        console.log(err)
    res.json({status:"error",error:"error"})
  }
})

app.post('/api/login', async (req,res) =>{
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })


  if(user){
    const token = jwt.sign({
      name: user.name,
      email: user.email
    },"secret123")
    return res.json({status:"ok", user: token})
  }else{
    return res.json({status:"ok", user:false})

  }
})

app.listen(3001, () => {
    console.log("server started");
})