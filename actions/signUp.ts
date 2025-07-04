'use server'
import { checkEmail, checkTag } from "@/lib/drizzle"
import { z } from "zod";
import {db} from "@/db/index";
import {usersTable} from "@/db/schema";

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
    //1.validate Data
    //2 check if user exists in db 
    //2 if not ask to use different email 
    //3 generate a tag and check in db
    //4. retrun the email id back in resposne


    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        confirmPassword:formData.get('confirmPassword') as string
    }

    const validateData = signUpSchema.safeParse(data);

    if (!validateData.success) {
        return {
            success: false,
            message: "Validation Error"
        }
    }

    const db_insert = await db.insert(usersTable).values(data);

    console.log(db_insert);
    
    return {
        success:true,
        message:"User Created"
    }
    
}

export default signUpAction;