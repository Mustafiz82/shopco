"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const email = e.target.email.value;
    const password = e.target.password.value;
    const rememberMe = e.target.rememberMe.checked

    console.log(rememberMe);



    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: rememberMe,
    }); 

    
    if(data?.user?.email) {
        router.push("/")
        setLoading(false)
    }

    if(error.message){
        setError(error.message)
        setLoading(false)
    }




  };


    const handleSocialLogin = async (provider) => {
      const data = await authClient.signIn.social({
        provider: provider,
      });
  
      console.log(data);
    };

  return (
    <div className="relative min-h-screen w-full bg-[#fbfbfb] text-zinc-900 flex items-center justify-center p-4 selection:bg-black selection:text-white">
      {/* Subtle Background Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Card Container */}
        <div className="w-full rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-xl shadow-zinc-950/[0.04] sm:p-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Enter your details to Sign In
            </p>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleSocialLogin("google")}
              className="flex items-center justify-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.98]"
            >
              <FaGoogle className="h-4 w-4 text-zinc-700" />
              <span>Google</span>
            </button>

            <button
              type="button"
               onClick={() => handleSocialLogin("github")}
              className="flex items-center justify-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.98]"
            >
              <FaGithub className="h-4 w-4 text-zinc-900" />
              <span>GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6 flex items-center justify-center">
            <div className="w-full border-t border-zinc-200" />
            <span className="absolute bg-white px-3 text-xs font-medium uppercase tracking-wider text-zinc-400">
              or continue with email
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold tracking-wide text-zinc-700"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-400">
                  <FiMail className="h-4 w-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 pl-10 pr-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-all duration-200 hover:bg-white focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold tracking-wide text-zinc-700"
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs font-medium text-zinc-500 underline-offset-4 hover:text-black hover:underline transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-400">
                  <FiLock className="h-4 w-4" />
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 pl-10 pr-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-all duration-200 hover:bg-white focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center pt-1">
              <label className="flex cursor-pointer items-center gap-2.5">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="h-4 w-4 rounded border-zinc-300 text-black accent-black focus:ring-black/20"
                />
                <span className="text-xs text-zinc-600 select-none">
                  Remember me 
                </span>
              </label>
            </div>
      <p className="text-red-500">{error}</p>
            {/* Submit Button */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-zinc-800 active:scale-[0.99] shadow-md shadow-black/10 mt-2"
            >
              <span>{loading ? "signing in ..." : "Sign in"}</span>
              <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-xs text-zinc-500">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-black underline underline-offset-4 hover:text-zinc-700 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Terms & Privacy */}
        <p className="mt-6 text-center text-xs text-zinc-400">
          By continuing, you agree to our{" "}
          <Link
            href="#"
            className="underline hover:text-zinc-600 transition-colors"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="#"
            className="underline hover:text-zinc-600 transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
