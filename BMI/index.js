
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const bmiRoutes = require("./routes/bmi");
const mysql = require("mysql2");
const cors = require("cors");

// Create Express app
const app = express();
app.use(cors());
// Middleware
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/bmi/", bmiRoutes);

//Test the database connection
/* const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "groot123",    //your your own db password
  database: "bmi",   
});

connection.connect();

app.get("/api/users", (req, res) => {
  const query = "SELECT * FROM users";
  connection.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching users data:", err);
      res.status(500).json({ error: "Error fetching users data" });
      return;
    }
    res.json(result);
  });
}); */

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
