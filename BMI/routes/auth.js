const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

// Create MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Simran@123",
  database: "Simran"
});
const router = express.Router();

// User login
router.post("/login", (req, res) => {
  // Extract username and password from request body
  const { username, password } = req.body;

  // Check if username exists in database
  connection.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        alert("Please Enter correct email or password:");
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      if (results.length === 0) {
        res.status(401).json({ error: "Invalid username or password" });
        return;
      }

      // Compare hashed password
      const user = results[0];
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }

        if (!result) {
          res.status(401).json({ error: "Invalid username or password" });
          return;
        }

        res.json({
          message: "Login successful",
          user: { id: user.id, username: user.username },
        });
      });
    }
  );
});

// User signup
// router.post("/signup", (req, res) => {
//   // Extract username, password, and email from request body
//   const { username, password, email } = req.body;

//   // Hash password
//   bcrypt.hash(password, 10, (err, hashedPassword) => {
//     if (err) {
//       console.error("Error hashing password:", err);
//       res.status(500).json({ error: "Internal Server Error" });
//       return;
//     }

//     // Store user data in database
//     connection.query(
//       "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
//       [username, hashedPassword, email],
//       (err, results) => {
//         if (err) {
//           console.error("Error storing user:", err);
//           if (err.code === 'ER_DUP_ENTRY') {
//             res.status(400).json({ error: "User already registered" });
//           } else {
//             res.status(500).json({ error: "Internal Server Error" });
//           }
//           return;
//         }

//         res.json({ message: "User registered successfully" });
//       }
//     );
//   });
// });

router.post("/signup", (req, res) => {
  // Extract username, password, and email from request body
  const { username, password, email } = req.body;

  // Check if the email is already registered
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.error("Error checking email existence:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      if (results.length > 0) {
        res.status(400).json({ error: "Email already registered" });
        return;
      }

      // Hash password
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          console.error("Error hashing password:", err);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }

        // Store user data in database
        connection.query(
          "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
          [username, hashedPassword, email],
          (err, results) => {
            if (err) {
              console.error("Error storing user:", err);
              res.status(500).json({ error: "Internal Server Error" });
              return;
            }

            res.json({ message: "User registered successfully" });
          }
        );
      });
    }
  );
});

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Function to send OTP via email
async function sendOTPByEmail(email, otp) {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "moinuddin6495@gmail.com", // Your Gmail address
        // user: "akv280501@gmail.com", // Your Gmail address
        // pass: "", // Your Gmail password
        pass: "rizenepctmibdxuj", // Your Gmail password
      },
    });

    let info = await transporter.sendMail({
      from: "moinuddin6495@gmail.com",
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${otp}`,
    });

    console.log("OTP sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}


router.post("/forgotpassword", async (req, res) => {
  const { email } = req.body;

  // Generate OTP
  otp = generateOTP();

  try {
    const insertOTPSql =
      "INSERT INTO password_reset (email, otp, timestamp) VALUES (?, ?, NOW())";
    connection.query(insertOTPSql, [email, otp], async (err, result) => {
      if (err) {
        console.error("Error inserting OTP into database:", err);
        return res.status(500).send("Error generating OTP");
      }

      // Send OTP via email
      await sendOTPByEmail(email, otp);

      return res.status(200).send("OTP sent to your email");
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error in forgot password");
  }
});

router.post("/resetpassword", async (req, res) => {
  const { email, otp, newPassword } = req.body;

  try {
    // Retrieve the stored OTP and timestamp from the database
    const getOTPSql =
      "SELECT otp, timestamp FROM password_reset WHERE email = ?";
    connection.query(getOTPSql, [email], async (err, results) => {
      if (err) {
        console.error("Error retrieving OTP from database:", err);
        return res.status(500).send("Error resetting password");
      }

      if (results.length === 0) {
        // No OTP found for the provided email
        return res.status(401).send("Invalid OTP or email");
      }

      const storedOTP = results[0].otp;
      const timestamp = new Date(results[0].timestamp).getTime();
      const currentTimestamp = new Date().getTime();

      // Verify OTP and check if it's still valid (e.g., within a certain time limit)
      if (otp != storedOTP || currentTimestamp - timestamp > 600000) {
        // OTP expires after 10 minutes
        return res.status(401).send("Invalid OTP or OTP expired");
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update the user's password in the database
      const updatePasswordSql =
        "UPDATE users SET password = ? WHERE email = ?";
      connection.query(
        updatePasswordSql,
        [hashedPassword, email],
        async (err, result) => {
          if (err) {
            console.error("Error updating password in database:", err);
            return res.status(500).send("Error resetting password");
          }

          // Delete the used OTP from the database
          const deleteOTPSql = "DELETE FROM password_reset WHERE email = ?";
          connection.query(deleteOTPSql, [email], (err, result) => {
            if (err) {
              console.error("Error deleting OTP from database:", err);
            }
          });

          return res.status(200).send("Password reset successful");
        }
      );
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error in reset password");
  }
});


module.exports = router;






// "axios": "^1.6.7",
//     "bcrypt": "^5.1.1",
//     "cors": "^2.8.5",
//     "exceljs": "^4.4.0",
//     "express": "^4.18.2",
//     "express-validator": "^7.0.1",
//     "googleapis": "^133.0.0",
//     "jsonwebtoken": "^9.0.2",
//     "multer": "^1.4.5-lts.1",
//     "mysql": "^2.18.1",
//     "mysql2": "^3.9.3",
//     "nodemailer": "^6.9.10",
//     "nodemon": "^3.0.3",
//     "uuid": "^9.0.1"