"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; 
import { register } from "@/app/lib/actions";

export default function SignupForm() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [isPending, setIsPending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setErrorMessage(undefined); 

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      const result = await register(formData); 

      // Handle errors and messages returned from the register function
      if (result.errors) {
        const errorMessages = Object.values(result.errors)
          .flat()
          .join(", "); // Join all error messages into a single string
        setErrorMessage(errorMessages); // Set the combined error messages
      } else {
        setErrorMessage(result.message); // Set the success or general message
        // Redirect to the login page after successful registration
        router.push('/login');
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-3">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Image
            src="/SinglishLA.png"
            alt="Logo"
            width={200}
            height={50}
            priority
            className="mx-auto"
          />
          <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-red">
            Create your account
          </h2>
        </div>

        {errorMessage && (
          <div className="text-red text-center">{errorMessage}</div>
        )}

        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
            <p style={{ color: 'red' }} className="text-xs mt-1">
              *at least 6 characters.
            </p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            aria-disabled={isPending}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white"
            style={{
              backgroundColor: "#900603",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#700404")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#900603")
            }
            disabled={isPending}
          >
            {isPending ? "Registering..." : "Sign up"}
          </button>
        </div>

        {/* Add a link to go back to the login page */}
        <div className="text-center">
          <Link href="/login" className="text-sm font-medium text-red">
            Back to Login
          </Link>
        </div>
      </div>
    </form>
  );
}
