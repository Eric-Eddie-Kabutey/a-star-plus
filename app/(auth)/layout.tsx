'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// This header is only visible on mobile screens
function MobileAuthHeader() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="lg:hidden fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
       <Link href='/'>
						<Image
							src='/assets/shared/logos/logo.png'
							alt='Logo'
							width={110}
							height={32}
							className='h-14 w-auto md:h-16 lg:h-20'
						/>
					</Link>
        {/* This part can be made dynamic based on the current route if needed */}
        <p className="text-sm">
          Have an account?{' '}
          <Link href="/login" className="font-bold text-red-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MobileAuthHeader />
      <div className="relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* --- Left Side: Form --- */}
        {/* On mobile, this takes the full screen with padding for the fixed header */}
        <main className="relative z-0 w-full lg:col-span-1 pt-24 pb-8 lg:pt-8 px-4 sm:px-8 lg:px-12 xl:px-20 h-full flex flex-col justify-between">
          {children}
        </main>

        {/* --- Right Side: Image --- */}
        <aside className="hidden h-screen w-full lg:col-span-1 lg:block">
          <motion.div
            className="h-full w-full"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/assets/images/auth-banner.png"
              alt="Pest control professional"
              width={1280}
              height={1920}
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>
        </aside>
      </div>
    </>
  );
}