const { rejects } = require("assert")
const { resolve } = require("path")

var timeCounter=async function(){
    await new Promise((resolve,rejects)=>setTimeout(()=>{
        console.log("1. We want this to be First line");
        resolve();
    },3000));
    console.log("2. print last");
}
timeCounter();