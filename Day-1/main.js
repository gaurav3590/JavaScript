var http=require('http');
var reqCount=0;
var server=http.createServer(
    function(req,res){
        console.log(">> new request received:"+req.url+"count:"+reqCount++);
        res.statusCode=200;

        res.write("Hello Wolrd! 3333 44 count:"+reqCount);
        res.end();
    }
);
server.listen(5000);