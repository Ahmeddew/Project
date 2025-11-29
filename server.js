const app= require('./app');
const mongoose= require('mongoose');
const dotenv= require ('dotenv');
dotenv.config(); 



 

 // Database Connection 
 const DB= ()=>{
    mongoose.connect(process.env.MONGO_URI).then((conn)=>{
        console.log("Database Connected");
    });
 }
   DB();



 
app.listen(process.env.port,()=>{
    console.log(`App is Runnig on Port ${process.env.port}`)
})