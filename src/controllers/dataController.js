const userData = (req, res) => {
  // Only allow access if user is authenticated
  if (!req.user) {
    return res.status(403).send("Access Denied");
  }

  // Here: retrieve and return the authenticated user's own data
  res.json({ data: `Data for user with ID: ${req.user.id}` });
};

const adminData = (req, res) => {
  // Only allow access if user is authenticated and an admin

  console.log(req.user);

  if (!req.user || req.user.role !== "admin") {
    return res.status(403).send("Access Denied");
  }

  // Here: retrieve and return the list of all users
  res.json({ data: "List of all users!" });
};

// router.get("/", (req, res) => {
//   try {
//     if (!req.user || req.user.role !== "admin") {
//       return res.json({ data: "Secret data for admin!" });
//     } else if (!req.user) {
//       return res.json({ data: "Secret data for user!" });
//     } else {
//       res.status(403).send("Access Denied");
//     }
//   } catch {
//     res.status(401).send("Invalid Token");
//   }
// });

module.exports = {
  userData,
  adminData,
};
