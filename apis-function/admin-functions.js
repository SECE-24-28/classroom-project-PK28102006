const Admin = require("../models/admin");

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    return res.status(200).json({
      success: true,
      data: admins,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};

exports.registerAdmin = async (req, res) => {
  try {
    const { firstName, email, password } = req.body;
    
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }

    const admin = await Admin.create({
      firstName,
      email,
      password,
    });
    
    return res.status(200).json({
      success: true,
      message: "Admin registered successfully",
      data: admin,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};