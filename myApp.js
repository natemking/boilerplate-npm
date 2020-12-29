var express = require('express');
var app = express();
const path = require('path');
const VIEWS_DIR = path.resolve(__dirname, './views')
const index = path.join(VIEWS_DIR, 'index.html')

app.get('/', (req,res) => {
    res.sendFile(index)
    
})
    




































 module.exports = app;
