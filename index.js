const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');
var allPost = require('./data');




app.use(express.static('./public'));
app.set('json spaces', 40);



app.get('/' , (req,res)=>{
    res.json({
        results: allPost
    })
    res.end()
})

app.get('/test' , (req,res)=>{
    res.sendFile('/static/img1.jpg');
    res.end()
})


const port = 3000;
app.listen( port , ()=>{
    console.log(`app is listen on poer ${port}`);
})