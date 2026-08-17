"use client";

import Image from "next/image";
import Link from "next/link";

export interface Product {
  name: string;
  image: string;
  price: string | null;
  originalPrice?: string | null;
  discount?: string | null;
  link: string;
}

interface ProductSectionProps {
  title: string;
  seeAllLink: string;
  products: Product[];
}

export default function ProductSection({ title, seeAllLink, products }: ProductSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title block */}
      <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#FF6B00] tracking-tight">
          {title}
        </h2>
        <Link
          href={seeAllLink}
          className="border border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white px-5 py-1.5 rounded text-xs font-bold transition-colors tracking-wide uppercase"
        >
          See All
        </Link>
      </div>

      {/* Grid wrapper */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((prod, i) => (
          <Link
            key={i}
            href={prod.link}
            className="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-shadow relative"
          >
            {/* Discount Badge */}
            {prod.discount && (
              <span className="absolute top-2 left-2 bg-pink-600 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
                {prod.discount}
              </span>
            )}

            {/* Product Image */}
            <div className="w-full aspect-square relative bg-gray-50 overflow-hidden border-b border-gray-100/50">
              <Image
                src={prod.image}
                alt={prod.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                unoptimized
              />
            </div>

            {/* Content info */}
            <div className="p-3.5">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2 min-h-[36px] group-hover:text-[#FF6B00] transition-colors leading-tight">
                {prod.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
