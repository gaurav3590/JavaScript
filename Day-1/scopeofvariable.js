testLet = function () {
    d = 8;
    var k = 900;
    if (true) {
        let l = 100;
        console.log("l is " + l);
    }
    console.log("l outside is " + l);
    console.log("d is " + d);
    console.log("k is " + k);
}


estLet();
console.log("d exist outside as well " + d);
console.log("k exist outside as well " + k);


testX = function () {
    d = 8;
    var k = 900;
    console.log("d is " + d);
    console.log("k is " + k);
}
testX();
console.log("d exist outside as well " + d);
console.log("k exist outside as well " + k);
