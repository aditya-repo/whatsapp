import { z } from "zod";
import { JWTPayload } from 'jose';


export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(2, {message: "Minimum 2 letter requiredName must be at least 2 characters long"}).trim(),
    email: z.string().email({message: "Please enter a valid email"}).trim(),
    password: z.string()
        .min(8, {message: "At least 8 characters long"})
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
          message: 'Contain at least one special character.',
        })
        .trim()
})

export type FormState = | {
    errors?: {
        name?: string[],
        email?: string[],
        password?: string[]
    }
    message? : string[]
} | undefined

export interface SessionPayload extends JWTPayload {
    userId: string;
    role?: string;
  }