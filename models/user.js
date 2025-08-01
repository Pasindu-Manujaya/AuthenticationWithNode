const mongoose = require('mongoose');
const {isEmail} = require("validator");
const bcrypt = require("bcrypt");

const userSchema =new mongoose.Schema({
email :{
    type : String,
    required : [true, 'Enter an email'],
    unique : true,
    lowercase : true,
    validate : [isEmail, "Enter a valid Email"]


},
password : {
    type : String,
    required : [true,'Enter a password' ],
    minlength : [6,'Minimum length of a password is 6']
}

})

userSchema.pre('save',async function(next){
    const salt =await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

userSchema.statics.login =async function(email,password){
    const user =await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password,user.password);
        if(auth){
          return user;
        }
        throw Error("incorrect Password")
    }
    throw Error('incorrect Email')
}


const user = mongoose.model('user',userSchema);
module.exports = user;