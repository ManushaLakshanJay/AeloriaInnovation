import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const contactData = insertContactSchema.parse(req.body);
      
      // Store contact submission
      const result = await storage.createContact(contactData);
      
      res.status(200).json({
        success: true,
        message: "Contact form submitted successfully"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        success: false,
        message: "An error occurred while submitting the form"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
