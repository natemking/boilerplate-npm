var express = require('express');
var app = express();
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const VIEWS_DIR = path.resolve(__dirname, './views')
const index = path.join(VIEWS_DIR, 'index.html')

const obj = {'message': 'Hello json'}

app.use(express.static(PUBLIC_DIR));

app.get('/', (req,res) => {
    res.sendFile(index)
});

app.get('/json', (req, res) => {
  res.json(obj)
});
    




































 module.exports = app;
