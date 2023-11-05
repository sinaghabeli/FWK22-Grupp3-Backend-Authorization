const jwt = require("jsonwebtoken");

// protect function to make sure no ther users can make change or delete other users data
const protect = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return next(); // No token, proceed without user object in req

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next(); // Token valid, user object added to req
  } catch {
    return res.status(401).send("Invalid Token");
  }
};

module.exports = { protect };
