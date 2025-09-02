import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  message: string;
}

export async function sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const emailContent = `
New Contact Form Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject || 'Not provided'}

Message:
${formData.message}

--
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    await mailService.send({
      to: 'hello@procyonts.com',
      from: 'krishkrizz@gmail.com', // Your verified sender email
      subject: `Contact Form: ${formData.subject || `Message from ${formData.firstName} ${formData.lastName}`}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${formData.subject || 'Not provided'}</p>
          </div>
          
          <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #374151;">${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `
    });

    return true;
  } catch (error: any) {
    console.error('SendGrid email error details:', {
      message: error.message,
      code: error.code,
      response: error.response?.body,
      errors: error.response?.body?.errors
    });
    
    // Log specific troubleshooting info
    if (error.code === 403) {
      console.error('SendGrid 403 Troubleshooting:');
      console.error('1. Verify sender email is correctly verified in SendGrid dashboard');
      console.error('2. Check API key has "Mail Send" permissions');
      console.error('3. Ensure sender email matches exactly what was verified');
      console.error('Current sender email:', 'krishkrizz@gmail.com');
    }
    
    // Log the full error for debugging
    if (error.response?.body?.errors) {
      error.response.body.errors.forEach((err: any, index: number) => {
        console.error(`Error ${index + 1}:`, err);
      });
    }
    
    return false;
  }
}