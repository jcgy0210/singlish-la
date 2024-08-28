"use client";

import LoginForm from "../ui/login-form";

export default function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 md:p-8 bg-gray-100">
      <LoginForm />
    </main>
  );
}