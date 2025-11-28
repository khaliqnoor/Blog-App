"use client"
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, User2 } from 'lucide-react';
import Link from 'next/link';
import { SignIn, SignInButton, UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Toggle this to see logged in state
  const { user, isSignedIn } = useUser();
  

  return (
    <nav className="bg-white dark:bg-gray-800 dark:text-white  shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            <a href='/' className="text-2xl font-bold [font-family:''] text-gray-900 dark:text-white">
              Tech <span className="text-blue-600">Blogs</span>
            </a>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8 ">
            <Link href="/" className="text-gray-700 dark:text-white hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link href="/projects" className="text-gray-700 dark:text-white hover:text-blue-600 font-medium transition">
              Projects
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-white hover:text-blue-600 font-medium transition">
              About
            </Link>
          </div>
          <div className='md:block hidden'>
          <ModeToggle />
          </div>
          {/* User Section - Hidden on mobile */}
          <div className="hidden md:flex items-center ml-6">
            {isSignedIn ? (
              <UserButton />
            ) : (
              <SignInButton className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 cursor-pointer transition" />
            )}
          </div>
        



          {/* Mobile menu button */}
          <div className="md:hidden flex">
             <div>
          <ModeToggle />
          </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 dark:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-700  border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link onClick={()=> setIsMenuOpen(false)} href="/" className="block dark:text-white text-gray-700 hover:text-blue-600 font-medium py-2">
              Home
            </Link>
            <Link onClick={()=> setIsMenuOpen(false)} href="/projects" className="block dark:text-white text-gray-700 hover:text-blue-600 font-medium py-2">
              Projects
            </Link>
            <Link onClick={()=> setIsMenuOpen(false)} href="/about" className="block dark:text-white text-gray-700 hover:text-blue-600 font-medium py-2">
              About
            </Link>
            <div className="pt-3 border-t border-gray-200 text-black text-xl font-bold">
              {isSignedIn ? (
                <div className='flex justify-between'>
               <UserButton />
               <p className='text-gray-400 font-bold'>Logged In</p>
               </div>
              ) : (
                <div className='flex justify-between'>
                  <SignInButton  className="w-full px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;