const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname,'../Public');

var app = express();
app.use(express.static(publicPath));

const PORT = process.env.PORT||3003;
var server = http.createServer(app);

var io = socketIO(server)
io.on("connection",(socket)=>{
    console.log(`connetion opend ${socket}`);

    socket.on('disconnect',()=>{
        console.log("connection got droped");
    })
    // socket.emit('NewEmail',{
    //     "email":"bhararhbro@gmail.com",
    //     "text":"whr are you bro"
    // });
    socket.on('CreateEmail',function(newEmailData){
        console.log(`server Recive EmailData:${newEmailData}`);
        console.log(newEmailData);

        io.emit('NewEmail',{
            "from":newEmailData.from,
            "text":newEmailData.text,
            "createdAt": new Date().getTime()

        })

    })
})

server.listen(PORT,()=>{
 console.log(`service is at ${PORT}`)
})