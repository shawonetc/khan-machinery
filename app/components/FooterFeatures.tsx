"use client";

const trustBadges = [
  {
    title: "Free Delivery",
    highlight: "On all order above BDT 5000",
    icon: (
      <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Easy 7 days return",
    highlight: "7 days Easy return Guaranty",
    icon: (
      <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10" />
      </svg>
    ),
  },
  {
    title: "International Warranty",
    highlight: "1 year official warranty",
    icon: (
      <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "100% secure checkout",
    highlight: "COD/Mobile banking/visa",
    icon: (
      <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function FooterFeatures() {
  return (
    <section className="w-full bg-[#F5F5F5] py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100/60 hover:shadow-md transition-shadow"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">
                {badge.icon}
              </div>
              
              {/* Text info */}
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-[#FF6B00] tracking-tight leading-tight">
                  {badge.title}
                </span>
                <span className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">
                  {badge.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
