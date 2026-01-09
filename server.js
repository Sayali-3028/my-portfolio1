const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  res.json({ message: "Message received successfully!" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
