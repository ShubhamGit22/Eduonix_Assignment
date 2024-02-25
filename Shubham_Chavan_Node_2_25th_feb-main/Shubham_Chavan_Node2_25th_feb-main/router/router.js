const express=require("express")// router is process of express
const router =express.Router()
router.post("/",require("../controller/controller").createUser)
router.post("/signup",require("../controller/controller").signUp)
router.post("/blog",require("../controller/controller").blogPost)
router.get("/",require("../controller/controller").getUsers);
router.get("/:userId",require("../controller/controller").getByIdUsers);
router.put("/:userId",require("../controller/controller").editData);
router.delete("/:userId",require("../controller/controller").Delete)

module.exports=router;