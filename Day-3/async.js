var async=require('async');
var workToBeDOne=[];
var printU=NumberLater=function(){
    return function(callback){
        setTimeout(function(){
            console.log(i);
            callback();
        },100);
    };
};

for(var i=0;i<100;i++){
    workToBeDOne.push(printU(i));
}

async.parallel(workToBeDOne,function(){
    console.log('this  still print last');
});