export interface Product {
  slug: string;
  name: string;
  image: string;
  discount?: string | null;
  link: string;
  category: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

export const productsData: Product[] = [
  // New Arrivals
  {
    slug: "dca",
    name: "Water Decoloring Agent (DCA)",
    image: "/product/1.jpg",
    discount: null,
    link: "/products/dca",
    category: "Chemicals",
    description: "Highly efficient water decoloring agent specifically formulated for color removal of industrial wastewater, particularly in textile, dyeing, pigment, and paper mills.",
    features: [
      "Excellent color removal efficiency (>95%)",
      "Fast sedimentation and coagulation rates",
      "Reduces COD (Chemical Oxygen Demand) levels",
      "Eco-friendly formula, non-toxic residue"
    ],
    specifications: {
      "Appearance": "Light-colored, sticky liquid",
      "Solid Content": "≥ 50%",
      "pH Value (30% solution)": "3.0 - 5.0",
      "Dynamic Viscosity (20°C)": "50 - 250 mPa.s",
      "Recommended Dosage": "50 - 500 ppm depending on water state"
    }
  },
  {
    slug: "sulfuric-acid",
    name: "সালফিউরিক অ্যাসিড - (Sulfuric Acid)",
    image: "/product/2.jpg",
    discount: null,
    link: "/products/sulfuric-acid",
    category: "Chemicals",
    description: "Premium grade industrial Sulfuric Acid suitable for agricultural fertilizer manufacturing, chemical syntheses, metal cleaning processes, and pH adjustments in wastewater treatment plants.",
    features: [
      "Highly concentrated, pure formula",
      "Consistent chemical composition and density",
      "Secure and standard industrial packaging",
      "Suitable for large-scale industrial applications"
    ],
    specifications: {
      "Chemical Formula": "H2SO4",
      "Concentration": "98% Min",
      "Density (20°C)": "1.84 g/cm³",
      "Iron Content": "≤ 0.005%",
      "Packing Unit": "Industrial Drums / IBC Tanks"
    }
  },
  {
    slug: "unitor-500",
    name: "Original Unitor 500 Bar High Pressure Washer",
    image: "/product/3.jpg",
    discount: null,
    link: "/products/unitor-500",
    category: "Industrial Pumps",
    description: "Original heavy-duty Unitor high-pressure washer designed to deliver 500 bar pressure. Ideal for marine deck cleaning, industrial scale removal, surface preparation, and tough industrial washdowns.",
    features: [
      "Extreme 500 bar working pressure",
      "Robust stainless steel protective frame",
      "High reliability heavy-duty plunger pump",
      "Intelligent automatic shut-off trigger system"
    ],
    specifications: {
      "Max Pressure": "500 Bar (7250 PSI)",
      "Flow Rate": "15 Liters/min",
      "Motor Power": "15 kW (20 HP)",
      "Power Supply": "3-Phase, 380V/50Hz",
      "Pump Type": "Ceramic Plunger Pump",
      "Weight": "165 kg"
    }
  },
  {
    slug: "water-jet",
    name: "হাই প্রেসার ওয়াটার জেট ক্লিনিং মেশিন",
    image: "/product/4.jpg",
    discount: "-29%",
    link: "/products/water-jet",
    category: "Industrial Pumps",
    description: "Industrial high pressure water jet cleaning machine designed for efficient debris clearing, paint stripping, floor cleaning, and pipe unclogging.",
    features: [
      "Adjustable pressure regulator nozzle",
      "Heavy-duty mobile cart chassis for portability",
      "Triplex plunger pump with thermal protection",
      "Low maintenance, highly durable components"
    ],
    specifications: {
      "Operating Pressure": "250 - 350 Bar",
      "Water Flow": "12 Liters/min",
      "Power source": "Electric motor 7.5 kW",
      "Hose Length": "15 Meters high-pressure steel-braided hose",
      "Inlet Water Temp": "Max 60°C"
    }
  },
  {
    slug: "electric-motors",
    name: "Reconditioned Electric Motors",
    image: "/product/5.jpg",
    discount: null,
    link: "/products/electric-motors",
    category: "Utility Machinery",
    description: "Fully tested and reconditioned high-efficiency electric motors sourced from premium global brands. Tested for winding insulation, bearing soundness, and noise levels.",
    features: [
      "Strictly tested for copper winding insulation",
      "Premium efficiency levels (equivalent to IE2/IE3)",
      "Long service life at fraction of new motor cost",
      "Available in cast iron and aluminum bodies"
    ],
    specifications: {
      "Power Range": "1 HP to 150 HP",
      "Speed Option": "750 / 1000 / 1500 / 3000 RPM",
      "Mounting type": "Foot / Flange Mount",
      "Voltage": "380V/415V/440V 3-Phase",
      "Insulation Class": "Class F"
    }
  },
  {
    slug: "shredder",
    name: "Industrial Shredder Machine",
    image: "/product/6.jpg",
    discount: null,
    link: "/products/shredder",
    category: "Waste Recycling & Safety Equipments",
    description: "Heavy-duty double-shaft industrial shredder machine designed for plastic recycling, metal scrap, electronics, rubber tires, and general waste processing.",
    features: [
      "High torque double shaft shredding action",
      "High-grade alloy steel knives for long wear resistance",
      "Automatic reverse function on overload protection",
      "Energy efficient motor drive"
    ],
    specifications: {
      "Motor Power": "15 kW x 2",
      "Chamber Size": "800 mm x 600 mm",
      "Blade Thickness": "30 mm (Customizable)",
      "Capacity": "500 - 1500 kg/hr",
      "Control System": "PLC Auto Control"
    }
  },
  {
    slug: "kemei-curler",
    name: "Kemei 3 in 1 Curler",
    image: "/product/7.jpg",
    discount: null,
    link: "/products/kemei-curler",
    category: "Small Home Appliances",
    description: "Versatile styling curler from Kemei designed with ceramic tourmaline coating, offering curl, wave, and straight styles with minimal heat damage.",
    features: [
      "3-in-1 functional barrels for multiple styles",
      "Ceramic coating protects hair moisture",
      "Rapid heat-up in 30 seconds",
      "360-degree swivel cord for tangle-free usage"
    ],
    specifications: {
      "Model": "KM-1213",
      "Temperature Range": "140°C - 220°C",
      "Power consumption": "45W",
      "Voltage": "220-240V 50/60Hz"
    }
  },
  {
    slug: "kemei-dryer",
    name: "Kemei Hair Dryer",
    image: "/product/8.jpg",
    discount: null,
    link: "/products/kemei-dryer",
    category: "Small Home Appliances",
    description: "Powerful Kemei salon-grade hair dryer featuring negative ion technology to reduce frizz, speed up drying, and keep hair healthy.",
    features: [
      "Powerful AC motor for fast drying",
      "Multiple wind and heat settings",
      "Cool shot button to lock styles",
      "Includes air nozzle concentrator attachment"
    ],
    specifications: {
      "Power rating": "2200W",
      "Speed settings": "2 speeds",
      "Heat settings": "3 temperature options",
      "Cable length": "1.8 Meters"
    }
  },
  {
    slug: "neck-fan",
    name: "Vaneless Hanging Neck Fan",
    image: "/product/9.jpg",
    discount: null,
    link: "/products/neck-fan",
    category: "Small Home Appliances",
    description: "Portable, lightweight, and fashionable neck fan with bladeless technology. Provides a 360-degree cooling breeze without twisting or pulling hair.",
    features: [
      "Bladeless design safe for long hair",
      "Ergonomic neck collar fit",
      "USB rechargeable long-lasting battery",
      "3 adjustable speed levels"
    ],
    specifications: {
      "Battery Capacity": "4000mAh Lithium Polymer",
      "Working Time": "3 - 8 Hours",
      "Charging Port": "Type-C USB",
      "Weight": "260g"
    }
  },
  {
    slug: "kemei-clipper",
    name: "Kemei Hair Clipper",
    image: "/product/10.jpg",
    discount: null,
    link: "/products/kemei-clipper",
    category: "Small Home Appliances",
    description: "Professional rechargeable cordless hair clipper featuring sharp carbon steel blades, ergonomic design, and adjustable guide combs.",
    features: [
      "Precise carbon steel self-sharpening blades",
      "Rechargeable battery with LED charge indicator",
      "Turbo boost speed motor",
      "Low noise design"
    ],
    specifications: {
      "Charging Time": "2 Hours",
      "Running Time": "120 Minutes",
      "Battery type": "Li-ion",
      "Guide Combs": "3mm, 6mm, 9mm, 12mm"
    }
  },

  // Utility Machinery
  {
    slug: "heliex-power",
    name: "Heliex Power- TWIN SCREW",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80",
    link: "/products/heliex-power",
    category: "Utility Machinery",
    description: "High performance Heliex Power twin screw wet steam expander system designed to generate electricity from waste steam flows in industrial processes.",
    features: [
      "Converts industrial waste steam into clean electrical power",
      "Operates efficiently on wet steam without damage",
      "Integrated control cabinet with automatic synchronization",
      "Low maintenance costs compared to steam turbines"
    ],
    specifications: {
      "Generator Output": "Up to 500 kWe",
      "Steam Flow Range": "2 to 12 Tons/hr",
      "Inlet Pressure Range": "6 to 25 Barg",
      "Exhaust Pressure Range": "1 to 8 Barg",
      "Synchronization": "Grid tied auto synchronizing"
    }
  },
  {
    slug: "steam-500",
    name: "Electric 500 kg/hr Pure Steam",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    link: "/products/steam-500",
    category: "Utility Machinery",
    description: "Fully automated, environment-friendly electric steam generator with a production capacity of 500 kg/hr. Ideal for pharmaceutical, food, garment, and cleanroom sterilization.",
    features: [
      "Zero emission electric boiler system",
      "Rapid steam generation within 10 minutes",
      "Fully automatic PID PLC touch screen control",
      "Multiple safety interlocking protection systems"
    ],
    specifications: {
      "Steam Output": "500 kg/hour",
      "Electric Power": "360 kW",
      "Working Pressure": "0.7 - 0.8 MPa",
      "Voltage": "380V/3-Phase/50Hz",
      "Efficiency": "98.5%"
    }
  },
  {
    slug: "steam-100",
    name: "Electric 100 kg/hr Pure Steam",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    link: "/products/steam-100",
    category: "Utility Machinery",
    description: "Compact size electric steam generator producing 100 kg/hr of pure steam. Suitable for small scale textile factories, hospitality laundry, food processing, and chemical labs.",
    features: [
      "Compact footprint, space-saving design",
      "Stainless steel heating elements with long life",
      "Quiet operation, environment friendly",
      "Easy installation and simple user maintenance"
    ],
    specifications: {
      "Steam Capacity": "100 kg/hour",
      "Power Rating": "72 kW",
      "Working Pressure": "0.4 - 0.7 MPa",
      "Thermal Efficiency": "99%"
    }
  },
  {
    slug: "swan-direct",
    name: "SWAN DIRECT-DRIVE",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80",
    link: "/products/swan-direct",
    category: "Utility Machinery",
    description: "Swan Direct-Drive rotary screw air compressor. Offers highly stable compressed air supply, low noise operations, and high energy efficiency for industrial plants.",
    features: [
      "Direct-driven coupling minimizes energy transmission loss",
      "Intelligent control panel displays real-time parameters",
      "Enclosed soundproof cabinet structure",
      "Heavy-duty airend for continuous 24/7 run"
    ],
    specifications: {
      "Working Pressure": "8 - 10 Bar",
      "Free Air Delivery": "3.2 m³/min",
      "Motor Power": "22 kW (30 HP)",
      "Cooling Method": "Air Cooled",
      "Noise Level": "65 ± 2 dB(A)"
    }
  },
  {
    slug: "dmc-screw-air",
    name: "DMC Brand Screw Air",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80",
    link: "/products/dmc-screw-air",
    category: "Utility Machinery",
    description: "DMC Brand rotary screw air compressor, widely used in industrial automation, CNC shops, manufacturing processes, and textile operations.",
    features: [
      "High reliability screw rotor block",
      "Advanced oil-gas separation system (<2ppm oil carryover)",
      "Smart microcomputer controller",
      "IP55 high protection class motor"
    ],
    specifications: {
      "Pressure Range": "8 Bar",
      "Flow Output": "1.8 m³/min",
      "Motor Capacity": "11 kW (15 HP)",
      "Drive Type": "Belt Driven"
    }
  },
  {
    slug: "dmc-37kw",
    name: "DMC 37kw 50hp Variable",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80",
    link: "/products/dmc-37kw",
    category: "Utility Machinery",
    description: "DMC 37kW VSD (Variable Speed Drive) rotary screw air compressor. Adapts its motor speed dynamically to match air consumption, saving up to 35% energy.",
    features: [
      "Variable Speed Drive (VSD) inverter control",
      "Permanent Magnet (PM) synchronous motor",
      "Soft start mechanism protects motor and grid",
      "Ultra-low noise, high structural stability"
    ],
    specifications: {
      "Motor Power": "37 kW (50 HP)",
      "Max Pressure": "10 Bar",
      "Air Delivery": "1.2 - 6.5 m³/min (variable)",
      "VSD Inverter": "Inovance VSD control"
    }
  },
  {
    slug: "dmc-22kw",
    name: "DMC 22KW , 3.6 m3/min,",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80",
    link: "/products/dmc-22kw",
    category: "Utility Machinery",
    description: "DMC high-efficiency 22kW rotary screw air compressor delivering 3.6 cubic meters of compressed air per minute. Ideal for medium size automated factories.",
    features: [
      "Robust heavy duty frame for continuous shift work",
      "Low heat generation, optimized air cooling ventilation",
      "Fast response PLC system",
      "Premium bearings for long service life"
    ],
    specifications: {
      "Power Rating": "22 kW (30 HP)",
      "Air Flow": "3.6 m³/min",
      "Working Pressure": "8 Bar",
      "Outlet Temp": "Ambient + 15°C"
    }
  },
  {
    slug: "steam-edible",
    name: "Steam Generator for Edible",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    link: "/products/steam-edible",
    category: "Utility Machinery",
    description: "Specialized steam generator designed for edible oil extraction, refinement, seed roasting, and food processing lines, conforming to strict hygiene and food safety codes.",
    features: [
      "Food-grade construction materials on steam paths",
      "Highly stable pressure output for thermal heating uniformity",
      "Eco-fuel burner compatibility (Gas/Diesel/Bio-pellets)",
      "Automatic descaling and blowdown control"
    ],
    specifications: {
      "Capacity": "1000 kg/hour",
      "Design Pressure": "1.0 MPa",
      "Fuel compatibility": "Gas / Diesel / Dual fuel",
      "Steam Temperature": "184°C"
    }
  },
  {
    slug: "boiler-heater",
    name: "Boiler Heater for superheated",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80",
    link: "/products/boiler-heater",
    category: "Utility Machinery",
    description: "Superheated steam boiler heater designed to increase standard steam temperatures up to 350°C for chemical processing, power plants, and test benches.",
    features: [
      "Thermal expansion safety design",
      "High temperature alloy pipe layout",
      "Precise superheating temperature controller",
      "Integrated energy economizer"
    ],
    specifications: {
      "Max Superheated Temp": "350°C",
      "Design Pressure": "1.6 MPa",
      "Heater Capacity": "500 kW to 2000 kW",
      "Control Method": "SCR Solid State Relays"
    }
  },
  {
    slug: "biomass",
    name: "European/Italian Biomass",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&auto=format&fit=crop&q=80",
    link: "/products/biomass",
    category: "Utility Machinery",
    description: "Premium European/Italian engineered biomass boiler systems that burn wood pellets, rice husks, wood chips, and agricultural residues to generate hot water or steam.",
    features: [
      "Ultra-low emissions, compliant with EU regulations",
      "Automatic ash removal and grate cleaning systems",
      "Pneumatic fuel transport and auto ignition feed",
      "Highly reliable safety design"
    ],
    specifications: {
      "Output Capacity": "500,000 to 5,000,000 kcal/hr",
      "Efficiency": "88% to 92%",
      "Control Interface": "Touch PLC with remote internet access",
      "Applicable Fuel": "Wood pellets, sawdust, rice husks, palm shells"
    }
  },

  // Industrial Pumps
  {
    slug: "unitor-500-pump",
    name: "Original Unitor 500 Bar High Pressure Washer (Pump)",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80",
    link: "/products/unitor-500-pump",
    category: "Industrial Pumps",
    description: "Heavy-duty 500 Bar high pressure pump unit specifically configured as a washing station for heavy machinery, marine cargo hold washing, and construction sites.",
    features: [
      "Triplex plunger pump head for continuous operational load",
      "Resistant to marine seawater salt spray environments",
      "Heavy duty pressure relief bypass valve",
      "Inlet water filtration system included"
    ],
    specifications: {
      "Max Pressure": "500 Bar",
      "Flow rate": "15.5 L/min",
      "Input RPM": "1450 RPM",
      "Plunger material": "Solid Ceramic Plungers"
    }
  },
  {
    slug: "water-jet-pump",
    name: "হাই প্রেসার ওয়াটার জেট ক্লিনিং মেশিন (Pump Unit)",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80",
    discount: "-29%",
    link: "/products/water-jet-pump",
    category: "Industrial Pumps",
    description: "Base pump station for industrial water jets. It features direct coupling with either electric motors or diesel engines, providing high pressure flow.",
    features: [
      "Standard hollow shaft configuration for engine keyways",
      "Brass manifold head for corrosion resistance",
      "Heavy duty grease-lubricated crankcase",
      "Long-life dual pressure seals"
    ],
    specifications: {
      "Working Pressure": "350 Bar",
      "Water Flow Output": "15 L/min",
      "Pump RPM": "1450 / 1750 RPM",
      "Input Shaft": "24 mm / 28 mm"
    }
  },
  {
    slug: "vertical-multistage",
    name: "Vertical Multistage Pressure Pump",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=600&auto=format&fit=crop&q=80",
    link: "/products/vertical-multistage",
    category: "Industrial Pumps",
    description: "Premium vertical multistage centrifugal pump designed for industrial water boosting, high pressure boiler feed, water treatment RO plants, and commercial buildings.",
    features: [
      "Inline piping configuration for space saving layout",
      "All wet parts made of high grade Stainless Steel (SS304/SS316)",
      "High temperature cartridge shaft seal",
      "Capable of handling up to 120°C liquid temperature"
    ],
    specifications: {
      "Flow Range": "1 m³/h to 110 m³/h",
      "Head Range": "Up to 300 Meters",
      "Motor Power": "0.37 kW to 45 kW",
      "Liquid Temperature": "-15°C to +120°C",
      "System Pressure": "Max 33 Bar"
    }
  },
  {
    slug: "3hp-submersible",
    name: "3HP Submersible Pump Price",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=600&auto=format&fit=crop&q=80",
    link: "/products/3hp-submersible",
    category: "Industrial Pumps",
    description: "Heavy-duty 3HP submersible deep well pump, perfect for agricultural irrigation, building water supply, and municipal fire protection lines.",
    features: [
      "Stainless steel pump body casing for rust prevention",
      "Oil-filled motor for cooling and seal protection",
      "Hermetically sealed winding insulation",
      "Built-in non-return check valve"
    ],
    specifications: {
      "Power Rating": "3 HP (2.2 kW)",
      "Delivery Head": "40m - 120m",
      "Discharge Outlet": "2 Inch / 2.5 Inch",
      "Well Diameter": "4 Inch minimum",
      "Power Supply": "Single Phase 220V or 3-Phase 380V"
    }
  },
  {
    slug: "suntec-fuel",
    name: "Suntec Fuel/oil Pumps price in",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=600&auto=format&fit=crop&q=80",
    link: "/products/suntec-fuel",
    category: "Industrial Pumps",
    description: "Genuine Suntec fuel oil gear pump designed to feed industrial burners, commercial heating systems, and diesel generator daily fuel tanks.",
    features: [
      "Precise pressure regulating adjustment screw",
      "Built-in mesh filter cartridge for gear protection",
      "Suitable for light oil, kerosene, and heavy diesel oil",
      "Quiet operation, stable flow pressure"
    ],
    specifications: {
      "Model Range": "AS 47 / AL 35 / AN 67",
      "Pressure Range": "7 to 20 Bar",
      "Nozzle Flow rate": "Up to 80 L/h",
      "Connection ports": "1/4 Inch BSP threads"
    }
  },
  {
    slug: "7.5kw-submersible",
    name: "7.5KW Submersible water pump",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=600&auto=format&fit=crop&q=80",
    link: "/products/7.5kw-submersible",
    category: "Industrial Pumps",
    description: "Industrial strength 7.5kW submersible wastewater and dewatering pump, featuring cutter/grinder impeller systems to process sewage, slurry, and muddy water.",
    features: [
      "Cast iron robust motor casing and vortex impeller",
      "Double silicon-carbide mechanical face seals",
      "Built-in thermal protection sensors",
      "Option for guide rail auto coupling installation"
    ],
    specifications: {
      "Motor Power": "7.5 kW (10 HP)",
      "Max Head": "28 Meters",
      "Max Flow Capacity": "120 m³/h",
      "Solids passage": "Up to 50 mm diameter",
      "pH Range": "6 to 9"
    }
  },
  {
    slug: "6000-gpd-ro",
    name: "6000 GPD RO plant price in",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    link: "/products/6000-gpd-ro",
    category: "Utility Machinery",
    description: "Commercial reverse osmosis water purification plant processing 6000 gallons per day. Fully integrated skid-mounted system ready for water bottling, industrial processing, or drinking supply.",
    features: [
      "High salt rejection rate (>98.5%)",
      "Automatic membrane flush and clean system",
      "Stainless steel booster pump and pre-filter housings",
      "TDS monitoring system included"
    ],
    specifications: {
      "Capacity": "6000 GPD (approx. 1000 L/h)",
      "Membrane size": "4040 BW Membrane x 6",
      "Power consumption": "3.0 kW",
      "Inlet pressure": "0.2 - 0.4 MPa"
    }
  },
  {
    slug: "2hp-pedrollo",
    name: "2 HP PEDROLLO Pump",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=600&auto=format&fit=crop&q=80",
    link: "/products/2hp-pedrollo",
    category: "Industrial Pumps",
    description: "Genuine Italian Pedrollo centrifugal water pump. Delivers high flow rate and excellent reliability for domestic, commercial distribution, and agricultural watering.",
    features: [
      "Genuine Italian build, high electrical efficiency",
      "Cast iron pump body with anti-rust cathodic painting",
      "Brass impeller prevents scale build up and jamming",
      "Thermal overload protection built-in"
    ],
    specifications: {
      "Model": "Pedrollo CP 170 / CP 190",
      "Power": "2 HP (1.5 kW)",
      "Flow rate": "Up to 160 L/min",
      "Total Head": "Up to 45 Meters",
      "Connection Port": "1.25 Inch Inlet / 1 Inch Outlet"
    }
  },
  {
    slug: "1.50hp-pedrollo",
    name: "1.50 HP PEDROLLO JET Pump",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=600&auto=format&fit=crop&q=80",
    link: "/products/1.50hp-pedrollo",
    category: "Industrial Pumps",
    description: "Pedrollo JCR Series self-priming jet pump. Specially designed to draw water from shallow wells even with air present in the pipeline.",
    features: [
      "Self-priming jet design, handles gas-bubble liquids",
      "Stainless Steel SS304 pump body avoids rust taste",
      "Noryl impeller and diffuser",
      "Extremely long-lasting motor winding"
    ],
    specifications: {
      "Model": "Pedrollo JCRm 15M",
      "Power": "1.5 HP (1.1 kW)",
      "Suction Lift": "Up to 9 Meters",
      "Total Head": "Up to 55 Meters",
      "Flow rate": "Up to 80 L/min"
    }
  },
  {
    slug: "jswm-2c-pedrollo",
    name: "JSWm 2C 1HP PEDROLLO Pump",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=600&auto=format&fit=crop&q=80",
    link: "/products/jswm-2c-pedrollo",
    category: "Industrial Pumps",
    description: "Genuine Pedrollo JSWm 2C 1HP self-priming jet pump, the most popular model in Bangladesh for lifting water from underground reservoirs to overhead tanks.",
    features: [
      "Deep suction lift capability",
      "Quiet running, long life span design",
      "Rust resistant epoxy coating in pump cavity",
      "Optimal performance under fluctuating voltages"
    ],
    specifications: {
      "Model": "JSWm 2C",
      "Power": "1 HP (0.75 kW)",
      "Suction Head": "Up to 9 Meters",
      "Max Head": "47 Meters",
      "Max Flow": "70 L/min",
      "Inlet/Outlet Size": "1 Inch x 1 Inch"
    }
  },
  {
    slug: "atmaline-rr5060s",
    name: "ATMA ATMALINE RR5060/S Roll-to-Roll Screen Printing Line",
    image: "/products/ATMALINE_RR5060_S.avif",
    link: "/products/atmaline-rr5060s",
    category: "Screen Printing Machinery",
    description: "Fully automatic roll-to-roll screen printing line, high precision register, ideal for flexible materials, heat transfers, and high production print operations.",
    features: [
      "High precision roll-to-roll alignment",
      "Integrated drying and UV curing modules",
      "Easy operation touchscreen system",
      "Stable speed and tension control"
    ],
    specifications: {
      "Model": "ATMALINE RR5060/S",
      "Max Printing Area": "500 x 600 mm",
      "Register Accuracy": "± 0.05 mm",
      "Speed": "Up to 3000 impressions/hr"
    }
  },
  {
    slug: "cs-3020cnc",
    name: "CS-3020CNC High Speed CNC Engraving Machine",
    image: "/products/CS-3020CNC.png",
    link: "/products/cs-3020cnc",
    category: "CNC Engraving Machinery",
    description: "Compact and powerful CNC engraving machine suitable for metal, plastics, wood, and PCB prototyping with extreme accuracy.",
    features: [
      "Rigid construction prevents vibration",
      "High-speed water-cooled spindle",
      "Precision ball screw guides",
      "Compatible with major CAD/CAM software"
    ],
    specifications: {
      "Model": "CS-3020CNC",
      "Working Table": "300 x 200 mm",
      "Spindle Power": "800W",
      "Max Feed Speed": "4000 mm/min"
    }
  },
  {
    slug: "roll-to-roll-3-colour",
    name: "Roll-To-Roll 3-Colour with UV Screen Printing Machine",
    image: "/products/Roll-To-Roll-3-Colour-with-UV-Screen-Printing-Machine.jpg",
    link: "/products/roll-to-roll-3-colour",
    category: "Screen Printing Machinery",
    description: "Multicolor roll-to-roll screen printing line with inline UV curing stations, designed for labels, textile transfers, and film electronics.",
    features: [
      "Multi-color inline screen printing",
      "Automatic tension control and tracking",
      "Inline UV lamp dryers after each print head",
      "Energy efficient operation"
    ],
    specifications: {
      "Number of Colors": "3 Colors",
      "Curing System": "UV Curing Lamp",
      "Max Material Width": "350 mm",
      "Drive": "Servo Motor Driven"
    }
  },
  {
    slug: "roll-to-roll-screen-printing",
    name: "Roll-to-Roll Screen Printing Machine",
    image: "/products/Roll-to-Roll-Screen-Printing-追标-2-无标-900X675.jpg",
    link: "/products/roll-to-roll-screen-printing",
    category: "Screen Printing Machinery",
    description: "High efficiency automated roll-to-roll screen printing machine featuring dynamic sensor tracking for precise overprinting and pattern alignment.",
    features: [
      "Photocell tracking for precise registration",
      "Static eliminator bar",
      "Suction table for flat printing",
      "Automatic loop feeding control"
    ],
    specifications: {
      "Max Printing Speed": "2500 prints/hour",
      "Web Width": "450 mm",
      "Power Requirement": "220V 50Hz"
    }
  },
  {
    slug: "industrial-machinery-unit",
    name: "Industrial Machinery Unit",
    image: "/products/WhatsApp Image 2026-08-18 at 12.27.12 PM.jpeg",
    link: "/products/industrial-machinery-unit",
    category: "Industrial Equipment",
    description: "Premium heavy-duty industrial machinery unit engineered for robust operations in modern process plants and manufacturing facilities.",
    features: [
      "Robust heavy structural steel build",
      "High reliability components",
      "Low noise and thermal emission levels",
      "Conforms to international safety standards"
    ],
    specifications: {
      "Application": "Industrial production line",
      "Duty Cycle": "Continuous 24/7",
      "Power Source": "380V 3-Phase"
    }
  },
  {
    slug: "industrial-screen-printing",
    name: "Industrial Screen Printing Solution",
    image: "/products/images.jpg",
    link: "/products/industrial-screen-printing",
    category: "Screen Printing Machinery",
    description: "Compact and powerful tabletop industrial screen printing solution for electronic components, panels, dials, and small flat products.",
    features: [
      "Micrometer adjustment for X/Y alignment",
      "Pneumatic squeegee print cycle",
      "Safety guarding and emergency stop switch",
      "Adjustable peel-off speed"
    ],
    specifications: {
      "Print Area": "200 x 300 mm",
      "Air Pressure": "0.5 - 0.7 MPa",
      "Squeegee Angle": "Adjustable 0 - 30 degrees"
    }
  },
  {
    slug: "heavy-duty-1",
    name: "Heavy Duty Industrial Machine 1",
    image: "/products/1.jpg",
    link: "/products/heavy-duty-1",
    category: "Industrial Equipment",
    description: "High capacity heavy duty industrial machinery designed for severe operations and high mechanical reliability.",
    features: [
      "Rigid body construction",
      "High torque transmission",
      "Easy maintenance layout",
      "Long operational lifespan"
    ],
    specifications: {
      "Type": "Heavy Duty Industrial",
      "Control System": "Manual/Auto",
      "Certification": "CE Standard"
    }
  },
  {
    slug: "heavy-duty-2",
    name: "Heavy Duty Industrial Machine 2",
    image: "/products/2.jpg",
    link: "/products/heavy-duty-2",
    category: "Industrial Equipment",
    description: "Advanced heavy duty industrial machinery providing optimized performance and versatile settings for processing plants.",
    features: [
      "Variable frequency drive control",
      "Reinforced guide rails",
      "Corrosion-resistant surface finish",
      "Integrated diagnostic panel"
    ],
    specifications: {
      "Type": "Advanced Heavy Industrial",
      "Thermal Insulation": "Class H",
      "Lubrication": "Automatic Oil Bath"
    }
  },
  {
    slug: "60cm-dtf-printer",
    name: "60cm DTF Printer Machine",
    image: "/dtf/60cm-dtf-printer-6.jpg",
    link: "/products/60cm-dtf-printer",
    category: "DTF Printing Machinery",
    description: "Professional 60cm DTF printer designed for high-resolution fabric transfers, featuring dual printheads and automatic powder recirculating systems.",
    features: [
      "Dual high-speed printheads",
      "White ink circulation system",
      "Precision vacuum feed table",
      "Efficient heating and curing tunnel"
    ],
    specifications: {
      "Print Width": "60 cm (24 inch)",
      "Printhead Type": "Epson i3200",
      "Resolution": "Up to 2400 DPI",
      "Ink Type": "DTF Pigment Ink"
    }
  },
  {
    slug: "70cm-dtf-printer",
    name: "70cm Professional DTF Printer",
    image: "/dtf/70-DTF-PRINTER-3.jpg",
    link: "/products/70cm-dtf-printer",
    category: "DTF Printing Machinery",
    description: "Heavy-duty 70cm DTF printing platform delivering exceptional color reproduction, faster throughput, and high wash-fastness on all textiles.",
    features: [
      "Wide printing format",
      "Intelligent tension control system",
      "Auto-powder shaking and baking integration",
      "Robust steel structural frame"
    ],
    specifications: {
      "Print Width": "70 cm",
      "Speed": "Up to 15 sqm/hr",
      "Interface": "USB 3.0 / Network",
      "Heating Temperature": "110°C - 150°C"
    }
  },
  {
    slug: "dtf-powder-shaker",
    name: "DTF Powder Shaker Dryer Machine",
    image: "/dtf/87e3d43db399b09db09090d3ca597ab4.jpg_960x960q80.jpg_.webp",
    link: "/products/dtf-powder-shaker",
    category: "DTF Printing Machinery",
    description: "Automated powder shaker and infrared dryer machine designed to apply TPU powder evenly and cure film prints in a continuous line.",
    features: [
      "Automatic powder dusting and shaking",
      "High efficiency infrared curing heaters",
      "Auto take-up roll system",
      "Adjustable speed and shaking strength"
    ],
    specifications: {
      "Heating Type": "Infrared Tube Heat",
      "Applicable Width": "Up to 60 cm",
      "Power consumption": "4.5 kW",
      "Voltage": "220V 50-60Hz"
    }
  },
  {
    slug: "dtf-printing-machine",
    name: "Industrial DTF Printing Machine",
    image: "/dtf/DTF-Printing-Machine.jpg",
    link: "/products/dtf-printing-machine",
    category: "DTF Printing Machinery",
    description: "High performance industrial DTF printing machine configured for large volume garment personalization shops and manufacturing.",
    features: [
      "High duty cycle print engine",
      "Advanced media feeding guides",
      "Active negative pressure ink control",
      "Integrated touch console"
    ],
    specifications: {
      "Ink Configuration": "CMYK + White",
      "RIP Software": "MainTop / Photoprint",
      "Power Source": "AC 220V ±10%",
      "Curing Area": "Adjustable heat zone"
    }
  },
  {
    slug: "dtf-printing-station",
    name: "High Speed DTF Printing Station",
    image: "/dtf/DTF-Printing.webp",
    link: "/products/dtf-printing-station",
    category: "DTF Printing Machinery",
    description: "Advanced all-in-one DTF printing station designed for maximum speed and excellent wash durability on sports jerseys, tees, and canvas bags.",
    features: [
      "High-precision servo motor system",
      "Consistent white ink density control",
      "Optimized media dryer module",
      "Ergonomic operator layout"
    ],
    specifications: {
      "Print Speed": "20 meters/hour",
      "Register Precision": "±0.02mm",
      "Air Supply": "0.6 MPa",
      "Total Weight": "280 kg"
    }
  },
  {
    slug: "dtf-dual-head",
    name: "Dual Head DTF Printing System",
    image: "/dtf/DTF.png",
    link: "/products/dtf-dual-head",
    category: "DTF Printing Machinery",
    description: "Industrial dual head DTF printing system offering high precision printing, bright colors, and soft touch feel on finished apparel.",
    features: [
      "Dual printhead configuration for rapid printing",
      "Optimized white ink stir system",
      "Integrated front and back heating plates",
      "Auto-clean nozzle cap station"
    ],
    specifications: {
      "Printheads": "2 x Epson XP600 / i3200",
      "Working Width": "60cm",
      "Software": "CADlink Digital Factory",
      "Power Supply": "110V/220V"
    }
  },
  {
    slug: "dtf-inkjet-printer",
    name: "Automatic DTF Inkjet Printer",
    image: "/dtf/H09089c94534c417194f1530b1efa4a533.avif",
    link: "/products/dtf-inkjet-printer",
    category: "DTF Printing Machinery",
    description: "Direct to film inkjet printer with automatic print management, stable media feeding, and high opacity white layer printing.",
    features: [
      "Automated print queue controller",
      "Smart ink starvation alarm",
      "Low maintenance operation",
      "Suits both dark and light fabrics"
    ],
    specifications: {
      "Media Thickness": "Up to 2mm",
      "Printing Resolution": "1440 x 1440 DPI",
      "Dryer temp": "Constant 120°C"
    }
  },
  {
    slug: "dtf-all-in-one-bundle",
    name: "All-in-One DTF Printing Bundle with Smoke Extractor",
    image: "/dtf/P200P400_DTF_Printing_Bundle_P50H_Smoke_Extract_All_in_one-2.webp",
    link: "/products/dtf-all-in-one-bundle",
    category: "DTF Printing Machinery",
    description: "Complete DTF bundle package including DTF printer, powder shaker-dryer unit, and a high-efficiency smoke extractor system for clean working environments.",
    features: [
      "Turnkey DTF production bundle",
      "High filtration efficiency smoke extractor",
      "Space-saving compact arrangement",
      "Ideal for workshop and office operations"
    ],
    specifications: {
      "Filter Type": "Activated Carbon & HEPA Filter",
      "Airflow Rate": "200 m³/h",
      "Printer Width": "30cm - 60cm supported",
      "Noise Level": "Below 55 dB"
    }
  },
  {
    slug: "dtf-transfer-printer",
    name: "Digital DTF Transfer Printer",
    image: "/dtf/b9033daad4f4cc198fa570fb6be48265.jpg",
    link: "/products/dtf-transfer-printer",
    category: "DTF Printing Machinery",
    description: "Digital printing machine specialized in Direct to Film transfers for custom apparel decoration, screen printing shops, and small custom businesses.",
    features: [
      "Accurate color rendering",
      "Robust frame construction",
      "White ink cycle system prevents clogging",
      "Eco-friendly DTF pigments"
    ],
    specifications: {
      "Model": "Transfer Pro-300",
      "Ink System": "CISS Continuous Supply",
      "Speed": "8 - 12 sqm/hr",
      "Operating System": "Windows 10 / 11"
    }
  },
  {
    slug: "dtf-station-r14",
    name: "DTF Station R14 Desktop Printer",
    image: "/dtf/dtfstationr14.webp",
    link: "/products/dtf-station-r14",
    category: "DTF Printing Machinery",
    description: "Compact desktop DTF printer from DTF Station, perfect for small businesses and hobbyists looking to enter the custom apparel decoration industry.",
    features: [
      "Compact desktop space requirement",
      "Simple setup and intuitive RIP interface",
      "Reliable print engine results",
      "High cost efficiency"
    ],
    specifications: {
      "Model": "DTF Station R14",
      "Print Width": "33 cm (13 inch)",
      "Print Resolution": "5760 x 1440 DPI",
      "Dimensions": "650 x 300 x 250 mm"
    }
  },
  {
    slug: "dtf-flatbed-printer",
    name: "Compact DTF Flatbed Printer",
    image: "/dtf/images.jpg",
    link: "/products/dtf-flatbed-printer",
    category: "DTF Printing Machinery",
    description: "A compact desktop flatbed DTF printer ideal for quick print trials, logo printing, and personalized small garment production.",
    features: [
      "Flatbed layout for easy film placement",
      "Micro-precision printing alignment",
      "Quiet carriage movement",
      "Rapid turnaround time"
    ],
    specifications: {
      "Print Area": "A3 Size (30 x 42 cm)",
      "Power consumption": "150W",
      "Net Weight": "45 kg"
    }
  }
];
