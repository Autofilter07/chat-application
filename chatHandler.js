// importing section
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

// initializing section
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("connecte with id", socket.id);
  socket.on("disconnect", () => {
    console.log("disconneted with id", socket.id);
  });
});
