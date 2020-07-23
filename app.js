const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const http = require("http");
const path = require("path");

const hbs = require("express-hbs");

const PORT = 3000 || process.env.PORT;
const server = http.createServer(app);

// Routes
app.use("/", require("./routes/homeRouter"));
app.use("/contact", require("./routes/contactRouter"));
app.use("/about", require("./routes/aboutRouter"));
app.use("/room", require("./routes/roomRouter"))

// View Engine
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.engine(
  "hbs",
  hbs.express4({
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
