import nodemailer from "nodemailer";
import { clientConfirmationTemplate, notificationTemplate } from "./emailTemplates";

export async function POST(req) {
  console.log("[CONTACT] Hit /api/contact", { method: req.method, url: req.url });
  try {
    const { name, email, message } = await req.json();
    console.log("[CONTACT] Received:", { name, email });

    if (!name || !email || !message) {
      console.log("[CONTACT] Missing fields");
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.CONTACT_TO_EMAIL) {
      console.error("[CONTACT] Missing env vars:", {
        GMAIL_USER: !!process.env.GMAIL_USER,
        GMAIL_APP_PASSWORD: !!process.env.GMAIL_APP_PASSWORD,
        CONTACT_TO_EMAIL: !!process.env.CONTACT_TO_EMAIL,
      });
      return Response.json({ error: "Email configuration is missing" }, { status: 500 });
    }

    console.log("[CONTACT] Env vars OK, sending emails...");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.verify();

    // 1. Notify yourself — from your Gmail, reply goes to the visitor
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
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

    console.log("[CONTACT] Emails sent successfully");
    return Response.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("[CONTACT] Error:", err.message, err.stack);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
