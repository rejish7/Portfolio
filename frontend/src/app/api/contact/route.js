import nodemailer from "nodemailer";
import { clientConfirmationTemplate, notificationTemplate } from "./emailTemplates";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 1. Notify yourself — from noreply on your domain, reply goes to the visitor
    await transporter.sendMail({
      from: '"Rejish Khanal Website" <noreply@rejishkhanal.com.np>',
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: notificationTemplate(name, email, message),
    });

    // 2. Confirmation to client — reply goes to your business email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      replyTo: process.env.CONTACT_TO_EMAIL,
      subject: "Thank you for contacting Rejish Khanal",
      html: clientConfirmationTemplate(name, message),
    });

    return Response.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
