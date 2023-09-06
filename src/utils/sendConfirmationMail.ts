import nodemailer from 'nodemailer';

const sendConfirmationMail = async (
  userEmail: string,
  userFirstName: string,
  userLastName: string,
  message: string
) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'contact.wildstory@gmail.com',
      pass: 'JSusf365+',
    },
  });

  const mailOptions = {
    from: 'contact.wildstory@gmail.com',
    to: userEmail,
    subject: 'Confirmation de formulaire de contact',
    text: `Bonjour ${userFirstName} ${userLastName},\n\nVotre message a été reçu : ${message}`,
  };

  // console.log(userEmail);
  await transporter.sendMail(mailOptions);
};

export default sendConfirmationMail;
