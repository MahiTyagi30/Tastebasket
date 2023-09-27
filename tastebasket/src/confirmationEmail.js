const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.sendConfirmationEmail = functions.auth.user().onCreate(async (user) => {
  const email = user.email;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Welcome to Your E-commerce Website!",
    text: "Thank you for signing up. Please confirm your email address.",
  };

  try {
    await admin
      .firestore()
      .collection("emailQueue")
      .add(mailOptions);
  } catch (error) {
    console.error("Error adding email to queue:", error);
  }
});
