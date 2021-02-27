var http = require('http');
var fs = require('fs');
var url = require("url");
let express = require("express");
let bodyParser = require('body-parser');
let template = require('./frame/template');
let app = express();
let {Client} = require('pg');
let dbc = require('./manipulate/dbconnection');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));



app.get('/', (req, res)=>{
    if(false){
        res.redirect('/login');
    }else{
        res.send(template.indexHTML());

    }
});
app.post('/', (req, res)=>{
    
    console.log(req.connection.remoteAddress+"\n");//ip판별해주는거
    console.log(`gender: ${req.body.form_gender}\ncount: ${req.body.form_count}\n`);
    res.redirect('/waiting');
});

app.get('/waiting',(req, res)=>{
    res.send(template.waitingHTML());
})

app.get('/login', (req, res)=>{
    res.send(template.loginHTML());
});

app.post('/login', (req, res)=>{
    console.log(req.body.form_name);
    console.log(req.body.form_gender);
    let id = dbc.addClient(req.body.form_name, (req.body.form_gender=='true'?true:false), false, -1);
    res.cookie('id',`${id}`);
    console.log(id);
    res.redirect('/');
});

app.listen(3000, () => console.log("Example app listening on port 3000"));