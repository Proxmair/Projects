const express =require("express"); 
const AuthCtrl =require('../controllers/authControl') 
const router = express.Router()

router.route("/").get(AuthCtrl.LoginUser).post(AuthCtrl.RegisterUser)

module.exports=router;