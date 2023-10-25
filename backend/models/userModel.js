const mongoose =  require('mongoose');
const userSchema =mongoose.Schema(
    {
        Name:{type :String, required:true},
        email:{type :String, required:true, unique:true},
        password:{type :String, required:true},
        pic:{type:String,
            
            default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",}//will take link isliye string

    },
    {timeStamps:true}
);
const User=mongoose.model("User",userSchema);
module.exports=User;