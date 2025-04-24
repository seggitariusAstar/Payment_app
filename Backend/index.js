const express=require("express")
const mainRouter=require("./routes/index")
const cors=require("cors");
const bodyParser = require("body-parser");

const app=new express();
app.use(cors())
app.use(express.json())

app.use("/api/v1",mainRouter)
app.listen(3000,(err)=>{
   console.log("The server is running at the port number 3000")

}
)
 