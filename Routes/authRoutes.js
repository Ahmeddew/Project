const router = require("express").Router();
const { doctorSignup, doctorLogin } = require("../Controllers/authController");
const { patientSignup, patientLogin } = require("../Controllers/authController");
const {protect,allowTo} =require('../Controllers/middlewares')
router.post("/doctor/signup", doctorSignup);
router.post("/doctor/login", doctorLogin);


router.post("/patient/signup", patientSignup);
router.post("/patient/login", patientLogin);

router.get("/doctor-data",
  protect,
  allowTo("doctor"),
  (req, res) => res.send("Doctor only")
);

module.exports = router;