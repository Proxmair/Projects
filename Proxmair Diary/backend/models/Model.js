const res = require('express/lib/response');
const mongodb=require('mongodb');
let user;
let data;
let cUser;
class AuthDAO {
    static async CheckAccess(client){
        if (user) {return}
        try {
            user =await client.db('Users').collection("Auth");
        } catch (error) {
            console.error(`Unable to establish a collection handle in LoginDAO: ${error}`);
        }
    }
    static async LoginUser(req) {
        try {
            cUser=await user.findOne({"name":req.name,"password":req.password});
            return cUser;
        } catch (error) {
            return await error.next()
        }
      }
    static async RegisterUser(req){
      const userid=new mongodb.ObjectId();
      const newUser={
        auth:{
          _id:userid,
          name:req.name,
          password:req.password,
          email:req.email
        },
        data:{
          _id:userid,
          data:[{Heading:"heading",Paragraph:"paragraph",Date:new Date()}]
        }
      }
      try {

          await user.insertOne(newUser.auth);
          await data.insertOne(newUser.data);
          return {message:"1 document Inserted"}
        } catch (error) {
            return await error.next()
        }
    }
}
class UserDataDAO {
  static async CheckAccess(client) {
    if (data) {
      return;
    }
    try {
      data = await client.db("Users").collection("Data");
    } catch (error) {
      console.error(
        `Unable to establish a collection handle in LoginDAO: ${error}`
      );
    }
  }
  static async GetData(req) {
    try {
      return await data.find({_id:mongodb.ObjectId(req.id)}).next();
    } catch (error) {
      return await error.next();
    }
  }
  static async UpdateData(req,dta) {
    try {
      const newvalues={$set: dta };
      const myquery={_id:mongodb.ObjectId(req.id)};
      await data.updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
      });
      return {message:"1 document Updated"}
    } catch (error) {
      return await error.next();
    }
  }
}
module.exports = {UserDataDAO:UserDataDAO,AuthDAO:AuthDAO};
/* dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
  if (err) throw err;
  console.log("1 document updated");
  db.close();
}); */