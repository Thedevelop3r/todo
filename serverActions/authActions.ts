"use server";
import { User } from "../server/models/user.model"; // Adjust path as needed
import bcrypt from "bcrypt";

// SIGN UP ACTION
export async function signUpFormAction(data: { email: string; password: string }) {
    const { email, password } = data;
    console.log("server actions -> ", data);
    // Validate
    if (!email || !password) {
        throw new Error("Email and password are required.");
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw new Error("User already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    return { status: "success", message: "Registration successful" };
}

// SIGN IN ACTION
export async function signInFormAction(data: { email: string; password: string }) {
    const { email, password } = data;

    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error("Invalid email or password");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error("Invalid email or password");
    }

    // You would set a cookie/session here if needed

    return { message: "Login successful" };
}
