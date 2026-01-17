import handbag1 from '../assets/product/handbag/bag1.png'
import handbag1_model from '../assets/product/handbag/bag1_model1.png'
import handbag2 from '../assets/product/handbag/bag2.png'
import handbag2_model from '../assets/product/handbag/bag2_model1.png'
import handbag3 from '../assets/product/handbag/bag3.png'
import handbag3_model from '../assets/product/handbag/bag3_model1.png'
import handbag4 from '../assets/product/handbag/bag4.PNG'
import handbag4_model from '../assets/product/handbag/bag4_model1.png'
import handbag5 from '../assets/product/handbag/bag5.png'
import handbag5_model from '../assets/product/handbag/bag5_model1.png'
import handbag6 from '../assets/product/handbag/bag6.png'
import handbag6_model from '../assets/product/handbag/bag6_model1.PNG'
import handbag7 from '../assets/product/handbag/bag7.PNG'
import handbag7_model from '../assets/product/handbag/bag7_model1.PNG'
import handbag8 from '../assets/product/handbag/bag8.png'
import handbag8_model from '../assets/product/handbag/bag8_model1.png'
import handbag9 from '../assets/product/handbag/bag9.png'
import handbag9_model from '../assets/product/handbag/bag9_model1.png'
import handbag10_1 from '../assets/product/handbag/bag10.1.png'
import handbag10_2 from '../assets/product/handbag/bag10.2.png'
import handbag10_model1 from '../assets/product/handbag/bag10_model1.png'
import handbag10_model2 from '../assets/product/handbag/bag10_model2.png'
import handbag11 from '../assets/product/handbag/bag11.png'

import sling1 from '../assets/product/sling/sling1.png'
import sling1_model from '../assets/product/sling/sling1_model1.png'
import sling2 from '../assets/product/sling/sling2.png'
import sling2_model from '../assets/product/sling/sling2_model1.png'
import sling3 from '../assets/product/sling/sling3.png'
import sling3_model from '../assets/product/sling/sling3_model1.PNG'
import sling4 from '../assets/product/sling/sling4.png'
import sling4_model from '../assets/product/sling/sling4_model1.png'
import sling5 from '../assets/product/sling/sling5.png'
import sling5_model from '../assets/product/sling/sling5_model1.png'
import sling6 from '../assets/product/sling/sling6.png'
import sling6_model from '../assets/product/sling/sling6_model1.png'
import sling7_1 from '../assets/product/sling/sling7.1.png'
import sling7_2 from '../assets/product/sling/sling7.2.png'
import sling7_3 from '../assets/product/sling/sling7.3.png'
import sling7_model from '../assets/product/sling/sling7_model1 .png'

import tote1 from '../assets/product/tote/tote1.png'
import tote1_model from '../assets/product/tote/tote1_model1.png'
import tote2 from '../assets/product/tote/tote2.png'
import tote2_model from '../assets/product/tote/tote2_model1.png'
import tote3 from '../assets/product/tote/tote3.png'
import tote3_model from '../assets/product/tote/tote3_model1.png'

import potli1 from '../assets/product/potli/potli1.png'
import potli1_model from '../assets/product/potli/potli1_model1.png'
import potli2 from '../assets/product/potli/potli2.png'
import potli2_model from '../assets/product/potli/potli2_model1.png'
import potli3 from '../assets/product/potli/potli3.png'
import potli3_model from '../assets/product/potli/potli3_model1.png'
import potli4 from '../assets/product/potli/potli4.png'
import potli4_model from '../assets/product/potli/potli4_model1.png'
import potli5_1 from '../assets/product/potli/potli5.1.png'
import potli5_2 from '../assets/product/potli/potli5.2.png'
import potli5_model1 from '../assets/product/potli/potli5_model1.png'
import potli5_model2 from '../assets/product/potli/potli5_model2.png'

/**
 * Products data for Rukaiya Crochet Bags
 * Each product object contains:
 * - id: Unique identifier
 * - name: Product name
 * - price: Current price in INR
 * - originalPrice: Original price for discount display
 * - category: Product category (handbag, sling, tote, potli)
 * - image: Main product image
 * - modelImage: Image with model
 * - tag: Special tag like "Best Seller", "New Arrival", etc. (can be null)
 */
