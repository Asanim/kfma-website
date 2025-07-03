import type { Handler } from 'aws-lambda';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: process.env.AWS_REGION });

export const handler: Handler = async (event) => {
  try {
    const { name, email, phone, message, inquiryType } = JSON.parse(event.body);

    const emailParams = {
      Source: process.env.ADMIN_EMAIL, // Verified sender email
      Destination: {
        ToAddresses: [process.env.ADMIN_EMAIL],
      },
      Message: {
        Subject: {
          Data: `New KFMA Contact Inquiry - ${inquiryType}`,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: `
              <h2>New Contact Inquiry from KFMA Website</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p><em>This message was sent from the KFMA website contact form.</em></p>
            `,
            Charset: 'UTF-8',
          },
          Text: {
            Data: `
New Contact Inquiry from KFMA Website

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Inquiry Type: ${inquiryType}

Message:
${message}

---
This message was sent from the KFMA website contact form.
            `,
            Charset: 'UTF-8',
          },
        },
      },
    };

    await ses.send(new SendEmailCommand(emailParams));

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
      },
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
      },
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
