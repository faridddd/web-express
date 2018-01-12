var mWare = {
    reqAuth : function(req,res,next){
        console.log("route hit! ");
        next();
    },
    logger : function(req,res,next){
        console.log(req.method , "  ",req.originalUrl);
    }
};
module.exports = mWare;