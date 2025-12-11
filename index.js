const express = require("express");
const cors = require("cors");
const database = require("./db_connect/db");
const BasicRoutes = require("./routes/basic-route");

let port = 21000;
const app = express();
database.connect();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Support parsing of application/json type post data
app.use(express.text({ type: 'text/plain' }));

// Middleware to handle text/plain that is actually JSON
app.use((req, res, next) => {
  if (req.get('Content-Type') === 'text/plain' && typeof req.body === 'string') {
    try {
      req.body = JSON.parse(req.body);
    } catch (e) {
      // Ignore if not valid JSON, let it remain as string or empty
    }
  }
  req.body = req.body || {};
  next();
});

// Debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/v1/user", BasicRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Port is running",
  });
});

app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});