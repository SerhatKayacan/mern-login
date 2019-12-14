const express = require("express");
const mongoose = require("mongoose"); //interract with database
const bodyParser = require("body-parser"); //take requests and get data from body

const users = require("./routes/api/users");

const app = express(); //initialize express

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//bodyparser middleware
app.use(bodyParser.json());


//DB config
const db = require("./config/keys").mongoURI; // database connect key'ini aldı

//connect to mongo
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("mongodb connected")) // bağlandığında
  .catch(err => console.log(err)); // bağlanamzsa

//use routes
app.use("/", users); 

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));