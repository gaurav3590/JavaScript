let http = require('http'); 
let reqCount = 0;

let server = http.createServer((req, res) => { //call back
    console.log("Request:",req);
    console.log("Response",res);
    console.log(">> new request received:" + req.url + " count:" + reqCount++);
    res.statusCode = 200;
    res.write('Hello World! count :' + reqCount);
    res.end(); //res sent to browser
});

server.listen(3000);

// ab -n 10000 -c 100 http://localhost:3000/


// node http fs
// app custom  mathLib
// third party (from other source)