var express = require('express');
var app = express();
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const VIEWS_DIR = path.resolve(__dirname, './views')
const index = path.join(VIEWS_DIR, 'index.html')

app.use(express.static(PUBLIC_DIR));

app.get('/', (req,res) => {
    res.sendFile(index)
});
    




































 module.exports = app;
