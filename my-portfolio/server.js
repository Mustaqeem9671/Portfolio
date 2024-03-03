const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 3005;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohammedmustaqeem0007@gmail.com", 
      pass: "Mustaqeem@9671421078", 
    },
  });

  
  const mailOptions = {
    from: email, 
    to: "mohammedmustaqeem0007@gmail.com", 
    subject: "New Message from Contact Form",
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send email.");
    } else {
      console.log("Email sent:", info.response);
      res.sendStatus(200);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
