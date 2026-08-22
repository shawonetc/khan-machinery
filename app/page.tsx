import Hero from "./components/Hero";
import PopularCategories from "./components/PopularCategories";
import ProductSection, { Product } from "./components/ProductSection";
import FooterFeatures from "./components/FooterFeatures";

const newArrivals: Product[] = [
  {
    name: "Water Decoloring Agent (DCA)",
    image: "/product/1.jpg",
    price: null,
    originalPrice: null,
    discount: null,
    link: "/products/dca",
  },
  {
    name: "সালফিউরিক অ্যাসিড - (Sulfuric Acid)",
    image: "/product/2.jpg",
    price: null,
    originalPrice: null,
    discount: null,
    link: "/products/sulfuric-acid",
  },
  {
    name: "Original Unitor 500 Bar High Pressure Washer",
    image: "/product/3.jpg",
    price: "৳ 250,000.00",
    originalPrice: null,
    discount: null,
    link: "/products/unitor-500",
  },
  {
    name: "হাই প্রেসার ওয়াটার জেট ক্লিনিং মেশিন",
    image: "/product/4.jpg",
    price: "৳ 250,000.00",
    originalPrice: "৳ 350,000.00",
    discount: "-29%",
    link: "/products/water-jet",
  },
  {
    name: "Reconditioned Electric Motors",
    image: "/product/5.jpg",
    price: "৳ 0.00",
    originalPrice: null,
    discount: null,
    link: "/products/electric-motors",
  },
  {
    name: "Industrial Shredder Machine",
    image: "/product/6.jpg",
    price: "৳ 0.00",
    originalPrice: null,
    discount: null,
    link: "/products/shredder",
  },
  {
    name: "Kemei 3 in 1 Curler",
    image: "/product/7.jpg",
    price: "৳ 1,250.00",
    originalPrice: null,
    discount: null,
    link: "/products/kemei-curler",
  },
  {
    name: "Kemei Hair Dryer",
    image: "/product/8.jpg",
    price: "৳ 1,500.00",
    originalPrice: null,
    discount: null,
    link: "/products/kemei-dryer",
  },
  {
    name: "Vaneless Hanging Neck Fan",
    image: "/product/9.jpg",
    price: "৳ 950.00",
    originalPrice: null,
    discount: null,
    link: "/products/neck-fan",
  },
  {
    name: "Kemei Hair Clipper",
    image: "/product/10.jpg",
    price: "৳ 1,100.00",
    originalPrice: null,
    discount: null,
    link: "/products/kemei-clipper",
  },
];

const featuredMachinery: Product[] = [
  {
    name: "ATMA ATMALINE RR5060/S Roll-to-Roll Screen Printing Line",
    image: "/products/ATMALINE_RR5060_S.avif",
    price: null,
    link: "/products/atmaline-rr5060s",
  },
  {
    name: "CS-3020CNC High Speed CNC Engraving Machine",
    image: "/products/CS-3020CNC.png",
    price: null,
    link: "/products/cs-3020cnc",
  },
  {
    name: "Roll-To-Roll 3-Colour with UV Screen Printing Machine",
    image: "/products/Roll-To-Roll-3-Colour-with-UV-Screen-Printing-Machine.jpg",
    price: null,
    link: "/products/roll-to-roll-3-colour",
  },
  {
    name: "Roll-to-Roll Screen Printing Machine",
    image: "/products/Roll-to-Roll-Screen-Printing-追标-2-无标-900X675.jpg",
    price: null,
    link: "/products/roll-to-roll-screen-printing",
  },
  {
    name: "Industrial Machinery Unit",
    image: "/products/WhatsApp Image 2026-08-18 at 12.27.12 PM.jpeg",
    price: null,
    link: "/products/industrial-machinery-unit",
  },
  {
    name: "Industrial Screen Printing Solution",
    image: "/products/images.jpg",
    price: null,
    link: "/products/industrial-screen-printing",
  },
  {
    name: "Heavy Duty Industrial Machine 1",
    image: "/products/1.jpg",
    price: null,
    link: "/products/heavy-duty-1",
  },
  {
    name: "Heavy Duty Industrial Machine 2",
    image: "/products/2.jpg",
    price: null,
    link: "/products/heavy-duty-2",
  },
];

const dtfMachinery: Product[] = [
  {
    name: "60cm DTF Printer Machine",
    image: "/dtf/60cm-dtf-printer-6.jpg",
    price: null,
    link: "/products/60cm-dtf-printer",
  },
  {
    name: "70cm Professional DTF Printer",
    image: "/dtf/70-DTF-PRINTER-3.jpg",
    price: null,
    link: "/products/70cm-dtf-printer",
  },
  {
    name: "DTF Powder Shaker Dryer Machine",
    image: "/dtf/87e3d43db399b09db09090d3ca597ab4.jpg_960x960q80.jpg_.webp",
    price: null,
    link: "/products/dtf-powder-shaker",
  },
  {
    name: "Industrial DTF Printing Machine",
    image: "/dtf/DTF-Printing-Machine.jpg",
    price: null,
    link: "/products/dtf-printing-machine",
  },
  {
    name: "High Speed DTF Printing Station",
    image: "/dtf/DTF-Printing.webp",
    price: null,
    link: "/products/dtf-printing-station",
  },
  {
    name: "Dual Head DTF Printing System",
    image: "/dtf/DTF.png",
    price: null,
    link: "/products/dtf-dual-head",
  },
  {
    name: "Automatic DTF Inkjet Printer",
    image: "/dtf/H09089c94534c417194f1530b1efa4a533.avif",
    price: null,
    link: "/products/dtf-inkjet-printer",
  },
  {
    name: "All-in-One DTF Printing Bundle with Smoke Extractor",
    image: "/dtf/P200P400_DTF_Printing_Bundle_P50H_Smoke_Extract_All_in_one-2.webp",
    price: null,
    link: "/products/dtf-all-in-one-bundle",
  },
  {
    name: "Digital DTF Transfer Printer",
    image: "/dtf/b9033daad4f4cc198fa570fb6be48265.jpg",
    price: null,
    link: "/products/dtf-transfer-printer",
  },
  {
    name: "DTF Station R14 Desktop Printer",
    image: "/dtf/dtfstationr14.webp",
    price: null,
    link: "/products/dtf-station-r14",
  },
  {
    name: "Compact DTF Flatbed Printer",
    image: "/dtf/images.jpg",
    price: null,
    link: "/products/dtf-flatbed-printer",
  },
];

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Component */}
      <Hero />

      {/* Popular Categories & Why Choose US Sections */}
      <PopularCategories />

      {/* Featured Screen Printing & Industrial Machinery */}
      <ProductSection
        title="Featured Screen Printing & Industrial Machinery"
        seeAllLink="/shop?filter=screen-printing"
        products={featuredMachinery}
      />

      {/* DTF Printing Machinery */}
      <ProductSection
        title="DTF Printing Machinery"
        seeAllLink="/shop?filter=dtf-printing"
        products={dtfMachinery}
      />

      {/* New Arrivals Section */}
      <ProductSection
        title="New Arrivals Products"
        seeAllLink="/shop?filter=new-arrivals"
        products={newArrivals}
      />

      {/* Bottom Footer Features Banner */}
      <FooterFeatures />
    </main>
  );
}
