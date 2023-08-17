console.log("Hello world 123");

process.stdin.on('data', function (input) {
    console.log("Hello:1: " + input.toString());
});


process.stdin.on('data', (input) => {
    console.log("Hello:2222: " + typeof input.toString());
});

process.stdin.on('data', (input) => {
    if (input.toString().startsWith("exit")) {
        process.exit();
    }
});

