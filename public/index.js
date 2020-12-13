let socket = io();
socket.on("connect",()=>{
    console.log("Connect to server !")
    socket.emit("createMessage",{
        from : "Thor",
        text :"what's going on!"
    })
})

socket.on("newMessage",(message)=>{
    console.log("message",message);
})

socket.on("disconnect",()=>{
    console.log("Disconnect to server !")
})