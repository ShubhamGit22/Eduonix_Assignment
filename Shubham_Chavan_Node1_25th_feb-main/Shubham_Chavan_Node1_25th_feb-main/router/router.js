const express=require("express")// router is process of express
const router =express.Router()
router.post("/",require("../controller/controller").createUser)
router.post("/signup",require("../controller/controller").signUp)
router.post("/blog",require("../controller/controller").blogPost)

module.exports=router;