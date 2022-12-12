const express=require('express')
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.json({limit:'5000kb'}))

require("dotenv").config();
app.use(express.json());
const dbConfig=require('./config/dbConfig');
const port=5000;
const userRoutes=require('./routes/userRoute');
const imageRoute=require('./routes/imageRoute');
app.use('/api/users',userRoutes)
app.use('/api/upload',imageRoute)
const path = require("path");
if(process.env.NODE_ENV === "production")
{
    app.use(express.static("myapp/build"));
  
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'myapp/build/index.html'));
    });
}
app.listen(port,(req,res)=>{
    console.log("Server listening on port " + port);
})