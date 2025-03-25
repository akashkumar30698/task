const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/connectDB");
const  { router: home}  = require("./routes/TaskRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", 
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"], 
  })
);

// Database Connection
connectDB();

//home
app.get("/", (req, res) => {
    return res.json({ message: "Hello from server", status: 200 });
  });
  


// Routes
app.use("/api",home);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
