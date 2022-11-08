import express from  "express";
import mid from "./middleware.js";

const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("Hey virendra how are you ?");
});

router.post("/about",mid,(req,res)=>{
    // let a = req.body.a;
    // let b = req.body.b;
    // let c = req.body.c;
    // let d = req.body.d;
    
    // let obj = {
    //  "Name":a,
    //  "Id":b,
    //  "Age":c,
    //  "Course":d
    // }

    res.send("Object Created...");

});

export default router;
