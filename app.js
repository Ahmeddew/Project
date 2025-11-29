const express= require('express');
const app= express();
const cors= require('cors');
const morgan = require('morgan');

 // Middlewares 

app.use (express.json());
app.use(morgan("dev"));
app.use(cors());
 

 // Routes

app.use("/auth", require('./Routes/authRoutes'));



module.exports= app  ;