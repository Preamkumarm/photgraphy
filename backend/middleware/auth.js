import exp from "constants";
import jwt from "jsonwebtoken";

const authMiddleware = async()=>{
    const {token} = req.headers;

    if(!token){
        return res.json({success:false,message:"No Authorized login again"});
    }


    try {
        
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();

    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"Error"});
    }
}

export default authMiddleware