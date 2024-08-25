const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: `${process.env.myEmail}`,
    pass: `${process.env.myPass}`,
  },
});

const sendEmail = (req, res) => {
  try {
    const { name, email, msg } = req.body;
    if (!name || !email || !msg) {
      return res.status(404).send({
        success: false,
        message: "Provide All Details!",
      });
    }

    transporter.sendMail({
      from: `${process.env.myEmail}`,
      to: "vnp1345@gmail.com",
      subject: "Visitor Contact From Portfolio",
      html: `
        <h3>Visitor's Detail</h3><br/>
        <ul>
          <li><p>Name: ${name}</p></li>
          <li><p>Email: ${email}</p></li>
          <li><p>Message: ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Send to Vedant Successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Email Api Error!",
      error,
    });
  }
};

module.exports = { sendEmail };
