import { Resend } from 'resend';

const resend = new Resend('re_AFy51Y8A_Q7u8frUCsi8ySy2MS7wtsjTu');

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { firstName, lastName, email, company, phone, subject, message } = data;
  
  const DESTINATION_EMAIL = 'karthi1106keyan@gmail.com';

  try {
    const response = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [DESTINATION_EMAIL],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });


    if (response.error) {
      console.error('Resend Error:', response.error);
      throw new Error(response.error.message);
    }

    return response.data;
  } catch (error: any) {
    console.error('Failed to send email:', error);
    throw error;
  }
}
