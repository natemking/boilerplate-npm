require('dotenv').config()
var express = require('express');
var app = express();
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const VIEWS_DIR = path.resolve(__dirname, './views')
const index = path.join(VIEWS_DIR, 'index.html')

const obj = {"message": "Hello json"};
const objUC = {"message": "HELLO JSON"};

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json(objUC);
    }else{res.json(obj);}
    
  });


app.use(express.static(PUBLIC_DIR));

app.get('/', (req,res) => {
    res.sendFile(index)
});






































 module.exports = app;
