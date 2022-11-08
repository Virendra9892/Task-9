
const reqFilter = (req,res,next)=>{
    // console.log(req);
    // const checknum = (num) =>{
        // if(num < 18){
        //     throw new Error(`${num} is less than 18`);
        // }
        // else{
            let a =[ req.params.y = 8];
            res.send(a);
            next();
    //     }
    // }
    // try{
    //     checknum(req.params.num);
    // }catch(err){
    //     res.send(`error : ` + err.message)
    // }
    // const x = await req.params.num;
    //     if(x<18) {
    //      res.send(`${x} is less than 18.`)
    //     }
    //     else{
    //         next();
    //     }
        
         
}

export default reqFilter;


