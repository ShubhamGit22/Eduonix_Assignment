// npm install mongoose 2nd step
const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/post")//folder name is practice 
// export default function name this in react
module.exports=mongoose;