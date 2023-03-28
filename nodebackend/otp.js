const express = require('express');
const speakeasy = require('speakeasy');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(express.json());
var confrimotp= Number;
app.use(cors({origin:'*'}))
app.post('/api/send-otp', async (req, res) => {
  try {
    const email = req.body.email;
    
    const secret = speakeasy.generateSecret({ length: 20 });
    const otp = speakeasy.totp({
      secret: secret.base32,
      digits: 6,
      window: 1,
      time: 300
    });
    confrimotp = otp
   

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'swarom.inspacco@gmail.com',
        pass: 'iquawqlsyxfqbmbj',
        authentication:'plain'
      }
    });
    
    const mailOptions = {
      from: 'swarom.inspacco@gmail.com',
      to: email,
      subject: 'Your OTP',
      text: `Your OTP is: ${otp}`
    };
    
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'nai gaya' });
  }
});

app.post('/api/verify-otp', (req, res) => {
  try {
    const otp = req.body.otp;
    if (confrimotp == otp) {
      res.status(200).json({ message: 'OTP verification successful' });
    } else {
      res.status(401).json({ error: 'Invalid OTP' });
      
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error verifying OTP' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
