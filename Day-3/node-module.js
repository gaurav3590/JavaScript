// var math=require('mathjs');
var lib={};
// console.log("sum of 4+6:"+math.sum(4,6));
// console.log("mul of 4*6:"+math.sum(4,6));   
lib.sum=function(a,b){return a+b;}
lib.mul=function(a,b){return a*b;}
lib.cirleArea=(radius)=>{3.14*radius*radius};
module.exports=lib;