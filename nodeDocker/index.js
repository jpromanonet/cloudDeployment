const express = require('express')

const app = express();

app.get('/', function(req : Request<P, ResBody, ReqBody, ReqQuery, Locals>, res: Response<ResBody, Locals> ){
    res.send(body: "Hello World!");
});

app.listen(port: 80);