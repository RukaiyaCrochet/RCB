import handbag1 from '../assets/product/handbag/bag1.webp'
import handbag1_model from '../assets/product/handbag/bag1_model1.webp'
import handbag2 from '../assets/product/handbag/bag2.webp'
import handbag2_model from '../assets/product/handbag/bag2_model1.webp'
import handbag3 from '../assets/product/handbag/bag3.webp'
import handbag3_model from '../assets/product/handbag/bag3_model1.webp'
import handbag4 from '../assets/product/handbag/bag4.webp'
import handbag4_model from '../assets/product/handbag/bag4_model1.webp'
import handbag5 from '../assets/product/handbag/bag5.webp'
import handbag5_model from '../assets/product/handbag/bag5_model1.webp'
import handbag6 from '../assets/product/handbag/bag6.webp'
import handbag6_model from '../assets/product/handbag/bag6_model1.webp'
import handbag7 from '../assets/product/handbag/bag7.webp'
import handbag7_model from '../assets/product/handbag/bag7_model1.webp'
import handbag8 from '../assets/product/handbag/bag8.webp'
import handbag8_model from '../assets/product/handbag/bag8_model1.webp'
import handbag9 from '../assets/product/handbag/bag9.webp'
import handbag9_model from '../assets/product/handbag/bag9_model1.webp'
import handbag10_1 from '../assets/product/handbag/bag10.1.webp'
import handbag10_2 from '../assets/product/handbag/bag10.2.webp'
import handbag10_model1 from '../assets/product/handbag/bag10_model1.webp'
import handbag10_model2 from '../assets/product/handbag/bag10_model2.webp'
import handbag11 from '../assets/product/handbag/bag11.webp'
import handbag11_model1 from '../assets/product/handbag/bag11_model1.webp'

import sling1 from '../assets/product/sling/sling1.webp'
import sling1_model from '../assets/product/sling/sling1_model1.webp'
import sling2 from '../assets/product/sling/sling2.webp'
import sling2_model from '../assets/product/sling/sling2_model1.webp'
import sling3 from '../assets/product/sling/sling3.webp'
import sling3_model from '../assets/product/sling/sling3_model1.webp'
import sling4 from '../assets/product/sling/sling4.webp'
import sling4_model from '../assets/product/sling/sling4_model1.webp'
import sling5 from '../assets/product/sling/sling5.webp'
import sling5_model from '../assets/product/sling/sling5_model1.webp'
import sling6 from '../assets/product/sling/sling6.webp'
import sling6_model from '../assets/product/sling/sling6_model1.webp'
import sling7_1 from '../assets/product/sling/sling7.1.webp'
import sling7_2 from '../assets/product/sling/sling7.2.webp'
import sling7_3 from '../assets/product/sling/sling7.3.webp'
import sling7_model from '../assets/product/sling/sling7_model1.webp'

import tote1 from '../assets/product/tote/tote1.webp'
import tote1_model from '../assets/product/tote/tote1_model1.webp'
import tote2 from '../assets/product/tote/tote2.webp'
import tote2_model from '../assets/product/tote/tote2_model1.webp'
import tote3 from '../assets/product/tote/tote3.webp'
import tote3_model from '../assets/product/tote/tote3_model1.webp'

import potli1 from '../assets/product/potli/potli1.webp'
import potli1_model from '../assets/product/potli/potli1_model1.webp'
import potli2 from '../assets/product/potli/potli2.webp'
import potli2_model from '../assets/product/potli/potli2_model1.webp'
import potli3 from '../assets/product/potli/potli3.webp'
import potli3_model from '../assets/product/potli/potli3_model1.webp'
import potli4 from '../assets/product/potli/potli4.webp'
import potli4_model from '../assets/product/potli/potli4_model1.webp'
import potli5_1 from '../assets/product/potli/potli5.1.webp'
import potli5_2 from '../assets/product/potli/potli5.2.webp'
import potli5_model1 from '../assets/product/potli/potli5_model1.webp'
import potli5_model2 from '../assets/product/potli/potli5_model2.webp'

