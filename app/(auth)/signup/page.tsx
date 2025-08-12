// app/(auth)/signup/page.tsx
'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion, Variants } from '@/components/module/framer-motion';
import { GoogleIcon } from '@/components/icons/google-icon';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { ease: 'easeOut' } },
};

export default function SignUpPage() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top section with Logo and Sign In link */}
      <div className="hidden lg:flex items-center justify-between">
        <Image src="/assets/logos/logo.png" alt="A start puls logo" width={110} height={32} />
        <p className="text-sm">
          Have an account?{' '}
          <Link href="/login" className="font-bold text-red-600 hover:underline">
            Sign In
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
          <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
          <p className="mt-2 text-gray-500">
            Welcome to A Star Plus Pest Control - Let&apos;s create your account.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-2.5 font-semibold hover:bg-gray-50 transition-colors">
            <GoogleIcon className="w-5 h-5" />
            Sign Up with Google
          </button>
        </motion.div>
        
        <motion.div variants={itemVariants} className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or, Sign Up With Email</span>
          </div>
        </motion.div>

        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div variants={itemVariants} className="w-full">
              <label htmlFor="first-name" className="text-sm font-medium">First Name</label>
              <input id="first-name" type="text" placeholder="John" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
            </motion.div>
            <motion.div variants={itemVariants} className="w-full">
              <label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
              <input id="last-name" type="text" placeholder="Doe" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
            </motion.div>
          </div>
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
            <input id="email" type="email" placeholder="example@gmail.com" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
            <input id="phone" type="tel" placeholder="eg., +1 214 000 000" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
          </motion.div>
          <motion.div variants={itemVariants} className="pt-4">
            <button type="submit" className="w-full rounded-md bg-red-600 py-2.5 font-semibold text-white shadow-sm hover:bg-red-700 transition-colors">
              Create Account
            </button>
          </motion.div>
        </form>
        <motion.p variants={itemVariants} className="mt-6 px-4 text-center text-xs text-gray-500">
          By clicking &quot;Sign up with Google or Email&quot; above, you agree to our
          <Link href="/terms" className="underline hover:text-red-600">Terms & Conditions</Link> and{' '}
          <Link href="/privacy" className="underline hover:text-red-600">Privacy Policy</Link>.
        </motion.p>
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