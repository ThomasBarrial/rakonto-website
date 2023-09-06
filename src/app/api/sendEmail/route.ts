/* eslint-disable import/prefer-default-export */

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { userFirstName, userName, userEmail, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'EMAIL',
      pass: 'PASS',
    },
  });

  const transport = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true, //ssl
    auth: {
      user: 'EMAIL',
      pass: 'PASS',
    },
  });

  const mailOptions = {
    from: 'EMAIL',
    to: userEmail,
    subject: 'Confirmation de formulaire de contact',
    text: `Bonjour ${userFirstName} ${userName},\n\nVotre message a été reçu : ${message}`,
  };
  try {
    // Envoyer l'email
    await transport.sendMail(mailOptions);

    return new Response('Email envoyé avec succès');
  } catch (error) {
    console.error(error);
    return new Response("Une erreur s'est produite lors de l'envoi de l'email");
  }
}
