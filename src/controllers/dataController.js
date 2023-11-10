const User = require("../models/userModel");

const userData = async (req, res) => {
  // Only allow access if user is authenticated
  if (!req.user) {
    return res.status(403).send("Access Denied");
  }

  try {
    const users = await User.findById(req.user.id, { password: 0 });

    res.json({ data: users });
  } catch (error) {
    throw error;
  }
};

const adminData = async (req, res) => {
  // Only allow access if user is authenticated and an admin
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).send("Access Denied");
  }

  try {
    // Here: retrieve and return the list of all users
    const users = await getAllUsers();

    res.json({ data: users });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find({}, { password: 0 });
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  userData,
  adminData,
};
