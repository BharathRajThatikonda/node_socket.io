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

    var li = jQuery("<li></li>")
    li.text(`${newEmailData.from}:${newEmailData.text}`)
    jQuery("#messages").append(li);

})

jQuery("#message-form").on("submit" ,function(e){
    e.preventDefault()

    socket.emit("CreateEmail", {
        "from":"user",
        "text" : jQuery('[name=message]').val()
    },function(){
        console.log("got email Message Created")
    })

})
