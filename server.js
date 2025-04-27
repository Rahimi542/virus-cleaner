// ------------------- server.js ------------------- const express = require("express"); const http = require("http"); const { Server } = require("socket.io");

const app = express(); const server = http.createServer(app); const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => { socket.on("join", (room) => { socket.join(room); socket.to(room).emit("joined"); });

socket.on("signal", (data) => { socket.to(data.room).emit("signal", data.signal); }); });

server.listen(3000, () => { console.log("Signaling server running on port 3000"); });

