const db = require("../models");
const User = db.user;
var bcrypt = require("bcryptjs");

exports.signUp=(req,res)=>{
    User.findOne({
        email:req.body.email
    })
    .exec((err,user)=>{
        if (err){
            res.status(500).send({message:err});
        }
        if(user){
            res.status(404).send({message:"User already exists."});
        }
        if(!user){
            const user=new User({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:bcrypt.hashSync(req.body.password,10),
                dob:req.body.dob,
                mobile:req.body.mobile
                
            });
            user.save((err)=>{
                if(err){
                    res.status(500).send({message:err});
                }
                res.send({message:"User was registered successfully"});
            });
        }
    });
};

exports.signIn=(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((err,user)=>{

        if(err){
            res.status(500).send({message:err});
        }

        if(!user){
            res.status(404).send({message:"User not found"});
        }
        var passwordIsValid=bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordIsValid){
            res.status(401).send({message:"Invalid Password"});
        }
        res.status(200).send({
            id:user._id,
            email:user.email
        });
    });
};