'use server'
import { checkEmail, checkTag } from "@/lib/drizzle"
import { z } from 'zod'

export type ActionResponse = {
    success: boolean
    message: string
    errors?: Record<string, string[]>
    error?: string
}
// Defined Zod schema for signup validation
const signUpSchema = z
    .object({
        email: z.string().min(1, 'Email is required').email('Invalid email format'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
        confirmPassword: z.string().min(1, 'Please confirm your password'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    })
export type signUpData = z.infer<typeof signUpSchema>

const signUpAction = async (formData: FormData) => {
    //validate Data
    //check if user exists in db if not ask to use different email 
    //generate a tag and check in db
    //retrun the email id back in resposne

    

    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const validateData = signUpSchema.safeParse(data);

    if (!validateData.success) {
        return {
            success: false,
            message: "Validation Error"
        }
    }
}

export default signUpAction;