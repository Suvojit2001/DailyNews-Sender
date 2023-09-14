const mailSender = require('./utils/mainSender')
const User=require('./models/user')
const { newsEmail } = require('./utils/template')
const cron=require('node-cron')
const express=require('express')
const app=express()
require('dotenv').config();
const route= require('./routes/user')
const dbConnect=require('./config/database')
app.use(express.json());
app.use(route)
dbConnect()
app.get('/',(req,res)=>{
  res.send(`Hello world`)
}).listen(4500,()=>console.log('server running'))


cron.schedule('*/30 * * * * *',async function(){
  try {
    const users=await User.find();
    const url = `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${process.env.API_KEY}`
    const response = await fetch(url)
    const jsonResponse = await response.json();
    users.forEach(async(user)=>{
      const mailresponce = await mailSender(user.email, 'Top 10 Todays News', newsEmail(jsonResponse))
      console.log(mailresponce)
    })
  } catch (error) {
    console.log(error)
  }
})