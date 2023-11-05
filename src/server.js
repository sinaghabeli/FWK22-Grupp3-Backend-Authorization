const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dataRoutes = require("./routes/dataRoutes");

const connectDB = require("./config/db");
const helmet = require("helmet");

const app = express();

// Adding helmet for security
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "trusted-scripts.com"],
        styleSrc: ["style.com"],
      },
    },
    noCache: true, // Disable client-side caching
  })
);

// Enable/disable specific headers
app.use(helmet.frameguard({ action: "deny" }));

// Connecting to Mongodb
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // // JWT Authentication Middleware

app.use("/data", dataRoutes);

module.exports = app;
