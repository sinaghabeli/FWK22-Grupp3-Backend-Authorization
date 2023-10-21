const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dataRoutes = require("./routes/data_routes");

const app = express();
app.use(cors());
app.use(express.json());

// JWT Authentication Middleware
app.use((req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return next(); // No token, proceed without user object in req

  try {
    const verified = jwt.verify(token, "YourJWTSecretKey");
    req.user = verified;
    next(); // Token valid, user object added to req
  } catch {
    return res.status(401).send("Invalid Token");
  }
});

app.use("/data", dataRoutes);

module.exports = app;
