const {UserDataDAO} =require('../models/Model.js');

class UserDataCtrl {
  static async GetData(req, res, next) {
    try {
      let user=await UserDataDAO.GetData(req.params)
        res.send(user);
    } catch (error) {
      res.send(error)
    }
  }
  static async UpdateData(req, res, next) {
    try {
      let user=await UserDataDAO.UpdateData(req.params,req.body)
        res.send(user);
    } catch (error) {
      res.send(error)
    }
  }

}
module.exports=UserDataCtrl;