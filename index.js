const express = require ('express');
const fileUpload = require('express-fileupload');
//const bodyParser = require('body-parser');
var bodyParser = require('body-parser');

const  app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ parameterLimit: 999999999999,
    limit: '999mb',
    extended: true}));

// app.use(express.bodyParser({limit: '50mb'}));   

const port = 2300;
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.use(fileUpload());

app.use(express.static('public'));
app.use('/upload',express.static('upload'));


const router = require('./src/Router/router');
app.use('/api/v2/ecom/',router); 



app.get('/data/',(req,res)=>{

    res.send("Hello World");

})

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});



app.listen(port,()=>{
    console.log("Done"+port);
});