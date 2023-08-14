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
      html: `<div><h2>from: ${email}</h2><br/><h2>name: ${name}</h2><h1>${subject}</h1><br/><p>${message}</p><br/><h4>Best Regards, ${name}!</h4></div>`
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