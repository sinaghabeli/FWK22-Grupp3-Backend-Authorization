const express = require("express");
const router = express.Router();

const { userData, adminData } = require("../controllers/dataController");

// Private Auth
// const { protect } = require("../middleware/authMiddleware");

// Declaring API for controllers
router.post("/userData", userData);
router.post("/all", adminData);

// router.get("/me", protect, getMe);

module.exports = router;
