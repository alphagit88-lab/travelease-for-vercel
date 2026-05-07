'use client';

import React, { useState, useEffect } from "react";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { useRouter } from "next/navigation";
import { Route } from "@/routers/types";
import Logo, { logoAdImg } from "@/shared/Logo";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { admin, login, loading: authLoading } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && admin) {
      router.replace("/admin/dashboard" as Route<string>);
    }
  }, [admin, authLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email, password);
    setLoading(false);

    if (result.success) {
      router.push("/admin/dashboard" as Route<string>);
    } else {
      setError(result.message || "Invalid email or password");
    }
  };

  if (authLoading || admin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-6000"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0b2e4e] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-6000/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 flex justify-center items-center px-4">
        <div className="w-full max-w-[480px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[2rem] shadow-2xl">
          <div className="text-center mb-10 flex flex-col items-center">
            <div className="bg-white px-6 py-3 rounded-[2rem] shadow-xl mb-6 flex items-center justify-center">
              <Logo className="w-40" img={logoAdImg} imgLight={logoAdImg} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Admin Portal
            </h2>
            <p className="text-neutral-300">
              Please enter your credentials to continue
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-200 ml-1">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="!bg-white/5 !border-white/10 !text-white placeholder:text-neutral-500 h-12 rounded-xl focus:!border-[#fa7301]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-200 ml-1">
                Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                className="!bg-white/5 !border-white/10 !text-white placeholder:text-neutral-500 h-12 rounded-xl focus:!border-[#fa7301]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm py-3 px-4 rounded-xl text-center">
                {error}
              </div>
            )}

            <div className="pt-4">
              <ButtonPrimary 
                type="submit" 
                loading={loading}
                className="w-full h-12 rounded-xl !bg-[#fa7301] hover:!bg-[#e66a01] transition-all shadow-lg shadow-[#fa7301]/20 border-none"
              >
                Sign In
              </ButtonPrimary>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-400">
              &copy; {new Date().getFullYear()} TravelEase. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
