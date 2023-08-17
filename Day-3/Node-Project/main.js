let fs = require('fs');
let http = require('http');

console.log("Loading server");
let server = http.createServer(function (req, res) {
	res.statusCode = 200;
	fs.readFile('index.html', function (err, data) {
		if (!err) {
		res.write(data.toString());
		res.end();
		}else{
			res.status = 404;
			res.write("file not found");
			res.end();
		}
	});
});
server.listen(3000);
