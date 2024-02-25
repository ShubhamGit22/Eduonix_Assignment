// with the help of model structure we will be able to perform CRUD operation and we are also create api
const userModel=require("../model/model.js")//data structure 
// post api means create api 
//function is known as api function as limits api has no limits
exports.createUser= async(req,res)=>{
    // we want to fill user data so we need req because req helps to  input that data into the server 
    try{
        const saveData= await new userModel(req.body).save()// i send the req to fill data acording to this, i didnt verify that our input data is in which format 
        res.json(saveData)


    }
    catch(err){
        res.json(err)

    }

}
 exports.signUp= async(req,res)=>{
    const {email, password} = req.body 
    try{
        const response = await userModel.findOne({email:email})
        console.log(response)

        if(!response){
            return res.json({error: "Email is not registered"})
        }
        else{
           const matchResult  = await password==response.password
           if(matchResult){
               // token :
                //  const token = uuidv4();
                //  console.log(token)
                //  response.token = token 
                // const updatedResponse =  await response.save()

                 return res.json({message: "Login successfull"})
           }
           else{
            return res.json({message:"wron password"})
           }
        

    }
   
}
catch(err){
    res.json(err,{message: "wrong password"})

}


 }
 exports.blogPost=async(req,res)=>{
    try{
        const saveData= await new userModel(req.body).save()// i send the req to fill data acording to this, i didnt verify that our input data is in which format 
        res.json(saveData)


    }
    catch(err){
        res.json(err)

    }


 }