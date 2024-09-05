"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { authenticate } from "@/app/lib/actions";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [isPending, setIsPending] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginAs, setLoginAs] = useState("user");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setErrorMessage(undefined); // Clear previous errors

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const result = await authenticate(undefined, formData); // Call the authenticate function

      if (result) {
        setErrorMessage(result); // Set the error message from authenticate
      } else {
        // Clear error message on success
        setErrorMessage(undefined);

        if (loginAs === "user") {
          router.push("/user/home");
        } else if (loginAs === "admin") {
          router.push("/admin/dashboard");
        }
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-3">
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
            {isSignIn ? "Login" : "Create your account"}
          </h2>
        </div>

        {errorMessage && (
          <div className="text-red text-center">{errorMessage}</div>
        )}

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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="loginAs"
            className="block text-sm font-medium text-gray-700"
          >
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
            {isPending ? "Logging in..." : "Log in"}
          </button>
        </div>

        <div className="text-center">
          <span className="text-sm text-gray-600">No account yet? </span>
          <Link href="/signup"
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
            Sign up
          </Link>        
        </div>
      </div>
    </form>
  );
}
