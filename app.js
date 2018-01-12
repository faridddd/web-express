var express = require('express');
var app = express();
app.listen(1585);
var mWare = {
    reqAuth : function(req,res,next){
        console.log("route hit!");
        next();
    },
    logger : function(req,res,next){
        console.log(req.method , "  ",req.originalUrl);
    }
};
app.use(mWare.logger);
console.log("server is on port 1585");
app.use(express.static(__dirname+'/public'));
app.get('/about',mWare.reqAuth,function(req,res){
    res.send("about us!");
})