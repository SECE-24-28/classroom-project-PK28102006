const express = require("express");
const {
  getAllAdmins,
  registerAdmin,
} = require("../apis-function/admin-functions");
const router = express.Router();

router.get("/", getAllAdmins);
router.post("/register", registerAdmin);

module.exports = router;