"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "../../data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const categoryMap: Record<string, string> = {
  "industrial-lubricants": "Industrial Lubricants",
  "lifting-equipment": "Lifting Equipment",
  "small-home-appliances": "Small Home Appliances",
  "testing-meters-lab": "Testing Meters & Lab Equipments",
  "utility-machinery": "Utility Machinery",
  "waste-safety": "Waste Recycling & Safety Equipments",
  "industrial-pumps": "Industrial Pumps",
  "chemicals": "Chemicals",
};

export default function CategoryPage({ params }: PageProps) {
  const { slug } = use(params);
  const categoryName = categoryMap[slug];

  if (!categoryName) {
    return (
      <main className="flex-grow bg-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The requested category does not exist.</p>
          <Link href="/" className="inline-block bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold px-6 py-3 rounded transition-colors">
            Go Back Home
          </Link>
        </div>
      </main>
    );
  }

  // Filter products by category
  const filteredProducts = productsData.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <main className="flex-grow bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex text-xs sm:text-sm text-gray-500 font-medium mb-8">
          <Link href="/" className="hover:text-[#FF6B00] transition-colors">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-400">Categories</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-400">{categoryName}</span>
        </nav>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#FF6B00] tracking-tight mb-8">
          {categoryName}
        </h1>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredProducts.map((prod, i) => (
              <Link
                key={i}
                href={prod.link}
                className="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-shadow relative"
              >
                {prod.discount && (
                  <span className="absolute top-2 left-2 bg-[#D51A75] text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
                    {prod.discount}
                  </span>
                )}

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

                <div className="p-3.5">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2 min-h-[36px] group-hover:text-[#FF6B00] transition-colors leading-tight">
                    {prod.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
