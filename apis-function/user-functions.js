const User = require("../models/user");

// Create single user
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, password } = req.body;

    // Validate required fields
    if (!firstName || !email) {
      return res.status(400).json({
        success: false,
        message: "firstName and email are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    const createdUser = await User.create({
      firstName,
      secondName: lastName,
      email,
      mobileNumber,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: createdUser,
    });
  } catch (e) {
    console.log("Error creating user:", e);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: e.message,
    });
  }
};

// Create multiple users
exports.createManyUsers = async (req, res) => {
  try {
    const { details } = req.body;

    if (!details || !Array.isArray(details) || details.length === 0) {
      return res.status(400).json({
        success: false,
        message: "details array is required and cannot be empty",
      });
    }

    const createdUsers = await User.insertMany(details);
    return res.status(201).json({
      success: true,
      message: `${createdUsers.length} users created successfully`,
      data: createdUsers,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Failed to create users",
      error: e.message,
    });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: e.message,
    });
  }
};

// Get single user by ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
      error: e.message,
    });
  }
};

// Update user email
exports.updateEmail = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "name and email are required",
      });
    }

    const result = await User.updateOne(
      { firstName: name },
      { $set: { email: email } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Email updated successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Failed to update email",
      error: e.message,
    });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Remove fields that shouldn't be updated directly
    delete updates._id;
    delete updates.createdAt;
    delete updates.updatedAt;

    let updatedUser;

    // Check if input looks like a valid ObjectId
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: updates },
        { new: true, runValidators: true }
      ).select("-password");
    } else {
      // If not an ID, try finding by firstName or email
      updatedUser = await User.findOneAndUpdate(
        { $or: [{ firstName: id }, { email: id }] },
        { $set: updates },
        { new: true, runValidators: true }
      ).select("-password");
    }

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found (checked ID, firstName, and email)",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (e) {
    console.log("Error updating user:", e);
    res.status(500).json({
      success: false,
      message: "Failed to update user",
      error: e.message,
    });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    let deletedUser;

    // Check if input looks like a valid ObjectId
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      deletedUser = await User.findByIdAndDelete(id);
    } else {
      // If not an ID, try deleting by firstName or email
      deletedUser = await User.findOneAndDelete({
        $or: [{ firstName: id }, { email: id }],
      });
    }

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found (checked ID, firstName, and email)",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (e) {
    console.log("Error deleting user:", e);
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error: e.message,
    });
  }
};
