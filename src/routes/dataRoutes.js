const express = require("express");
const router = express.Router();

const { userData, adminData } = require("../controllers/dataController");

// Private Auth
const { protect } = require("../middleware/userMiddleware");

// Declaring API for controllers
router.get("/userData", protect, userData);
router.get("/all", protect, adminData);

module.exports = router;
