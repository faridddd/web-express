var express = require('express');
var app = express();
var mWare = require('./mware.js')
app.listen(1585);

app.use(mWare.logger);
console.log("server is on port 1585");
app.use(express.static(__dirname+'/public'));
app.get('/about',mWare.reqAuth,function(req,res){
    res.send("about us!");
})