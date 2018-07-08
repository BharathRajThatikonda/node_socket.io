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


    socket.emit('NewEmail',{
        "from":"Admin",
        "text":"Welcome to Chat",
        "createdAt": new Date().getTime()
    });

    // socket.broadcast.emit('NewEmail',{
    //     "from":"Admin",
    //     "text":"New User Joined the Group",
    //     "createdAt": new Date().getTime()

    // })

    socket.on('CreateEmail',function(newEmailData){
        //console.log(`server Recive EmailData:${newEmailData}`);
        console.log('server Recive EmailData:',newEmailData);
//** Public Channel Emit to Every one **/
        io.emit('NewEmail',{
            "from":newEmailData.from,
            "text":newEmailData.text,
            "createdAt": new Date().getTime()
        })
//** Public Channel Emit to Every one Except the one who post the notification**/
        // socket.broadcast.emit('NewEmail',{
        //     "from":"Admin",
        //     "text":"New User Joined the Group",
        //     "createdAt": new Date().getTime()
        // })

    })
})

server.listen(PORT,()=>{
 console.log(`service is at ${PORT}`)
})