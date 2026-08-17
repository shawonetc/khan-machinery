"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { productsData, Product } from "../../data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailsPage({ params }: PageProps) {
  const { slug } = use(params);
  const [quantity, setQuantity] = useState(1);

  // Find the current product
  const product = productsData.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  // Get related products from the same category (excluding current)
  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Extract a brand name from product name or default to Khan Machinery BD
  const getBrand = (name: string) => {
    const brands = ["Pedrollo", "Unitor", "Kemei", "Swan", "DMC", "Heliex Power", "Suntec"];
    for (const b of brands) {
      if (name.toLowerCase().includes(b.toLowerCase())) return b;
    }
    return "Khan Machinery BD";
  };

  const brand = getBrand(product.name);

  return (
    <main className="flex-grow bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex text-xs sm:text-sm text-gray-500 font-medium mb-8">
          <Link href="/" className="hover:text-[#FF6B00] transition-colors">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-400">Products</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-400 truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* Left Column: Image with zoom/search overlay */}
          <div className="relative aspect-square w-full bg-gray-50 border border-gray-100 rounded overflow-hidden flex items-center justify-center group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 550px"
              priority
              unoptimized
            />
            
            {/* Search/Zoom Icon */}
            <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-[#FF6B00] cursor-pointer transition-colors z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {product.discount && (
              <span className="absolute top-3 left-3 bg-[#D51A75] text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded shadow-sm">
                {product.discount}
              </span>
            )}
          </div>

          {/* Right Column: Info & Actions */}
          <div className="flex flex-col">
            {/* Title (large, bold, repeated twice style in description if needed, let's keep it clean as requested) */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
              {product.name}
            </h1>
            
            {/* Secondary short title/subtitle */}
            <h2 className="text-sm sm:text-base text-gray-500 font-medium mb-6">
              Premium {product.category} Equipment
            </h2>

            {/* Price section - HIDE as requested, but keep layout clean */}
            {/* No price display */}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold text-gray-700">Quantity</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={decrementQty}
                  className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition-colors text-sm border-r border-gray-300"
                >
                  -
                </button>
                <span className="px-5 py-1.5 font-bold text-gray-800 text-sm w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQty}
                  className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition-colors text-sm border-l border-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart & Order Now Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button className="bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded tracking-wide uppercase transition-colors">
                Add to Cart
              </button>
              <button className="bg-[#D51A75] hover:bg-[#b81261] text-white font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded tracking-wide uppercase transition-colors">
                Order Now
              </button>
            </div>

            {/* WhatsApp Order Button */}
            <a
              href={`https://wa.me/8801701646926?text=I%20want%20to%20inquire%20about%20${encodeURIComponent(product.name)}%20Qty:%20${quantity}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded flex items-center justify-center gap-2 mb-4 shadow-sm transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.417 9.864-9.855.002-2.63-1.023-5.101-2.886-6.968C16.486 1.963 14.022 1.04 11.4 1.04 5.966 1.04 1.544 5.459 1.54 10.896c-.001 1.62.425 3.21 1.232 4.616l-.984 3.597 3.687-.967-.172.102zM17.486 14.4c-.3-.149-1.772-.874-2.047-.975-.276-.101-.476-.149-.676.149-.2.3-.776.975-.951 1.176-.176.201-.351.226-.651.077-1.207-.597-2.361-1.741-3.11-3.048-.176-.3-.176-.55-.026-.7.136-.134.301-.351.451-.525.15-.176.201-.3.301-.5.1-.201.05-.376-.026-.525-.076-.15-.676-1.631-.926-2.235-.244-.589-.493-.508-.676-.517-.174-.01-.375-.012-.576-.012-.2 0-.526.075-.802.376-.276.3-1.052 1.029-1.052 2.509 0 1.48 1.077 2.913 1.227 3.113.15.2 2.115 3.227 5.128 4.53 2.152.93 2.946.75 3.996.597 1.056-.153 1.772-.72 2.047-1.374.275-.656.275-1.22.176-1.374-.1-.154-.3-.254-.6-.404z"/>
              </svg>
              <span>WhatsApp এ অর্ডার করুন</span>
            </a>

            {/* Call Order Button */}
            <a
              href="tel:01818271791"
              className="w-full bg-[#0084FF] hover:bg-[#0070da] text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded flex items-center justify-center gap-2 mb-6 shadow-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>কল করুন 01818271791</span>
            </a>

            {/* Metadata Links */}
            <div className="border-t border-gray-100 pt-4 text-xs sm:text-sm space-y-2">
              <div>
                <span className="text-gray-500">Category:</span>{" "}
                <Link href={`/categories/${slug}`} className="text-[#FF6B00] hover:underline font-semibold ml-1">
                  {product.category}
                </Link>
              </div>
              <div>
                <span className="text-gray-500">Tag:</span>{" "}
                <span className="text-[#FF6B00] font-semibold ml-1">
                  {brand}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Brand:</span>{" "}
                <span className="text-[#FF6B00] font-semibold ml-1">
                  {brand}
                </span>
              </div>
            </div>

            {/* Guaranteed Safe Checkout Panel */}
            <div className="border border-gray-200 rounded p-4 mt-6 text-center">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-3 relative after:content-[''] after:absolute after:top-1/2 after:w-12 after:h-px after:bg-gray-200 after:ml-2 before:content-[''] before:absolute before:top-1/2 before:w-12 before:h-px before:bg-gray-200 before:mr-2 before:-translate-x-full">
                Guaranteed Safe Checkout
              </span>
              <div className="flex justify-center items-center gap-3">
                <span className="px-2.5 py-1 text-[10px] font-bold text-white bg-[#E2136E] rounded">bKash</span>
                <span className="px-2.5 py-1 text-[10px] font-bold text-white bg-[#F15A22] rounded">Nagad</span>
                <span className="px-2.5 py-1 text-[10px] font-bold text-white bg-[#8C3494] rounded">Rocket</span>
                <span className="px-2.5 py-1 text-[10px] font-bold text-gray-700 bg-gray-100 rounded border border-gray-200">Visa</span>
                <span className="px-2.5 py-1 text-[10px] font-bold text-gray-700 bg-gray-100 rounded border border-gray-200">Mastercard</span>
              </div>
            </div>

          </div>
        </div>

        {/* Description / Tech Specs */}
        <div className="bg-white border border-gray-100 rounded p-6 sm:p-8 mb-12">
          <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">
            Product Description
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 mt-8">
            Technical Specifications
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-gray-600">
              <tbody>
                {Object.entries(product.specifications).map(([key, val], index) => (
                  <tr
                    key={key}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? "bg-gray-50/50" : ""
                    }`}
                  >
                    <td className="py-2.5 px-4 font-bold text-gray-800 w-1/3 sm:w-1/4">
                      {key}
                    </td>
                    <td className="py-2.5 px-4">
                      {val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#FF6B00] tracking-tight">
                Related Products
              </h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {relatedProducts.map((prod, i) => (
                <Link
                  key={i}
                  href={prod.link}
                  className="flex flex-col bg-white border border-gray-100 rounded overflow-hidden group shadow-sm hover:shadow-md transition-shadow relative"
                >
                  <div className="w-full aspect-square relative bg-gray-50 overflow-hidden border-b border-gray-100/50">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, 200px"
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
          </div>
        )}

      </div>
    </main>
  );
}
