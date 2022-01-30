const {AuthDAO} =require('../models/Model.js');

class AuthCtrl {
  static async LoginUser(req, res, next) {
    try {
      let user=await AuthDAO.LoginUser(req.query)
      if(user){
        res.send(user);
      }
      else{
        res.send({error:"Either User name or Password is incorrect"});
      }
    } catch (error) {
      res.send(error)
    }
  }
  static async RegisterUser(req,res,next){
    try {
        let user=await AuthDAO.RegisterUser(req.body);
        res.send(user);
        return;
    } catch (error) {
        res.send({error:"Failed to Register enter valid data"});
    }
  }
}
module.exports=AuthCtrl;