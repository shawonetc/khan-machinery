"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="w-full font-sans shadow-sm border-b border-gray-100 bg-white">
      {/* Top Bar - Orange */}
      <div className="w-full bg-[#FF6B00] text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0">
          {/* Left spacer/promo text */}
          <div className="text-xs sm:text-sm font-medium tracking-wide">
            Welcome to Khan Machinery Bangladesh
          </div>
          {/* Right side contact & social */}
          <div className="flex items-center gap-6">
            <a href="tel:+8801701646926" className="flex items-center gap-2 hover:opacity-90 transition-opacity font-semibold">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
              </svg>
              <span>+880 1701-646926</span>
            </a>
            <div className="h-4 w-px bg-white/30"></div>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3l.5-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 00-4 4v2z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Main Bar - Logo, Search, User actions */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-row justify-between items-center gap-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 bg-gray-50 rounded-full border border-gray-100 overflow-hidden shadow-sm">
              <Image
                src="/logo.jpg"
                alt="Khan Machinery Logo"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-gray-900 leading-none">
                KHAN MACHINERY
              </span>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#FF6B00] uppercase mt-0.5">
                Bangladesh
              </span>
            </div>
          </Link>

          {/* Search bar */}
          <div className="w-full max-w-lg relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by machine name"
                className="w-full border-2 border-[#FF6B00] rounded-full py-2.5 pl-5 pr-12 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 placeholder-gray-400"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-orange-50 rounded-full transition-colors group">
                <svg className="w-5 h-5 text-[#FF6B00] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-gray-700 hover:text-[#FF6B00] font-semibold text-sm transition-colors">
              Log In
            </Link>
            <div className="h-6 w-px bg-gray-200"></div>
            <Link href="/cart" className="relative flex items-center gap-1.5 text-gray-700 hover:text-[#FF6B00] transition-colors group">
              <div className="relative">
                <svg className="w-7 h-7 stroke-current fill-none group-hover:scale-105 transition-transform" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 bg-[#FF6B00] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header Bar - Logo, Menu, Search (Hidden on Desktop) */}
      <div className="md:hidden w-full bg-white px-4 py-3 border-b border-gray-100">
        {/* Row 1: Hamburger | Logo + Name | Cart */}
        <div className="flex items-center justify-between gap-2">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 text-gray-700 hover:text-[#FF6B00] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo & Name Section */}
          <Link href="/" className="flex items-center gap-2 group flex-grow justify-center">
            <div className="relative w-9 h-9 bg-gray-50 rounded-full border border-gray-100 overflow-hidden shadow-sm flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Khan Machinery Logo"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-extrabold text-sm tracking-tight text-gray-900 leading-none">
                KHAN MACHINERY
              </span>
              <span className="text-[8px] font-semibold tracking-[0.2em] text-[#FF6B00] uppercase mt-0.5">
                Bangladesh
              </span>
            </div>
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="relative p-1 text-gray-700 hover:text-[#FF6B00] transition-colors group">
            <div className="relative">
              <svg className="w-7 h-7 stroke-current fill-none group-hover:scale-105 transition-transform" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-[#FF6B00] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                0
              </span>
            </div>
          </Link>
        </div>

        {/* Row 2: Search Bar */}
        <div className="mt-3 relative w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by machine name"
              className="w-full border-2 border-[#FF6B00] rounded-full py-2 pl-4 pr-10 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 placeholder-gray-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-orange-50 rounded-full transition-colors group">
              <svg className="w-4 h-4 text-[#FF6B00]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Bar (Hidden on Mobile) */}
      <div className="hidden md:block border-t border-gray-100 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Desktop Nav Items */}
            <nav className="flex items-center gap-1">
              <Link
                href="/"
                className="px-5 py-3 text-sm font-bold text-[#FF6B00] bg-white border-x border-gray-100 shadow-[0_-2px_0_inset_#FF6B00] flex items-center"
              >
                Home
              </Link>

              {/* Categories Dropdown Container */}
              <div className="relative">
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  onBlur={() => setTimeout(() => setIsCategoriesOpen(false), 200)}
                  className="px-5 py-3 text-sm font-semibold text-gray-700 hover:text-[#FF6B00] hover:bg-gray-100/50 flex items-center gap-1.5 transition-all"
                >
                  <span>Categories</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isCategoriesOpen && (
                  <div className="absolute left-0 mt-0.5 w-56 bg-white border border-gray-100 rounded-b-md shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link href="/categories/industrial" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6B00]">Industrial Machinery</Link>
                    <Link href="/categories/agricultural" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6B00]">Agricultural Equipment</Link>
                    <Link href="/categories/construction" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6B00]">Construction Tools</Link>
                    <Link href="/categories/spare-parts" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6B00]">Spare Parts</Link>
                  </div>
                )}
              </div>

              <Link
                href="/shop"
                className="px-5 py-3 text-sm font-semibold text-gray-700 hover:text-[#FF6B00] hover:bg-gray-100/50 transition-colors"
              >
                Shop Machinery
              </Link>

              <Link
                href="/contact"
                className="px-5 py-3 text-sm font-semibold text-gray-700 hover:text-[#FF6B00] hover:bg-gray-100/50 transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Nav Menu (Pushed here for absolute relative positions) */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white px-4 py-2 space-y-1 shadow-md animate-in fade-in duration-200">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-bold text-[#FF6B00] bg-orange-50"
          >
            Home
          </Link>
          <div className="px-3 py-2 text-base font-semibold text-gray-700">
            <span className="block border-b border-gray-100 pb-1 mb-2">Categories</span>
            <div className="pl-4 space-y-2">
              <Link href="/categories/industrial" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#FF6B00]">Industrial Machinery</Link>
              <Link href="/categories/agricultural" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#FF6B00]">Agricultural Equipment</Link>
              <Link href="/categories/construction" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#FF6B00]">Construction Tools</Link>
              <Link href="/categories/spare-parts" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#FF6B00]">Spare Parts</Link>
            </div>
          </div>
          <Link
            href="/shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#FF6B00]"
          >
            Shop Machinery
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#FF6B00]"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