export const products = [
  // ===== HANDBAGS =====
  {
    id: 1,
    name: "Candy Mellow Bag",
    price: "₹1,599",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag1,
    modelImage: handbag1_model,
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Meher Bloom Potli",
    price: "₹1,599",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag2,
    modelImage: handbag2_model,
    tag: "Premium"
  },
  {
    id: 3,
    name: "Midnight Classic Bag",
    price: "₹1,599",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag3,
    modelImage: handbag3_model,
    tag: "Premium"
  },
  {
    id: 4,
    name: "Mint Breezy Bag",
    price: "₹1,599",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag4,
    modelImage: handbag4_model,
    tag: "Popular"
  },
  {
    id: 5,
    name: "Lavender Dreams Carryall",
    price: "₹1,599",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag5,
    modelImage: handbag5_model,
    tag: "Handpicked"
  },
  {
    id: 6,
    name: "Sunset Glow Bag",
    price: "₹1,599",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag6,
    modelImage: handbag6_model,
    tag: null
  },
  {
    id: 7,
    name: "Golden Hour Bag",
    price: "₹1,599",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag7,
    modelImage: handbag7_model,
    tag: null
  },
  {
    id: 8,
    name: "Elegant Evening Bag",
    price: "₹1,699",
    originalPrice: "₹2,199",
    category: "handbag",
    image: handbag8,
    modelImage: handbag8_model,
    tag: "New Arrival"
  },
  {
    id: 9,
    name: "Classic Charm Bag",
    price: "₹1,499",
    originalPrice: "₹1,899",
    category: "handbag",
    image: handbag9,
    modelImage: handbag9_model,
    tag: "Trending"
  },
  {
    id: 10,
    name: "Elegant Collection Bag",
    price: "₹1,699",
    originalPrice: "₹2,199",
    category: "handbag",
    images: [handbag10_1, handbag10_2, handbag10_model1, handbag10_model2],
    tag: "New Arrival"
  },
  {
    id: 11,
    name: "Modern Style Bag",
    price: "₹1,599",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag11,
    tag: "Popular"
  },

  // ===== SLING BAGS =====
  {
    id: 12,
    name: "Gulabi Royale Sling",
    price: "₹1,099",
    originalPrice: "₹1,399",
    category: "sling",
    image: sling1,
    modelImage: sling1_model,
    tag: "New Arrival"
  },
  {
    id: 13,
    name: "Ocean Breeze Sling",
    price: "₹1,199",
    originalPrice: "₹1,399",
    category: "sling",
    image: sling2,
    modelImage: sling2_model,
    tag: "Premium"
  },
  {
    id: 14,
    name: "Forest Green Sling",
    price: "₹1,099",
    originalPrice: "₹1,399",
    category: "sling",
    image: sling3,
    modelImage: sling3_model,
    tag: null
  },
  {
    id: 15,
    name: "Desert Rose Sling",
    price: "₹1,149",
    originalPrice: "₹1,449",
    category: "sling",
    image: sling4,
    modelImage: sling4_model,
    tag: null
  },
  {
    id: 16,
    name: "Sky Blue Sling",
    price: "₹1,099",
    originalPrice: "₹1,399",
    category: "sling",
    image: sling5,
    modelImage: sling5_model,
    tag: null
  },
  {
    id: 17,
    name: "Coral Sunset Sling",
    price: "₹1,199",
    originalPrice: "₹1,499",
    category: "sling",
    image: sling6,
    modelImage: sling6_model,
    tag: "Popular"
  },
  {
    id: 18,
    name: "Rainbow Collection Sling",
    price: "₹1,299",
    originalPrice: "₹1,599",
    category: "sling",
    images: [sling7_1, sling7_2, sling7_3, sling7_model],
    tag: "Limited Edition"
  },

  // ===== TOTE BAGS =====
  {
    id: 19,
    name: "Peach Sunset Tote",
    price: "₹1,349",
    originalPrice: "₹1,849",
    category: "tote",
    image: tote1,
    modelImage: tote1_model,
    tag: null
  },
  {
    id: 20,
    name: "Cream Elegance Tote",
    price: "₹1,199",
    originalPrice: "₹1,699",
    category: "tote",
    image: tote2,
    modelImage: tote2_model,
    tag: null
  },
  {
    id: 21,
    name: "Summer Breeze Tote",
    price: "₹1,249",
    originalPrice: "₹1,749",
    category: "tote",
    image: tote3,
    modelImage: tote3_model,
    tag: "Seasonal"
  },

  // ===== POTLIS =====
  {
    id: 22,
    name: "Blush Pink Potli",
    price: "₹299",
    originalPrice: "₹559",
    category: "potli",
    image: potli1,
    modelImage: potli1_model,
    tag: null
  },
  {
    id: 23,
    name: "Elegant Collection Potli",
    price: "₹299",
    originalPrice: "₹559",
    category: "potli",
    images: [potli5_1, potli5_2, potli5_model1, potli5_model2],
    tag: "New Arrival"
  },
  {
    id: 24,
    name: "Mauve Magic Potli",
    price: "₹259",
    originalPrice: "₹559",
    category: "potli",
    image: potli3,
    modelImage: potli3_model,
    tag: null
  },
  {
    id: 25,
    name: "Terracotta Dream Potli",
    price: "₹259",
    originalPrice: "₹559",
    category: "potli",
    image: potli4,
    modelImage: potli4_model,
    tag: null
  },
  {
    id: 26,
    name: "Sage Green Potli",
    price: "₹259",
    originalPrice: "₹559",
    category: "potli",
    image: potli2,
    modelImage: potli2_model,
    tag: null
  }
]
