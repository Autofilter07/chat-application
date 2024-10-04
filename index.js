const express = require("express");
const mongoose = require("mongoose");
const socketIo = require("socket.io");
const http = require("http");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
exports.io = socketIo(server);

server.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
