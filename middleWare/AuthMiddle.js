const jwt = require('jsonwebtoken');

const authMiddle = (req,res,next)=>{
       const Token= req.cookies.jwt;
       if(Token){
         jwt.verify(Token,'manu-sklkdnds',(err, decordedToken)=>{
            if(err){
                console.log(err.message); 
                res.redirect('/login'); 
            }
            else{
                console.log(decordedToken);
                next();
            }
         }) ;
         
       }
       else{
         res.redirect('/login');
       }

}
module.exports={authMiddle};