const express =require("express"); 
const UserDataCtrl =require('../controllers/userDataControl.js') 
const router = express.Router()

router.route("/:id").get(UserDataCtrl.GetData).patch(UserDataCtrl.UpdateData);

module.exports=router;