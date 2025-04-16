import { SignupFormSchema, FormState } from "@/lib/definitions";
import { createSession, deleteSession } from "@/lib/session";
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
    // 1. Validation
    const validateField = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    })

    console.log(validateField);
    

    if (!validateField.success) {
        return {
            errors: validateField.error.flatten().fieldErrors
        }
    }

    // 2. Prepare data for insertion
    const { name, email, password } = validateField.data

    console.log(name, email, password);

    return
    

    // Hash password
    // const hashedPassword = await bcrypt.hash(password, 10)
    // // 3. Insert the user into the database or call an Auth Library's API
    // const data = await db
    //     .insert(users)
    //     .values({
    //         name,
    //         email,
    //         password: hashedPassword,
    //     })
    //     .returning({ id: users.id })

    // const user = data[0]

    // if (!user) {
    //     return {
    //         message: 'An error occurred while creating your account.',
    //     }
    // }

    // // 4. Create User Session
    // await createSession(user.id)
}

export async function logout() {
    deleteSession()
    redirect('/login')
}