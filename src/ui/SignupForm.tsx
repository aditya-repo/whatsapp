"use client"

import React, { useActionState, useState } from "react";
import { signup } from "@/actions/auth";

type SignupFormProps = {
  setCurrentPage: (page: string) => void;
};

const SignupForm: React.FC = () => {

  const [state, action, pending] = useActionState(signup, undefined)

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">New Here? Join Us</h2>
        <form action={action}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {state?.errors?.name && <p>{state.errors.name}</p>}
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {state?.errors?.email && <p>{state.errors.email}</p>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />      {state?.errors?.password && (
            <div>
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex justify-end mb-3">
            <a href="/forgot-password" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit" disabled={pending}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center mt-4 text-sm">
          <p className="mr-2">Already have an account?</p>
          <button className="text-blue-500 hover:underline">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;