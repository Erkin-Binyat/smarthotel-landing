import nodemailer from "nodemailer";

export default async function handler(req: any, res: any){
  res.setHeader("Contact-Type", "application/json");

  const { name, email, subject, message } = req.body;
  
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASS
      }
    });

    transporter.sendMail({
      from: email,
      to: process.env.NEXT_EMAIL_USER,
      subject: subject,
      text: message,
      html: `<div>From: ${email}<br/>Name: ${name}<br/>${subject}<br/><p>${message}</p><br/></div>`
    })
    .then((response) => {
      res.status(200).json({ error: false, emailSent: true, errors: [], response });
      resolve("Success");
    })
    .catch((error) => {
      res.status(500).json({ error: true, emailSent: false, errors: [error] });
      reject(new Error(error));
    });
  });
};