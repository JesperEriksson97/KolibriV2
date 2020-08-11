const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const socketio = require("socket.io");
const mongoose = require("mongoose");

const http = require("http");
const path = require("path");

const hbs = require("express-hbs");

const server = http.createServer(app);
const PORT = 3000 || process.env.PORT;

const io = socketio(server);

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/", require("./routes/homeRouter"));
app.use("/contact", require("./routes/contactRouter"));
app.use("/about", require("./routes/aboutRouter"));
app.use("/room", require("./routes/roomRouter"));

// View Engine
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// HBS View Engine Setup
app.engine(
  "hbs",
  hbs.express4({
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);

// Socket
io.on("connection", (socket) => {
  console.log("Connection established with socket id: ", socket.id);
  console.log(socket);

  socket.emit("message", "Hello World");
});

// Socket
io.on("connection", (socket) => {
  console.log("Connection established with socket id: ", socket.id);
  // console.log('New connection made with id: ', socket.id)

  socket.on("update", (data) => {
    console.log("This is the cursor position goming in: ", data.cursor);
    // Update data to mongoDB here
    Fiddle.findOneAndUpdate(
      { _id: data._id },
      { data: data.data, cursor: data.cursor },
      { new: true }
    )
      .then((updatedFiddle) => {
        io.emit("editorUpdate", {
          updatedFiddle: updatedFiddle,
          cursor: updatedFiddle.cursor,
        }); // Sent data to client here
      })
      .catch((err) => console.log(err));
  });

  socket.emit("message", "Hello World");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
