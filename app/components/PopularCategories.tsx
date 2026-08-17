"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Industrial Lubricants",
    image: "/product/1.jpg",
    link: "/categories/industrial-lubricants",
  },
  {
    name: "Lifting Equipment",
    image: "/product/2.jpg",
    link: "/categories/lifting-equipment",
  },
  {
    name: "Small Home Appliances",
    image: "/product/3.jpg",
    link: "/categories/small-home-appliances",
  },
  {
    name: "Testing Meters & Lab Equipments",
    image: "/product/4.jpg",
    link: "/categories/testing-meters-lab",
  },
  {
    name: "Utility Machinery",
    image: "/product/5.jpg",
    link: "/categories/utility-machinery",
  },
  {
    name: "Waste Recycling & Safety Equipments",
    image: "/product/6.jpg",
    link: "/categories/waste-safety",
  },
  {
    name: "Industrial Pumps",
    image: "/product/7.jpg",
    link: "/categories/industrial-pumps",
  },
  {
    name: "Chemicals",
    image: "/product/8.jpg",
    link: "/categories/chemicals",
  },
];

const features = [
  {
    title: "Tested Equip.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "After-sales",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Team",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Nation-wide",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8h4.993a1 1 0 01.74.325L21.3 12.14A1 1 0 0121.5 13V16a1 1 0 01-1 1h-1.5m-3 0h-3" />
      </svg>
    ),
  },
];

export default function PopularCategories() {
  return (
    <div className="w-full">
      {/* Popular Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-extrabold text-[#FF6B00] mb-8 text-left tracking-tight">
          Popular Categories
        </h2>
        <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible sm:grid-cols-4 lg:grid-cols-8 gap-6 pb-4 sm:pb-0 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={cat.link}
              className="flex flex-col items-center text-center group cursor-pointer flex-shrink-0 w-[100px] sm:w-auto snap-center"
            >
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden relative bg-gray-50 transition-all duration-300 group-hover:scale-105 ring-offset-2 ${
                i === 0 
                  ? "ring-[3px] ring-[#FF6B00]" 
                  : "ring-2 ring-gray-200 group-hover:ring-[#FF6B00]"
              }`}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 96px) 100vw, 96px"
                  unoptimized
                />
              </div>
              <span className="mt-3 text-xs font-bold text-[#FF6B00] hover:text-[#e05e00] transition-colors leading-tight max-w-[110px] min-h-[32px] flex items-center justify-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose US Section */}
      <section className="w-full bg-[#F5F5F5] py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#FF6B00] tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-gray-500 text-sm font-semibold mt-1 mb-8">
            Trusted machines. Reliable service.
          </p>
          <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4 sm:pb-0 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {features.map((feat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100/60 flex-shrink-0 w-[160px] sm:w-auto snap-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-sm mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-800 text-center leading-snug">
                  {feat.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
