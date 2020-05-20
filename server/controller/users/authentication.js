 
const User = require('../../database/models/users')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

const register= async (req,res,next)=>{
    const {body:{name,email,password,userId}}=req
    bcrypt.hash(password, 10,async(err, hashPassword)=> {
        if(err){
            throw(err)
        }
        try{
            const data= await User.create({
                name,
                email,
                password:hashPassword,
                userId
            })
            res.json({msg:`welcome ${data.name} ,created successfully`})
        }catch(e){
            next(e);
        }
    });
}

const login= async(req,res,next)=>{
    //check user if register
    const {body:{email,password}}=req;
    try{
        const result= await User.findOne({email})
        if(!result)return res.json({msg:'user dosent register!!'})
        //compare password
        const match = await bcrypt.compare(password, result.password);
        if(!match){
            const err = new Error();
            err.msg = 'incorrect password';
            err.status = 403;
            throw err;
        }
        const {_id,name}=result
        //create token for user
        const token= jwt.sign({_id,name},process.env.SECRET_KEY);
        res.cookie('token',token)
        res.json({msg:`welcome,${name}`})
    }
    catch(err){
        next(err);
    }
}

const logout=(req,res)=>{
    res.clearCookie('token').json({ message: 'logged out successfully' });

}


module.exports={register,login,logout}