
export interface ProductSpec {
  parameter: string;
  standard: string;
  optional?: string;
}

export interface ProductFeature {
  title: string;
  icon: string;
  desc: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  tag?: string;
  specUrl: string;
  capacity?: string;
  power?: string;
  longDescription?: string;
  features?: ProductFeature[];
  technicalSpecs?: ProductSpec[];
  gallery?: string[];
}

export interface VideoItem {
  title: string;
  videoId: string;
}

export interface Certification {
  title: string;
  image: string;
  description: string;
}

export interface ROIResult {
  monthlySavings: number;
  paybackPeriod: number;
  annualSavings: number;
  carbonOffset: number;
}
