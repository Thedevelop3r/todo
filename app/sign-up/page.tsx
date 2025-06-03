"use client";
import React, { useState } from "react";
import { signUpFormAction } from "@/serverActions/authActions";
import Link from 'next/link';

export default function SignUp() {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('email', formState.email);
            formData.append('password', formState.password);
            setLoading(true);
            const response = await signUpFormAction({ ...formState });
            setMessage(response.message);
            setLoading(false);
            setSuccess(true);
            setError(null);
            // redirect or show success message
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-200">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
                    Create an Account
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formState.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {error && (
                        <p className="text-red-600 text-sm text-center">{error}</p>
                    )}
                    {success && (
                        <p className="text-green-600 text-sm text-center">{message}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-green-400 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-green-500 transition-all"
                    >
                        Sign Up
                    </button>
                    {/* already have an account */}
                    <p className="text-sm text-gray-600 text-center mt-4">
                        Already have an account?{" "}
                        <Link
                            href="/sign-in"
                            className="text-blue-600 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
