var fs = require('fs');
var http = require('http');

var templateEngine = function (template, data) {
    var vars = template.match(/\{\w+\}/g);
    if (!vars) {
        return template;
    }

    var nonVars = template.split(/\{\w+\}/g);
    var output = '';
    for (var i = 0; i < nonVars.length; i++) {
        output += nonVars[i];
        if (i < vars.length) {
            var key = vars[i].replace(/[\{\}]/g, '');
            output += data[key];
        }
    }
    return output;
};

var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    console.log("Line no.21");
    fs.readFile('index.html', function (err, data) {
        console.log("Line No.28");
        if (!err) {
            res.write(templateEngine(data.toString(), {
                name: "Gaurav",
                node: "V8",
                v8: "67",
                time: new Date(),
                city:"Mumbai",
            })); // use our template engine here
            res.end();
        }
    });
    console.log("Line no.39");
});

server.listen(3002)
// var arrayA = [3,4,5,6];
// var arrayB = [3,5,6, "Vivek", function(){}];
// var arrayC = [ ...arrayA, ...arrayB, "End "] ;

// console.log(arrayA);
// console.log(arrayB);
// console.log(arrayC);

// var sonObject = {name:"Vivek"};
// var fatherObject = {name:"Amar"};
// console.log(JSON.stringify(fatherObject));
// var father = JSON.parse(fatherObjStr);
// sonObject.parent = fatherObject;
// console.log(JSON.stringify(fatherObject));

// var arrayA = [3, 4, 5, 6, 7, 8];
// //filter
// var arrayB = arrayA.filter((item) => (item != 8));

// // JSON.stringify
// console.log("arrayB" + JSON.stringify(arrayB));

// // map
// arrayA.map(function (item) {
//     console.log("item is " + item);
// })

// var arraySort = arrayA.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     } else {
//         return 1;
//     }
// });