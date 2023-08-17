console.log("Hello world 123");

process.stdin.on('data', function (input) {
    console.log("Hello:1: " + input.toString());
});

process.stdin.on('data', function (input) {
    console.log("Hello:2: " + input.toString());
});