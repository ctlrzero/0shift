import { Router, Request, Response } from "express";
import { z } from "zod";

const router = Router();

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

async function sendEmail(data: ContactFormData): Promise<void> {
  console.log("Contact form submission received:", data);
}

router.post("/contact", async (req: Request, res: Response) => {
  try {
    const data = contactFormSchema.parse(req.body);

    try {
      await sendEmail(data);
      res.json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      console.log("Contact form data logged for manual processing:", data);
      res.json({
        success: true,
        message:
          "Contact form submitted successfully. We will be in touch soon.",
      });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        error: "Invalid form data",
        details: error.errors,
      });
    } else if (error instanceof Error) {
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        error: "An error occurred processing your request",
      });
    } else {
      res.status(500).json({
        success: false,
        error: "An unexpected error occurred",
      });
    }
  }
});

export const contactRouter = router;
