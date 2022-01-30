const express=require('express');
const app=express();
const cors=require('cors');
const authRoute=require('./routes/authRoute.js');
const UserDataRoute=require('./routes/UserDataRoute.js')
const MongoClient=require('mongodb').MongoClient;
const port=5000;
const url="mongodb+srv://m220student:m220password@mflix.qh16m.mongodb.net/Users?retryWrites=true&w=majority";

//Import models
const { UserDataDAO , AuthDAO }=require('./models/Model.js')
//Middle wares
app.use(cors());
app.use(express.json())
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/data", UserDataRoute)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

const StartBackend=()=>{
    //Connecting to backend
    MongoClient.connect(url,{wtimeoutMS: 2500 })
    .catch(err => {
        console.error(err.stack)
         process.exit(1)
    })
    .then(async client => {
        console.log("Connected to Databse");
        await AuthDAO.CheckAccess(client);
        await UserDataDAO.CheckAccess(client);
        app.listen(port, () => {console.log(`Server is running on Port ${port}`)})
        //Connecting to server
    })
}

StartBackend();