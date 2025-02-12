"use client";
import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  username: string;
  password: string;
}

const Signup: React.FC = () => {
  // State to handle input values
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <button onClick={()=>{
                        axios.post("http://localhost:3000/api/user",{
                            username:formData.username,
                            password:formData.password
                        })
          }
          }
            type="submit"
            className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
