var express=require('express');
var app=express();
var customer=[
    {id:1,name:'Gaurav',email:'gaurav.k@pyther.com',phone:'9924875063'},
    {id:2,name:'Keyur',email:'keyurgajera@gmail.com',phone:'7877456230'},
    {id:3,name:'Neej',email:'neejgajera@outlook.com',phone:'7885523012'},
    {id:4,name:'Hardik',email:'hardikpanshuriya@gmail.com',phone:'9632145870'},
    {id:5,name:'Raj',email:'rajgajipara@gmail.com',phone:'9922758674'},
];

let customerAPI='/api/customer';

app.get(customerAPI,function(req,res){
    res.send(customer)
});

app.get(customerAPI+"/:id",function(req,res){
    console.log("id:"+req.params.id);
    let item=customer.filter((item)=>(item.id == req.params.id));
    if(item.length>0){
        res.send(item[0]);
    }else{
    res.send({});
    }
});

app.post(customerAPI,function(req,res){
    console.log("CustomerAPI:",req.body);
    req.body.id=Date.now();
    customer.push(req.body);
    res.send({result:"ok",msg:"Customer Added OK.."})
    res.send(customer)
});

app.put(customerAPI,function(req,res){
    let items=customer.filter((item)=>(item.id == req.body.id));
    if(items.length>0){
        items[0].name=req.body.name;
        items[0].email=req.body.email;
        items[0].phone=req.body.phone;}
    res.send({result:"ok",msg:"Customer Updated  OK.."})
});

app.delete(customerAPI,function(req,res){
    let delcustomer=req.body;
    console.log("CustomerAPI:",delcustomer);
    customer=customer.filter((item)=>(item.id != delcustomer))
    res.send({result:"ok",msg:"Customer Deleted OK.."})
});

app.get('/',function(req,res){
    res.send('Hello World');
});
app.get('/about',function(req,res){
    res.send('Hello About!');
});

var server=app.listen(3000,function(){
    console.log("Express App listen to https://localhost:3000");
})
