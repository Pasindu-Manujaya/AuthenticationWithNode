const userModel = require('../models/user')

module.exports.signup_get = (req,res)=>{res.render('signup')};
module.exports.signup_post =async (req,res)=>{
                    const {username,password} =req.body;
                    try{
                      const newuser = await userModel.create({username,password});
                      res.status(201).json(newuser);

                    } 
                    catch(err){
                        console.log(err);
                         res.status(400).send('error when creating a user');
                    }
                      
                    
                }
module.exports.login_get = (req,res)=>{res.render('login')};
module.exports.login_post = (req,res)=>{res.send('user login')};