const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

// Create MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Simran@123",
  database: "Simran",
});

// Store BMI data
router.post("/store", (req, res) => {
  // Extract user_id, height, weight from request body
  const { user_id, height, weight } = req.body;

  // Calculate BMI
  const bmi = weight / (height * height);

  // Store BMI data in database
  connection.query(
    "INSERT INTO bmi_data (user_id, height, weight, bmi) VALUES (?, ?, ?, ?)",
    [user_id, height, weight, bmi],
    (err, results) => {
      if (err) {
        console.error("Error storing BMI data:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      res.json({ message: "BMI data stored successfully" });
    }
  );
});

// Store BFP data
router.post("/bfp", (req, res) => {
  // Extract necessary data from request body
  const { height, weight, waist, neck, gender } = req.body;

  // Calculate Body Fat Percentage based on gender
  let bodyFatPercentage;
  if (gender === "male") {
    bodyFatPercentage =
      86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
  } else {
    bodyFatPercentage = 96.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
      // 163.205 * Math.log10(waist + neck - height) -
      // 97.684 * Math.log10(height) -
      // 78.387;
  }

  // Store BFP data in database
  connection.query(
    "INSERT INTO bfp_data (height, weight, waist, neck, gender, body_fat_percentage) VALUES (?, ?, ?, ?, ?, ?)",
    [height, weight, waist, neck, gender, bodyFatPercentage],
    (err, results) => {
      if (err) {
        console.error("Error storing BFP data:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      res.json({ message: "BFP data stored successfully" });
    }
  );
});

// Retrieve BMI data for a user

router.get("/   /:user_id", (req, res) => {
  const user_id = req.params.user_id;

  // Retrieve BMI data from database for the given user_id
  connection.query(
    "SELECT * FROM bmi_data WHERE user_id = ?",
    [user_id],
    (err, results) => {
      if (err) {
        console.error("Error retrieving BMI data:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      res.json({ bmi_data: results });
    }
  );
});

module.exports = router;
