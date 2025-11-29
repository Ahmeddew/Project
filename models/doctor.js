const mongoose=require('mongoose');
const bcrypt =require('bcryptjs')

const DoctorSchema= mongoose.Schema({

 name:{
    type: String,
    trim :true ,
    required:[true,"Name Required"]
 },

  email:{
    type:String, 
    required:[true,"Email Required"],
    unique: [true,"Email Must Be Unique"],
    lowercase:true ,
      match: [
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  "Invalid Email Format"
]
  },

password:{
    type:String, 
    minlength:[6,"Password Is too Short "],
    required:[true," Password Required"],
},
role:{
    type:String,
    default :'Doctor'
},
phone:String ,

});
 // hash Password Before Saving 

DoctorSchema.pre('save' , async function (next){
if (!this.isModified("password"))return (next);

const salt =await bcrypt.genSalt(12);
this.password = await bcrypt.hash(this.password,salt);
next;
}
);

 
module.exports= mongoose.model('Doctor',DoctorSchema);