import basket1 from '../assets/product/basket/basket1.webp'
import basket1_model from '../assets/product/basket/basket1_model1.webp'

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
    name: "Candy Marshmallow Handbag",
    price: "₹1,799",
    originalPrice: "₹2,199",
    category: "handbag",
    image: handbag1,
    modelImage: handbag1_model,
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Mini-ature Rose HandBag",
    price: "₹759",
    originalPrice: "₹999",
    category: "handbag",
    image: handbag2,
    modelImage: handbag2_model,
    tag: "Premium"
  },
  {
    id: 3,
    name: "Candy Mallow CMX-S Handbag",
    price: "₹1,699",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag3,
    modelImage: handbag3_model,
    tag: "Premium"
  },
  {
    id: 4,
    name: "Blue Velvet Handbag",
    price: "₹1,559",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag4,
    modelImage: handbag4_model,
    tag: "Popular"
  },
  {
    id: 5,
    name: "Candy Mallow CMX-R Handbag",
    price: "₹1,559",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag5,
    modelImage: handbag5_model,
    tag: "Handpicked"
  },
  {
    id: 6,
    name: "Candy Mallow CMX-B Handbag",
    price: "₹1,599",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag6,
    modelImage: handbag6_model,
    tag: null
  },
  {
    id: 7,
    name: "Candy Mallow CMX-G Handbag",
    price: "₹1,599",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag7,
    modelImage: handbag7_model,
    tag: null
  },
  {
    id: 8,
    name: "Grey Elegance Handbag",
    price: "₹1,499",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag8,
    modelImage: handbag8_model,
    tag: "New Arrival"
  },
  {
    id: 9,
    name: "Candy Mallow CMX-P Handbag",
    price: "₹1,499",
    originalPrice: "₹1,799",
    category: "handbag",
    image: handbag9,
    modelImage: handbag9_model,
    tag: "Trending"
  },
  {
    id: 10,
    name: "Elegant Moon Collection Bag",
    price: "₹999",
    originalPrice: "₹1,299",
    category: "handbag",
    images: [handbag10_1, handbag10_2, handbag10_model1, handbag10_model2],
    tag: "New Arrival"
  },
  {
    id: 11,
    name: "Vanilla & Caramel handbag",
    price: "₹1,699",
    originalPrice: "₹1,999",
    category: "handbag",
    image: handbag11,
    modelImage: handbag11_model1,
    tag: "Popular"
  },

  // ===== SLING BAGS =====
  {
    id: 12,
    name: "Gulabi Royale Sling",
    price: "₹1,199",
    originalPrice: "₹1,499",
    category: "sling",
    image: sling1,
    modelImage: sling1_model,
    tag: "New Arrival"
  },
  {
    id: 13,
    name: "Berry Blue Sling",
    price: "₹759",
    originalPrice: "₹999",
    category: "sling",
    image: sling2,
    modelImage: sling2_model,
    tag: "Premium"
  },
  {
    id: 14,
    name: "Pastel Butterfly Sling",
    price: "₹999",
    originalPrice: "₹1,399",
    category: "sling",
    image: sling3,
    modelImage: sling3_model,
    tag: "Popular"
  },
  {
    id: 15,
    name: "Desert Snow Sling",
    price: "₹659",
    originalPrice: "₹859",
    category: "sling",
    image: sling4,
    modelImage: sling4_model,
    tag: null
  },
  {
    id: 16,
    name: "Desert Rose Sling",
    price: "₹659",
    originalPrice: "₹859",
    category: "sling",
    image: sling5,
    modelImage: sling5_model,
    tag: null
  },
  {
    id: 17,
    name: "Midnight Classic Sling",
    price: "₹859",
    originalPrice: "₹1,199",
    category: "sling",
    image: sling6,
    modelImage: sling6_model,
    tag: "Popular"
  },
  {
    id: 18,
    name: "Classic Pearl Mini Sling",
    price: "₹359",
    originalPrice: "₹599",
    category: "sling",
    images: [sling7_1, sling7_2, sling7_3, sling7_model],
    tag: "Limited Edition"
  },

  // ===== TOTE BAGS =====
  {
    id: 19,
    name: "Rustic Rose Tote",
    price: "₹1799",
    originalPrice: "₹2,199",
    category: "tote",
    image: tote1,
    modelImage: tote1_model,
    tag: "Premium"
  },
  {
    id: 20,
    name: "Cream Elegance Tote",
    price: "₹1,559",
    originalPrice: "₹1,999",
    category: "tote",
    image: tote2,
    modelImage: tote2_model,
    tag: null
  },
  {
    id: 21,
    name: "Summer Horizon Tote",
    price: "₹1,199",
    originalPrice: "₹1,499",
    category: "tote",
    image: tote3,
    modelImage: tote3_model,
    tag: "Seasonal"
  },

  // ===== POTLIS =====
  {
    id: 22,
    name: "Royal Maroon Potli",
    price: "₹299",
    originalPrice: "₹459",
    category: "potli",
    image: potli1,
    modelImage: potli1_model,
    tag: "Popular"
  },
  {
    id: 23,
    name: "Royal Maroon Potli",
    price: "₹449",
    originalPrice: "₹659",
    category: "potli",
    images: [potli5_1, potli5_2, potli5_model1, potli5_model2],
    tag: "New Arrival"
  },
  {
    id: 24,
    name: "Mauve Magic Potli",
    price: "₹259",
    originalPrice: "₹459",
    category: "potli",
    image: potli3,
    modelImage: potli3_model,
    tag: null
  },
  {
    id: 25,
    name: "Terracotta Dream Potli",
    price: "₹259",
    originalPrice: "₹459",
    category: "potli",
    image: potli4,
    modelImage: potli4_model,
    tag: null
  },
  {
    id: 26,
    name: "Sage Green Potli",
    price: "₹259",
    originalPrice: "₹459",
    category: "potli",
    image: potli2,
    modelImage: potli2_model,
    tag: null
  },
  
  // ===== BASKETS =====
  {
    id: 27,
    name: "Natural Woven Basket",
    price: "₹149",
    originalPrice: "₹199",
    category: "basket",
    image: basket1,
    modelImage: basket1_model,
    tag: "New Arrival"
  }
]
