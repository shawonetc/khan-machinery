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

const utilityMachinery: Product[] = [
  {
    name: "Heliex Power- TWIN SCREW",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&auto=format&fit=crop&q=80",
    price: "৳ 20,000,000.00",
    link: "/products/heliex-power",
  },
  {
    name: "Electric 500 kg/hr Pure Steam",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80",
    price: "৳ 75,000.00",
    link: "/products/steam-500",
  },
  {
    name: "Electric 100 kg/hr Pure Steam",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80",
    price: "৳ 150,000.00",
    link: "/products/steam-100",
  },
  {
    name: "SWAN DIRECT-DRIVE",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&auto=format&fit=crop&q=80",
    price: "৳ 900,000.00",
    link: "/products/swan-direct",
  },
  {
    name: "DMC Brand Screw Air",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&auto=format&fit=crop&q=80",
    price: "৳ 275,000.00",
    link: "/products/dmc-screw-air",
  },
  {
    name: "DMC 37kw 50hp Variable",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&auto=format&fit=crop&q=80",
    price: "৳ 1,050,000.00",
    link: "/products/dmc-37kw",
  },
  {
    name: "DMC 22KW , 3.6 m3/min,",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&auto=format&fit=crop&q=80",
    price: "৳ 798,000.00",
    link: "/products/dmc-22kw",
  },
  {
    name: "Steam Generator for Edible",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80",
    price: "৳ 1,000.00",
    link: "/products/steam-edible",
  },
  {
    name: "Boiler Heater for superheated",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&auto=format&fit=crop&q=80",
    price: "৳ 18,000.00",
    link: "/products/boiler-heater",
  },
  {
    name: "European/Italian Biomass",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&auto=format&fit=crop&q=80",
    price: null,
    link: "/products/biomass",
  },
];

const industrialPump: Product[] = [
  {
    name: "Original Unitor 500 Bar High Pressure Washer",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&auto=format&fit=crop&q=80",
    price: "৳ 250,000.00",
    link: "/products/unitor-500-pump",
  },
  {
    name: "হাই প্রেসার ওয়াটার জেট ক্লিনিং মেশিন",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&auto=format&fit=crop&q=80",
    price: "৳ 250,000.00",
    originalPrice: "৳ 350,000.00",
    discount: "-29%",
    link: "/products/water-jet-pump",
  },
  {
    name: "Vertical multistage pressure pump",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=400&auto=format&fit=crop&q=80",
    price: null,
    link: "/products/vertical-multistage",
  },
  {
    name: "3HP Submersible Pump Price",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=400&auto=format&fit=crop&q=80",
    price: "৳ 35,000.00",
    link: "/products/3hp-submersible",
  },
  {
    name: "Suntec Fuel/oil Pumps price in",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=400&auto=format&fit=crop&q=80",
    price: "৳ 110,000.00",
    link: "/products/suntec-fuel",
  },
  {
    name: "7.5KW Submersible water pump",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=400&auto=format&fit=crop&q=80",
    price: "৳ 2,200,000.00",
    link: "/products/7.5kw-submersible",
  },
  {
    name: "6000 GPD RO plant price in",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80",
    price: "৳ 280,000.00",
    link: "/products/6000-gpd-ro",
  },
  {
    name: "2 HP PEDROLLO Pump",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=400&auto=format&fit=crop&q=80",
    price: "৳ 52,000.00",
    link: "/products/2hp-pedrollo",
  },
  {
    name: "1.50 HP PEDROLLO JET Pump",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=400&auto=format&fit=crop&q=80",
    price: "৳ 21,000.00",
    link: "/products/1.50hp-pedrollo",
  },
  {
    name: "JSWm 2C 1HP PEDROLLO Pump",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=400&auto=format&fit=crop&q=80",
    price: "৳ 20,000.00",
    link: "/products/jswm-2c-pedrollo",
  },
];

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Component */}
      <Hero />

      {/* Popular Categories & Why Choose US Sections */}
      <PopularCategories />

      {/* New Arrivals Section */}
      <ProductSection
        title="New Arrivals Products"
        seeAllLink="/shop?filter=new-arrivals"
        products={newArrivals}
      />

      {/* Utility Machinery Section */}
      <ProductSection
        title="Utility Machinery"
        seeAllLink="/shop?filter=utility-machinery"
        products={utilityMachinery}
      />

      {/* Industrial Pump Section */}
      <ProductSection
        title="Industrial Pump"
        seeAllLink="/shop?filter=industrial-pump"
        products={industrialPump}
      />

      {/* Bottom Footer Features Banner */}
      <FooterFeatures />
    </main>
  );
}
