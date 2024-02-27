const express=require("express")
const zod=require("zod");
const { User, Account } = require("../db");
const router=express.Router();
const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

const signupbody=zod.object({
   username:zod.string().email(),
   firstname:zod.string(),
   lastname:zod.string(),
   password:zod.string()



})

const signinbody=zod.object({
    username:zod.string().email(),
    password:zod.string()
})

const updatebody=zod.object({
password:zod.string().optional(),
firstname:zod.string().optional(),
lastname:zod.string().optional()


})


router.post("/Signup",async (req,res,next)=>{
    
const {success}=signupbody.safeParse(req.body)

if(!success){
    return res.status(411).json({
        message:"Invalid input"
    })
}
const existinguser= await User.findOne({
    username:req.body.username
})

if(existinguser){
    return res.status(411).json({
        message:"Email already taken"
    })
}

const user=await User.create({
    username:req.body.username,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    password:req.body.password
})

 const userId=user._id;

await Account.create({
    userId,
    balance:1+Math.random()*10000
})


 const token=jwt.sign({
    userId
 },JWT_SECRET)

 res.json({
    message:"User created successfull",
    token:token
 })

})

router.post("/Signin",async (req,res)=>{
      
    const {success}=signinbody.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            message:"Incoorect input format"
        })
    }

    const user= await User.findOne({
        username:req.body.username,
        password:req.body.password
    })

    if(!user){
        return res.status(411).json({
            message:"You can not signin you need to signup first"
        })
    }
    const token=jwt.sign({
        userId:user._id
    },JWT_SECRET
    )

    res.json({
        token:token
    })
    
 

})
router.put("/",authMiddleware, async (req,res)=>{
  const {success}=updatebody.safeParse(req.body);

  if(!success){
    return res.status(411).json({
        message:"Error while updating the password"
    })
  }

  await User.updateOne(req.body,{
    _id:req.userId
  })

  res.json({
    message:"Update successfully"
  })


})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

module.exports=router



