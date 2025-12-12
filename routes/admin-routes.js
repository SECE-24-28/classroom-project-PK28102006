const express = require("express");
const {
  AdminRegister,
  getAllAdminDetails,
  createAdmin,
  createManyAdmins,
  getAllAdmins,
  updateEmail,
  getDetails,
} = require("../apis-function/admin-function");

const router = express.Router();

router.post("/register", AdminRegister);
router.get("/getAdminDetails/:email/:mobile", getAllAdminDetails);
router.post("/createAdmin", createAdmin);
router.post("/createManyAdmins", createManyAdmins);
router.get("/getAdmins", getAllAdmins);
router.put("/modifyAdminMail", updateEmail);
router.get("/getAdminDetails/:id", getDetails);

module.exports = router;
