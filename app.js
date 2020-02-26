const express = require("express");
const toDoController = require("./controllers/toDoController");

const app = express();

// set up template engine
app.set('view engine', 'ejs');

// set up static files 
app.use(express.static('./public'));

// liaten to the port 
app.listen('3000', err => {
    if (err) throw err;
    console.log("running");
});