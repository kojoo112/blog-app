import nodemailer from "nodemailer";

export type EmailData = {
  email: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.google.com",
  port: 465,
  secure: true,
  auth: {
    user: "user",
    pass: "password",
  },
});

export const sendEmail = async ({ subject, message, email }: EmailData) => {
  const mailData = {
    to: "user",
    subject: `[BLOG] ${subject}`,
    from: email,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br />
    <p>보낸사람 : ${email}</p>
`,
  };
};
