// importing section
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
require("dotenv").config();
require("./chatHandler");

// initialization section
const app = express();
const server = http.createServer(app);

// middlewares
app.use(express.static("public"));

// mongoose connection
async function mongooseConnection() {
  try {
    // await mongoose.connect("") ;
    console.log(`connected to mongoose`);
  } catch (err) {
    console.log(err);
  }
}
mongooseConnection();

// server connection
const PORT = process.env.PORT || 8080;

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`connected to port ${PORT}`);
  }
});
