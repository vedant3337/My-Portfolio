const express = require("express");
const { sendEmail } = require("../controller/PortfolioControl");

const router = express.Router();

router.post("/sendMail", sendEmail);

module.exports = router;
