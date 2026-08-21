import nodemailer from "nodemailer";

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
    });

    // 2. Confirmation to client — reply goes to your business email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      replyTo: process.env.CONTACT_TO_EMAIL,
      subject: "Thank you for contacting Rejish Khanal",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You, ${name}!</h2>
          <p style="color: #555; line-height: 1.6;">
            I have received your message and will get back to you within 24 hours.
          </p>
          <div style="margin: 20px 0; padding: 12px; background: #f5f5f5; border-radius: 6px;">
            <strong>Your message:</strong>
            <p style="margin-top: 8px; white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          <p style="color: #555; line-height: 1.6;">
            Best regards,<br>
            <strong>Rejish Khanal</strong><br>
            Technical SEO Specialist & Full Stack Developer
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">
            <a href="https://rejishkhanal.com.np" style="color: #999;">rejishkhanal.com.np</a>
          </p>
        </div>
      `,
    });

    return Response.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
