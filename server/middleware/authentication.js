const jwt = require("jsonwebtoken");

function checkAuth(){
    return (req,res,next)=>{
        const tokenVal = req.cookies.token;
        if(!tokenVal) throw new Error('User Not Authenticated');
        try{
            const payload = jwt.verify(tokenVal,process.env.JWT_SECRET);
            req.user = {...payload};
            next();
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = checkAuth;