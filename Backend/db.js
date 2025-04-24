const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://21bcs10809:sT15Im48w6aSt7Sn@harshtyagi.11kmodu.mongodb.net/paytm")

const userschema=new mongoose.Schema({
username:{
 type:String,
 required:true,
 unique:true,
 lowercase:true,
 trim:true,
 minlength:3,
 maxlength:30
},
password:{
type:String,
required:true,
minlength:6
},
firstname:{
 type:String,
 required:true,
 trim:true,
 maxlength:50
 

},
lastname:{
    type:String,
 required:true,
 trim:true,
 maxlength:50

}



})

const bankschema= new mongoose.Schema({

 userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true

 },
 balance:{
    type:Number,
    required:true

 }
 
 
 

})

const User=mongoose.model("User",userschema)
const Account=mongoose.model("Account",bankschema)

module.exports={
    User,
    Account
}
