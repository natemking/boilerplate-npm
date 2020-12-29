require('dotenv').config()
var express = require('express');
var app = express();
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const VIEWS_DIR = path.resolve(__dirname, './views')
const index = path.join(VIEWS_DIR, 'index.html')


app.use((req, res, next) => {
   console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
});


app.get("/json", (req, res) => {
    let message = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": message.toUpperCase()});
    
    }else{
        res.json({"message": message});
        
    }
  });

app.use(express.static(PUBLIC_DIR));

app.get('/', (req,res) => {
    res.sendFile(index)
});









































 module.exports = app;
