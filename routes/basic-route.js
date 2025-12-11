const express = require("express");
const {
  createUser,
  createManyUsers,
  getAllUsers,
  getUserById,
  updateEmail,
  updateUser,
  deleteUser,
} = require("../apis-function/user-functions");

const router = express.Router();

// User CRUD routes
router.post("/signup", createUser); // POST /api/v1/User/signup
router.post("/signup-many", createManyUsers); // POST /api/v1/User/signup-many
router.get("/", getAllUsers); // GET /api/v1/User
router.get("/:id", getUserById); // GET /api/v1/User/:id
router.put("/:id", updateUser); // PUT /api/v1/User/:id
router.put("/:id/email", updateEmail); // PUT /api/v1/User/:id/email (legacy)
router.delete("/:id", deleteUser); // DELETE /api/v1/User/:id

module.exports = router;
