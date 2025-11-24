'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().optional(),
  organization: z.string().optional(),
  topic: z.string().min(1, { message: 'Please select a topic.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
    message: string | null;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        organization?: string[];
        topic?: string[];
        message?: string[];
    } | null
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below and try again.',
    };
  }

  // In a real application, you would send an email, save to a database, etc.
  console.log('Contact form submitted:', validatedFields.data);

  return { 
    message: 'Thank you for reaching out! Our team will get back to you within 2–3 working days.',
    errors: null
  };
}
