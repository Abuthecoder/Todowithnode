const express=require('express')
const cors=require('cors')
const mongoose=require("mongoose")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/todo").then(()=>console.log("DB success"))
.catch(()=>console.log("DB failed"))
const fruit=mongoose.model("Fruit",{name:String},"fruit")

app.get("/fruitlist",function(req,res){

    fruit.find().then(function(retdata){
        console.log(retdata)
        res.send(retdata)
    })
    res.send(fruits)
})

app.post("/addfruit",function(req,res){
    var newfruit=req.body.newfruit
    fruits.push(newfruit)
})
app.listen(5000,function(){
    console.log("server Started.....")
})
