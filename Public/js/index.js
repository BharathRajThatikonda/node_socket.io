var socket = io();
socket.on('connect',()=>{
    console.log(`connected to server`);

    // socket.emit('CreateEmail',{
    //     "email":"bhararhbro@gmail.com",
    //     "from":"bharath",
    //     "text":"CreateEmail"
    // })
})
socket.on('disconnect',()=>{
    console.log('disconnect from server');
})


socket.on('NewEmail',function(newEmailData){
    console.log(`Client Recive EmailData:${newEmailData}`);
    console.log(newEmailData);

})


