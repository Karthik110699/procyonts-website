import { type Express } from "express";
import { createServer, type Server } from "http";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, company, phone, subject, message, consent } = req.body;
      
      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ 
          message: "Missing required fields: firstName, lastName, email, and message are required" 
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }
      await sendContactEmail({
        firstName,
        lastName,
        email,
        company,
        phone,
        subject,
        message
      });
      
      console.log("Contact form submission:", {
        firstName,
        lastName,
        email,
        company,
        phone,
        subject,
        message,
        consent,
        timestamp: new Date().toISOString()
      });

      res.status(200).json({ 
        message: "Thank you for your message. We will get back to you soon!",
        success: true 
      });
    } catch (error: any) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
