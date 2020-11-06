var express=require('express');
var app=express();
var booklist=require('./hotel.json');

var cors = function(req, res, next) { 
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    next(); 
} 
app.use(cors);


app.get("/showByCity",function(req,res)
{
    var city=req.query.city;
    var newHotelList=[];
    booklist.forEach(book=>{
        if(book.city==city)
        {
            newHotelList.push(book);
        }
    });
    res.status(200).send(newHotelList);
})

app.listen('3000',function()
{
    console.log('server listening to port 3000')
});
