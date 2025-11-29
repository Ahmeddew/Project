const Doctor = require("../models/doctor");
const Patient=require('../models/patient')
const jwt= require('jsonwebtoken');
const bcrypt=require('bcryptjs');

exports.doctorSignup= async ( req,res)=>{
const {name ,email, password}=req.body; 
const doctor= await Doctor.create({name ,email, password});

res.status(201).json({ message:"Doctor created", doctor })
}

exports.doctorLogin= async (req,res)=>{
    const {email,password}= req.body ;

    const doctor= await Doctor.findOne({email});
    if (!doctor) return res.status(400).json ({message: "Invalid email"});

    const match= await bcrypt.compare(password,doctor.password); 
      if (!match) return res.status(400).json({ message: "Invalid password" });

const token = jwt.sign({id :doctor._id ,role:"doctor" },
    process.env.JWT_SECRET ,
     {expiresIn : "2d"});
       res.status(200).json({ token });

}
 //=============================


exports.patientSignup= async ( req,res)=>{
const {name ,email, password}=req.body; 
const patient= await Patient.create({name ,email, password});

res.status(201).json({ message:"Patient created", patient })
}

exports.patientLogin= async (req,res)=>{
    const {email,password}= req.body ;

    const patient= await Patient.findOne({email});
    if (!patient) return res.status(400).json ({message: "Invalid email"});

    const match= await bcrypt.compare(password,patient.password); 
      if (!match) return res.status(400).json({ message: "Invalid password" });

const token = jwt.sign({id :patient._id ,role:"patient" },
    process.env.JWT_SECRET ,
     {expiresIn : "2d"});
        res.status(200).json({ token });

}

