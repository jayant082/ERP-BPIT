const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(to, subject, text, html) {
  try {
    await resend.emails.send({
      from: `BPIT Admissions <${process.env.EMAIL_USER}>`,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      text,
    });

    return true;
  } catch (error) {
    console.error('Resend error:', error);
    return false;
  }
}

module.exports = sendEmail;
