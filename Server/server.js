const path = require('path');

const express = require('express');
const publicPath = path.join(__dirname,'../Public');

var app = express();

const PORT = 3003;



app.use(express.static(publicPath));
app.listen(PORT,()=>{
 console.log(`service is at ${PORT}`)
})