
import { Product } from '../types';
import { IMAGES } from '../images/catalog';
import { PDF_LINKS } from '../pdf/documents';

export const products: Product[] = [
  {
    id: "1",
    name: "Biomass Briquette Machine VK-90",
    description: "High-performance mechanical press for converting agro-waste into industrial fuel logs. Flagship VK-90 model.",
    longDescription: "The VK-90 is our flagship solution for high-volume biomass processing. Designed for agro-forestry waste, it produces high-density briquettes for clean industrial heating. Engineered with self-lubricating systems for 24/7 industrial operation.",
    image: IMAGES.MACHINES.VK90_PRIMARY,
    tag: "Best Seller",
    specUrl: PDF_LINKS.VK90_TECHNICAL,
    capacity: "1200 - 1500 kg/hr",
    power: "90 HP (67 kW)",
    gallery: IMAGES.MACHINES.VK90_GALLERY,
    features: [
      { title: "Low Maintenance", icon: "settings_suggest", desc: "Engineered with self-lubricating systems for 24/7 industrial operation with minimal downtime." },
      { title: "High Efficiency", icon: "energy_savings_leaf", desc: "Optimized power consumption to output ratio, maximizing your ROI on every ton produced." },
      { title: "Heavy-Duty Build", icon: "precision_manufacturing", desc: "Reinforced steel frame and precision-ground components for extreme durability." }
    ],
    technicalSpecs: [
      { parameter: "Production Capacity", standard: "1200 - 1500 kg/hr", optional: "1800 - 2200 kg/hr" },
      { parameter: "Briquette Diameter", standard: "90 mm", optional: "70 mm / 90 mm (Dual)" },
      { parameter: "Motor Specification", standard: "90 HP | 1440 RPM | 3 Phase", optional: "120 HP | Variable Frequency" },
      { parameter: "Raw Material Compatibility", standard: "Sawdust, Rice Husk, Mustard Stalk", optional: "All Agro-waste + Forestry waste" },
      { parameter: "Control System", standard: "Manual Switchgear", optional: "Siemens PLC with HMI Touch" }
    ]
  },
  {
    id: "2",
    name: "Heavy Duty Wood Chipper Series-X",
    description: "Industrial grade chipper designed for large-scale timber waste reduction. High-torque drum system.",
    image: IMAGES.MACHINES.SERIES_X,
    tag: "Series-X",
    specUrl: PDF_LINKS.CHIPPER_MANUAL
  },
  {
    id: "3",
    name: "Precision Hammer Mill Series-Z",
    description: "Versatile grinding solution for diverse raw materials with multi-stage crushing system.",
    image: IMAGES.MACHINES.SERIES_Z,
    tag: "Series-Z",
    specUrl: PDF_LINKS.FULL_CATALOG
  }
];
