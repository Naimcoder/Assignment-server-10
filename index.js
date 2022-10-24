// https://coures-express-server.vercel.app
const express = require('express')
const app= express()
const cors= require('cors')
const port= process.env.Port ||5000;
app.use(cors())
app.get('/',(req,res)=>{
    app.sen('hello my news')
})
app.listen(port,()=>{
    console.log('my server')
})