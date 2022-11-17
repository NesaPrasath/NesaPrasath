const express=require('express')
const app=express()
app.get('/',(req,res)=>
{
    res.send('Home page');
    console.log('home page is displayed...')
})
app.listen(5000,()=>{
    console.log('sever is started on port 5000...')
})