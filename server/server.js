const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")("sk_test_51Niol8SHa7wjJumJ7KXZJZtVpKyCMFde5zdqxXkRgOMmQFU14CUxehKFymKk6URjZ3KY4iGKj09KOYuJuJb6et0500PqZGPRUN"); // Replace with your Stripe secret key
require("dotenv").config();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/pay", async (req, res) => {
  try {
    console.log(req.body.token);

    // Create a charge using Stripe
    await stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    });

    // Send a confirmation email to the customer
    sendConfirmationEmail("recipient-email@example.com");

    // Send a success response to the client
    res.status(200).json({ success: true, message: "Payment successful" });
  } catch (error) {
    console.error("Payment error:", error);
    // Send an error response to the client
    res.status(500).json({ success: false, message: "Payment failed" });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
