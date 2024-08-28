'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginAs, setLoginAs] = useState("user");
  const router = useRouter(); // Initialize useRouter

  const handleLogin = (e: any) => {
    e.preventDefault();
    const dummyUserEmail = "dummyuser@example.com";
    const dummyAdminEmail = "dummyadmin@example.com";
    const dummyPassword = "123";

    if (
      (loginAs === "user" && email === dummyUserEmail && password === dummyPassword) 
    ) {
      alert(`Login successful as ${loginAs}!`);
      router.push("/user/home"); 
    } 
    else if ( 
      (loginAs === "admin" && email === dummyAdminEmail && password === dummyPassword) ) {
        alert(`Login successful as ${loginAs}!`);
        router.push("/admin/dashboard"); 
    }
      else {
      alert("Invalid email or password. Please try again.");
    }
  };
  
  return (
    <form action={formAction} className="space-y-3">
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
          <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-[#900603]">
            {isSignIn ? "Login" : "Create your account"}
          </h2>
        </div>

        {isSignIn ? (
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Bind email state
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Bind password state
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="loginAs" className="block text-sm font-medium text-gray-700">
                Login as:
              </label>
              <select
                id="loginAs"
                name="loginAs"
                value={loginAs}
                onChange={(e) => setLoginAs(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded"
                  style={{
                    accentColor: "#900603", // Sets the checkbox color
                    borderColor: "#900603", // Sets the border color
                  }}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Save login info, can?
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="text-sm font-medium"
                  style={{
                    color: "#900603",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#700404")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#900603")}
                >
                  Forgot password ah?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
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
                onClick={handleLogin} // Trigger handleLogin on click
              >
                Log in
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-8 space-y-6" action="#" method="POST">
            {/* ... */}
          </form>
        )}

        <div className="text-center">
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-sm font-medium"
            style={{
              color: "#900603",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#700404")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#900603")}
          >
            {isSignIn
              ? "No account? Sign up leh"
              : "Already got account? Log in LA!"}
          </button>
        </div>
      </div>
    </form>
  );
}

    