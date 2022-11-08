import express from "express";

import reqFilter from "./middleware.js";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hey Virendra what's up ?");
});

router.post("/about/:num",reqFilter,(req,res)=>{
    // let num = req.params.num;
    const body = req.body.x;
    // res.send(req.params)
    res.send(body)
    // res.send(`${num} is greater than 18.`);

})

export default router;