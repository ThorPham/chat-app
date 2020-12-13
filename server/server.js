const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
// console.log(path.join(__dirname,"/../public"));
const publicPath = path.join(__dirname,"/../public")
const port = process.env.PORT || 3000

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath))

io.on("connection",(socket)=>{
    console.log("New user connect");
    socket.on("createMessage",(message)=>{
        console.log("createMessage",message);
    })
    socket.emit("newMessage",{
        from : "sever",
        text : "Hello user!",
        createAt : new Date().getTime()
    })

})
server.listen(port,()=>{
    console.log(`Sever is up on port ${port}`);
})
