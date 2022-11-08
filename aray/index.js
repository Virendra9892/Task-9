import express from "express";
// import router from "./routes.js";
const app = express();
// app.use(express.json());

// import bodyparser from "body-parser"
const port = process.env.PORT || "8500";
let arr=[]
app.post("/",function(req,res){
const data=req.body;
const response=arr.push(data)

res.send(response)

});

// app.get("/get",function(req,res){
//     const response=arr;
    
//     res.send(response)
    
//     });
    

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}.`);
});