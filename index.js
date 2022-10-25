// https://coures-express-server.vercel.app
const express = require('express')
const app= express()
const cors= require('cors')
const port= process.env.Port ||5000;


app.use(cors())

const courses=require('./Data/Course.json')

app.get('/',(req,res)=>{
    app.sen('hello my news')
})

app.get('/course',(req,res)=>{
    res.send(courses)
})
app.get('/course/:id',(req,res)=>{
    const id = req.params.id
    const selectedCourse=course.find(Sc=>Sc.id===id)
    res.send(selectedCourse)
})

app.listen(port,()=>{
    console.log('my server')
})