require('dotenv').config()
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const VIEWS_DIR = path.resolve(__dirname, './views')
const index = path.join(VIEWS_DIR, 'index.html')


app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
     next();
 });

app.use(express.static(PUBLIC_DIR));

app.get('/', (req,res) => {
    res.sendFile(index)
});


app.get("/json", (req, res) => {
    let message = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": message.toUpperCase()});
    
    }else{
        res.json({"message": message});
        
    }
  });
 

app.use('/now', (req, res, now) => {
    req.time = new Date().toString();
    now()
}, (req,res) => {
    res.json({time: req.time})
});

app.get('/:word/echo', (req,res) => {
    res.json({echo: req.params.word})
})

app.use(bodyParser.urlencoded({extend: false}))

app.route('/name').get((req, res) => {
    res.json({name: `${req.query.first} ${req.query.last}`})
})














































 module.exports = app;
