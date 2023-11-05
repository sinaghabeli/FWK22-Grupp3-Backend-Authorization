const express = require("express");
const router = express.Router();

const { userData, adminData } = require("../controllers/dataController");

// Private Auth
const { protect } = require("../middleware/userMiddleware");

// Declaring API for controllers
router.get("/userData", userData);
router.get("/all", adminData);

module.exports = router;
