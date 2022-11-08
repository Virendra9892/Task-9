const reqFilter = async(req,res,next)=>{
    // let object = await req.body;
    //    res.send(object);
   let obj =  [
        req.body.name = "Virendra",
        req.body.id = 22,
        req.body.sub = "Wd",
        req.body.course = "Node"
   ]
   res.send(obj);
      
       next();   
}

export default reqFilter;