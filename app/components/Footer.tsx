"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 text-gray-700 font-sans relative">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
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
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-gray-900 leading-none">
                  KHAN MACHINERY
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-[#FF6B00] uppercase mt-0.5">
                  Bangladesh
                </span>
              </div>
            </Link>
            <p className="text-base text-gray-500 leading-relaxed">
              Khan Machinery BD is an industrial machinery supplier in Bangladesh, delivering quality machinery, technical support, and reliable solutions for textile and process industries since 2018.{" "}
              <Link href="/about" className="text-[#FF6B00] font-semibold hover:underline">
                See More
              </Link>
            </p>
          </div>

          {/* Column 2: Categories */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-gray-900 text-lg tracking-tight border-b border-gray-100 pb-2">
              Categories
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-base text-gray-500">
              <li><Link href="/categories/utility-machinery" className="hover:text-[#FF6B00] transition-colors">Utility Machinery</Link></li>
              <li><Link href="/categories/garments-textiles" className="hover:text-[#FF6B00] transition-colors">Garments & Textiles Machinery</Link></li>
              <li><Link href="/categories/chiller-wtp" className="hover:text-[#FF6B00] transition-colors">Chiller & WTP</Link></li>
              <li><Link href="/categories/electrical-electronics" className="hover:text-[#FF6B00] transition-colors">Electrical & Electronics</Link></li>
              <li><Link href="/categories/industrial-lubricants" className="hover:text-[#FF6B00] transition-colors">Industrial Lubricants</Link></li>
              <li><Link href="/categories/safety-equipment" className="hover:text-[#FF6B00] transition-colors">Safety Equipment</Link></li>
              <li><Link href="/categories/lifting-equipment" className="hover:text-[#FF6B00] transition-colors">Lifting Equipment</Link></li>
              <li><Link href="/categories/testing-meters-lab" className="hover:text-[#FF6B00] transition-colors">Testing Meters & Lab Equipments</Link></li>
              <li><Link href="/categories/chemicals" className="hover:text-[#FF6B00] transition-colors">Chemicals</Link></li>
              <li><Link href="/categories/industrial-pumps" className="hover:text-[#FF6B00] transition-colors">Industrial Pumps</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-gray-900 text-lg tracking-tight border-b border-gray-100 pb-2">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-base text-gray-500">
              <li><Link href="/about" className="hover:text-[#FF6B00] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF6B00] transition-colors">Contact Us</Link></li>
              <li><Link href="/delivery-policy" className="hover:text-[#FF6B00] transition-colors">Delivery Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-[#FF6B00] transition-colors">Terms & Condition</Link></li>
              <li><Link href="/return-policy" className="hover:text-[#FF6B00] transition-colors">Return Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="flex flex-col gap-4 text-base text-gray-500">
            <h3 className="font-bold text-gray-900 text-lg tracking-tight border-b border-gray-100 pb-2">
              Contact
            </h3>
            
            <div className="flex items-start gap-2.5">
              {/* Location Pin */}
              <svg className="w-5 h-5 text-[#FF6B00] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Office Address:</p>
                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                  Bagdad Tanzia Tower, Classic House, 2nd Floor, Tangail Road, Chandona Chowrasta, Gazipur-1702, Bangladesh.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {/* Phone Icon */}
              <svg className="w-5 h-5 text-[#FF6B00] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+8801701646926" className="hover:text-[#FF6B00] transition-colors text-sm font-semibold">
                +880 1701-646926
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              {/* Mail Icon */}
              <svg className="w-5 h-5 text-[#FF6B00] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:khanmachinery213@gmail.com" className="hover:text-[#FF6B00] transition-colors text-sm font-semibold">
                khanmachinery213@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-2">
              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3l.5-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 00-4 4v2z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#FF6B00] py-3.5 text-center text-sm font-semibold text-white tracking-wide">
        Copyright © 2026 | Khan Machinery BD Designed by{" "}
        <a href="https://websitemakerbd.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-white font-bold">
          WebsiteMakerBD.Com
        </a>
      </div>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/8801701646926"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}
