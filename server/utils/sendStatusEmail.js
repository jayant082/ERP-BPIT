const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendStatusEmail(to, subject, html) {
  try {
    await resend.emails.send({
      from: `BPIT Admissions <${process.env.EMAIL_USER}>`,
      to: [to],
      subject,
      html,
      text: html.replace(/<[^>]*>/g, '') // Fallback text version
    });

    return true;
  } catch (error) {
    console.error('Resend error:', error);
    return false;
  }
}

module.exports = sendStatusEmail;
