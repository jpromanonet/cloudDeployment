const express = require('express')

const app = express();

app.get('/', function(req,res){
    res.send("Welcome! to my first docker container in Node deployed in Azure, AWS and Google Cloud =)");
});

app.listen(8000);