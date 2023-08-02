
const name=["Doraemon","Perman","Shinchan","Ninja Hattori","Oggy and the Cockroaches","Tom and Jerry","Kid vs Cat","Naruto","Dragon Tales","Beyblade","Pokemon","Kick Buttowski"];
var h=[];
var p=0;
var g="";
for(var i=0;i<12;i++)
{
    h.push(0);
}
var n=0;
const _=require("lodash");
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    p=0;
    n=0;
    for(var i=0;i<12;i++)
{
    h[i]=0;
}
p=0;
n=0;
g="";
    res.render("st");
})
app.post("/",function(req,res)
{
res.redirect("/");
});
app.post("/start",function(req,res){
    var number=Math.floor(Math.random()*12);
    while(h[number]===1)
    {
        number=Math.floor(Math.random()*12);
    }
    if(h[number]===0){
        h[number]=1;
        n++;
        if(_.lowerCase(g)=== _.lowerCase(req.body.ans) || p===0 ){
            p=1;
        if(n<11){
            g=name[number];
            res.render("gm",{num:number,m:n});
        }else{
          res.render("good");
        }
        }else{
            p=1;
            res.render("wrng",{answer:g});
        }
    }
    
})
app.listen(process.env.PORT || 3000,function(){
    console.log("server is on port 3000");
})