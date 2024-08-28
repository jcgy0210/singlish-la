"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import LoginForm from "../ui/login-form";

export default function AuthPage() {
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
    <main className="flex min-h-screen items-center justify-center p-4 md:p-8 bg-gray-100">
      <LoginForm />
    </main>
  );
}
