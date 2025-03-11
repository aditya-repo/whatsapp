"use client"

import React, { useState } from "react";
import axios from "axios";
import URL from "@/lib/Urls";

type SignupFormProps = {
  setCurrentPage: (page: string) => void;
};

const SignupForm: React.FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { name, username, email, password };

    try {
      const response = await axios.post(URL.SIGNUP(), payload);
      const { token } = response.data;
      if (token) {
        localStorage.setItem("authToken", token);
      }
    } catch (error) {
      setError("Invalid request");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">New Here? Join Us</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end mb-3">
            <a href="/forgot-password" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
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