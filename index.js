//use express
const express = require('express');
//port on which our server will run
const port = 8000;

// ESTABLISH CONNECTION WITH DB
const db=require('./config/mongoose');
const Task=require('./models/task');

const app = express(); //Creates an Express application

//middleware
app.use(express.urlencoded());

app.use('/', require('./routes/index'));

//built-in middleware function in express to serve static files such as images, CSS files, and JavaScript files
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views','./views');

//Binding and listening for connection on the specified host and port
app.listen(port, function (err) {
    if (err) {
        console.log(`Error Occurred`);
    }
    console.log(`The Server is running at port: ${port}, :)`);
});