import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendContactFormEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, company, message, consent } = req.body;
      
      // Basic validation
      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ 
          message: "Missing required fields: firstName, lastName, email, and message are required" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }

      // Send email notification to sales@procyonts.com
      const emailSent = await sendContactFormEmail({
        firstName,
        lastName,
        email,
        company: req.body.company,
        phone: req.body.phone,
        subject: req.body.subject,
        message
      });

      if (!emailSent) {
        console.error("Failed to send email notification");
        // Continue with success response even if email fails
        // You might want to handle this differently based on requirements
      }
      
      console.log("Contact form submission:", {
        firstName,
        lastName,
        email,
        company,
        message,
        consent,
        emailSent,
        timestamp: new Date().toISOString()
      });

      res.status(200).json({ 
        message: "Thank you for your message! We will get back to you soon.",
        success: true 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ 
          message: "Email is required" 
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }

      console.log("Newsletter subscription:", {
        email,
        timestamp: new Date().toISOString()
      });

      res.status(200).json({ 
        message: "Successfully subscribed to newsletter!",
        success: true 
      });
    } catch (error) {
      console.error("Error processing newsletter subscription:", error);
      res.status(500).json({ 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
