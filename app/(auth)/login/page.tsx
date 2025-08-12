// app/(auth)/login/page.tsx
'use client';

import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { motion, Variants } from '@/components/module/framer-motion';
import { useState } from 'react';
import { GoogleIcon } from '@/components/icons/google-icon';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants:Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { ease: 'easeOut' } },
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      className="flex flex-col h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top section for Desktop */}
      <div className="hidden lg:flex items-center justify-between">
        <Image src="/assets/logos/logo.png" alt="A start puls logo" width={110} height={32} />
        <p className="text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-bold text-red-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Main Form Content */}
      <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full lg:mx-0">
        <motion.div variants={itemVariants}>
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to A Star Plus homepage
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Login to your account</h1>
          <p className="mt-2 text-gray-500">
            Welcome to A Star Plus Pest Control - Let&apos;s login to your account.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-8">
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-2.5 font-semibold hover:bg-gray-50 transition-colors">
            <GoogleIcon className="w-5 h-5" />
            Sign In with Google
          </button>
        </motion.div>
        
        <motion.div variants={itemVariants} className="relative my-6">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">Or, Sign In With Email</span></div>
        </motion.div>

        <form className="space-y-4">
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
            <input id="email" type="email" placeholder="example@gmail.com" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
          </motion.div>
          <motion.div variants={itemVariants} className="relative">
            <label htmlFor="password"  className="text-sm font-medium">Password</label>
            <input id="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-8 text-gray-400 hover:text-gray-600">
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center justify-between text-sm">
             <div><input type="checkbox" id="remember-me" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600" /> <label htmlFor="remember-me">Remember me</label></div>
             <Link href="/forgot-password" className="font-medium text-red-600 hover:underline">Forgot password?</Link>
          </motion.div>
          <motion.div variants={itemVariants} className="pt-4">
            <button type="submit" className="w-full rounded-md bg-red-600 py-2.5 font-semibold text-white shadow-sm hover:bg-red-700 transition-colors">
              Login
            </button>
          </motion.div>
        </form>
      </div>

      {/* Footer */}
      <div className="hidden lg:flex items-center justify-between text-xs text-gray-500 mt-auto pt-8">
        <p>&copy; {new Date().getFullYear()} A Star Plus. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </motion.div>
  );
}