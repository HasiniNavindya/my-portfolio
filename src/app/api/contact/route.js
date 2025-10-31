import fs from 'fs/promises';
import path from 'path';

export async function POST(req) {
  try {
    const { name, email, message, subject } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Read SMTP config from env
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.RECEIVER_EMAIL || process.env.SMTP_USER || 'hasini.navindya001@gmail.com';

    // If SMTP is configured, try to send via nodemailer (dynamic import to avoid build-time errors)
    if (host && port && user && pass) {
      try {
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.createTransport({
          host,
          port: Number(port),
          secure: Number(port) === 465,
          auth: { user, pass },
        });

        const mailOptions = {
          from: `${name} <${email}>`,
          to,
          subject: subject ? subject : `Portfolio contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
        };

        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ ok: true }), { status: 200 });
      } catch (sendErr) {
        console.error('Nodemailer send error', sendErr);
        // If sending fails, fall through to the log fallback below
      }
    }

    // Fallback: save the message to a local log file so submissions aren't lost during development
    try {
      const dataDir = path.resolve(process.cwd(), 'data');
      await fs.mkdir(dataDir, { recursive: true });
      const logPath = path.join(dataDir, 'messages.log');
      const entry = `---\n${new Date().toISOString()}\nName: ${name}\nEmail: ${email}\nSubject: ${subject || ''}\nMessage:\n${message}\n`;
      await fs.appendFile(logPath, entry, 'utf8');
      return new Response(JSON.stringify({ ok: true, note: 'saved-to-log' }), { status: 200 });
    } catch (fileErr) {
      console.error('Contact write fallback error', fileErr);
      return new Response(JSON.stringify({ error: fileErr.message || 'Server error' }), { status: 500 });
    }
  } catch (err) {
    console.error('Contact API error', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}
