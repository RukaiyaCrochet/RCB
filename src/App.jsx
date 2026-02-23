import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Instagram, Mail, Menu, X, Heart, Star, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, ExternalLink, Truck, ShieldCheck, FileText, ArrowUp, Quote, Camera, MapPin, Phone, Palette, Leaf, Package } from 'lucide-react';
import { heroSlides } from './data/heroSlides.js';
import { products } from './data/products.js';
import logo from './assets/logo.svg';

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 448 512" 
    fill="currentColor" 
    className={className}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const App = () => {
  // --- CONFIGURATION ---
  const WHATSAPP_NUMBER = "919574574251"; 
  const INSTAGRAM_URL = "https://www.instagram.com/rukaiya_crochet_bags/";

  // --- DATA ---

  // Add JSON-LD Structured Data for SEO
  useEffect(() => {
    const siteUrl = "https://www.rukaiyacrochetbags.website";
    const getAbsoluteUrl = (assetPath) => {
      if (!assetPath) return undefined;
      if (assetPath.startsWith('http://') || assetPath.startsWith('https://')) return assetPath;
      return `${siteUrl}${assetPath}`;
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Rukaiya Crochet Bags",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "description": "Handmade crochet bags, handbags, slings, totes, and potlis crafted with love in India",
      "founder": {
        "@type": "Person",
        "name": "Rukaiya"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9574574251",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.instagram.com/rukaiya_crochet_bags/"
      ]
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Rukaiya Crochet Bags",
      "url": siteUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/#collection?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };

    // Product Collection Schema
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Handmade Crochet Bags Collection",
      "description": "Browse our collection of handcrafted crochet bags including handbags, slings, totes, and potlis",
      "numberOfItems": products.length,
      "itemListElement": products.slice(0, 10).map((product, index) => ({
        ...(() => {
          const selectedImage = product.image || (product.images && product.images[0]) || product.modelImage;
          const image = getAbsoluteUrl(selectedImage);
          const numericPrice = product.price ? product.price.replace(/[^0-9.]/g, '') : undefined;
          return {
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Product",
              "name": product.name,
              "description": `Handmade crochet ${product.category} - ${product.name}`,
              "category": product.category,
              ...(image ? { "image": [image] } : {}),
              "url": `${siteUrl}/#collection`,
              "sku": `RCB-${product.id}`,
              "brand": {
                "@type": "Brand",
                "name": "Rukaiya Crochet Bags"
              },
              "offers": {
                "@type": "Offer",
                ...(numericPrice ? { "price": numericPrice } : {}),
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "url": `${siteUrl}/#collection`,
                "seller": {
                  "@type": "Organization",
                  "name": "Rukaiya Crochet Bags"
                }
              }
            }
          };
        })()
      }))
    };

    // Insert schemas into DOM
    const schemas = [organizationSchema, websiteSchema, productSchema];
    schemas.forEach((_, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemas[index]);
      script.id = `schema-${index}`;
      
      // Remove existing schema if present
      const existing = document.getElementById(`schema-${index}`);
      if (existing) existing.remove();
      
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup schemas on unmount
      schemas.forEach((_, schemaIndex) => {
        const script = document.getElementById(`schema-${schemaIndex}`);
        if (script) script.remove();
      });
    };
  }, []);


  // --- POLICIES DATA ---
  const policies = {
    privacy: {
      title: "Privacy Policy",
      icon: <ShieldCheck className="w-6 h-6 text-teal-500" />,
      content: (
        <div className="space-y-4 text-stone-600">
          <p>At <strong>Rukaiya Crochet Bags</strong>, we value your trust. This policy outlines how we handle your information.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Data Collection:</strong> We only collect information necessary to process your order (Name, Address, Phone Number).</li>
            <li><strong>Usage:</strong> Your phone number is used strictly for order updates via WhatsApp. We do not spam.</li>
            <li><strong>Sharing:</strong> We never sell or share your data with third parties, except for shipping partners to deliver your order.</li>
          </ul>
        </div>
      )
    },
    shipping: {
      title: "Shipping Policy",
      icon: <Truck className="w-6 h-6 text-rose-500" />,
      content: (
        <div className="space-y-4 text-stone-600">
          <p><strong>Handcrafted Takes Time:</strong> Since every bag is handmade with love by Rukaiya, please allow us time to create perfection.</p>
          <div className="bg-stone-50 p-4 rounded-lg">
            <h4 className="font-bold text-stone-800 mb-2">Processing Time</h4>
            <p className="text-sm">Ready-to-ship items: 1-2 days.<br/>Custom orders: 7-14 days (depending on complexity).</p>
          </div>
          <div className="bg-stone-50 p-4 rounded-lg">
            <h4 className="font-bold text-stone-800 mb-2">Delivery Estimates</h4>
            <p className="text-sm">Metro Cities: 3-5 business days.<br/>Rest of India: 5-7 business days.</p>
          </div>
          <p className="text-xs text-stone-400">Note: Delays due to courier partners are beyond our control, but we will assist you in tracking.</p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      icon: <FileText className="w-6 h-6 text-amber-500" />,
      content: (
        <div className="space-y-4 text-stone-600">
          <p>By placing an order with us, you agree to the following:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Handmade Nature:</strong> Slight variations in size and color may occur. This is the beauty of handmade products, not a defect.</li>
            <li><strong>Custom Orders:</strong> Customized items cannot be cancelled once work has begun.</li>
            <li><strong>Returns:</strong> We accept returns only if the product is damaged upon arrival. Please record an unboxing video as proof.</li>
            <li><strong>Care:</strong> We recommend spot cleaning or gentle hand wash for longevity. Do not machine wash.</li>
          </ul>
        </div>
      )
    }
  };

  // --- STATE MANAGEMENT ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productImageIndex, setProductImageIndex] = useState({});
  const [productPendingIndex, setProductPendingIndex] = useState({});
  const [productImageLoading, setProductImageLoading] = useState({});
  const [productImageOpacity, setProductImageOpacity] = useState({});
  const [activePolicy, setActivePolicy] = useState(null); 
  const [showScrollTop, setShowScrollTop] = useState(false);

  // --- REFS FOR TOUCH/SWIPE ---
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const productTouchStartX = useRef({});

  // --- LOGIC & EFFECTS ---

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    if (touchStartX.current - touchEndX.current > threshold) {
      handleNextSlide(); 
    }
    if (touchStartX.current - touchEndX.current < -threshold) {
      handlePrevSlide(); 
    }
  };

  const requestProductImageChange = (productId, nextIndex) => {
    const currentIndex = productImageIndex[productId] || 0;
    if (nextIndex === currentIndex) return;
    
    // Start fade out with blur effect
    setProductImageOpacity((prev) => ({ ...prev, [productId]: 0.3 }));
    setProductImageLoading((prev) => ({ ...prev, [productId]: true }));
    
    // Delay image change slightly for smoother transition
    setTimeout(() => {
      setProductPendingIndex((prev) => ({ ...prev, [productId]: nextIndex }));
    }, 150);
  };

  const handleProductTouchStart = (e, productId) => {
    productTouchStartX.current[productId] = e.targetTouches[0].clientX;
  };

  const handleProductTouchEnd = (e, productId, imagesLength) => {
    const startX = productTouchStartX.current[productId];
    if (startX === undefined) return;
    const endX = e.changedTouches[0].clientX;
    const delta = startX - endX;
    const threshold = 50;
    const imgIndex = productImageIndex[productId] || 0;

    if (delta > threshold) {
      requestProductImageChange(productId, (imgIndex + 1) % imagesLength);
    } else if (delta < -threshold) {
      requestProductImageChange(productId, (imgIndex - 1 + imagesLength) % imagesLength);
    }
  };

  const handleProductImageLoad = (productId) => {
    const pendingIndex = productPendingIndex[productId];
    if (pendingIndex !== undefined) {
      setProductImageIndex((prev) => ({ ...prev, [productId]: pendingIndex }));
      setProductPendingIndex((prev) => ({ ...prev, [productId]: undefined }));
    }
    
    // Smooth fade-in after image loads
    setTimeout(() => {
      setProductImageLoading((prev) => ({ ...prev, [productId]: false }));
      setProductImageOpacity((prev) => ({ ...prev, [productId]: 1 }));
    }, 100);
  };

  const handleNavClick = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProducts = activeTab === 'all' 
    ? products 
    : activeTab === 'new arrival'
      ? products.filter(p => p.tag === 'New Arrival')
      : products.filter(p => p.category === activeTab);

  const categories = [
    { id: 'all', label: 'All Bags' },
    { id: 'new arrival', label: 'New Arrivals' },
    { id: 'handbag', label: 'Handbags' },
    { id: 'sling', label: 'Slings' },
    { id: 'tote', label: 'Totes' },
    { id: 'potli', label: 'Potlis' }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-rose-200 scroll-smooth">
      
      {/* --- ANNOUNCEMENT BAR --- */}
      <div className="bg-gradient-to-r from-rose-500 to-rose-400 text-white py-2 sm:py-3 fixed top-0 w-full z-[60] shadow-md">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wide animate-pulse">
            ✨ Custom Orders Open | Free Shipping on Orders Above ₹4999 ✨
          </p>
        </div>
      </div>
      
      {/* --- NAVIGATION MODULE --- */}
      <nav 
        className={`fixed w-full z-50 top-8 sm:top-12 transition-all duration-500 ease-in-out ${
          scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 group cursor-default min-w-0">
            <img
              src={logo}
              alt="Rukaiya logo"
              className="block shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-base sm:text-xl md:text-2xl font-serif font-medium tracking-wide leading-none text-stone-800 truncate">
              Rukaiya Crochet Bags<span className="text-rose-400 animate-pulse">.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-stone-500">
            {['Home', 'Collection', 'About', 'Reseller'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-rose-500 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-rose-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 hover:bg-rose-50 rounded-full transition-colors text-stone-600 hover:text-rose-500"
              title="Visit Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#reseller" 
              className="px-6 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-lg shadow-rose-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Reseller Inquiry
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-stone-800 p-2 active:bg-stone-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl md:hidden border-t border-stone-100 transition-all duration-300 ease-in-out origin-top z-40 ${
            isMenuOpen ? 'opacity-100 scale-y-100 py-8' : 'opacity-0 scale-y-0 h-0 py-0'
          }`}
        >
          <div className="flex flex-col gap-6 px-6">
            {['Home', 'Collection', 'About', 'Reseller'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleNavClick}
                className="text-lg font-medium text-stone-600 hover:text-rose-500 flex items-center justify-between group"
              >
                {item}
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-rose-400"/>
              </a>
            ))}
            <hr className="border-stone-100"/>
            <a href={INSTAGRAM_URL} className="text-rose-500 font-medium flex items-center gap-2">
              <Instagram size={20}/> Follow on Instagram
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION MODULE --- */}
      <section id="home" className="relative pt-32 sm:pt-52 lg:pt-60 pb-16 sm:pb-20 lg:pb-32 overflow-hidden scroll-mt-20">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 animate-pulse duration-3000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4 animate-pulse duration-5000"></div>

        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left z-10 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-rose-50 text-rose-600 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-sm">
                <Star size={12} fill="currentColor" /> Handcrafted with Love
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif leading-tight text-stone-900 drop-shadow-sm">
                Har Stitch Mein<br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">Mohabbat</span>
              </h1>
              <p className="text-sm sm:text-lg text-stone-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                Discover beautiful handcrafted crochet handbags, sling bags, tote bags, and potlis. 
                100% handmade with premium cotton yarn. Custom colors available.
              </p>
              
              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <a 
                   href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Rukaiya, I loved your crochet collection and would like to know more!")}`}
                   target="_blank"
                   rel="noreferrer"
                   className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#25D366] text-white rounded-full font-medium text-sm sm:text-base hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-200 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Start Your Order <WhatsAppIcon size={18} />
                </a>
                <a 
                  href={INSTAGRAM_URL}
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-stone-800 border border-stone-200 rounded-full font-medium text-sm sm:text-base hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
                >
                  View Gallery <Instagram size={18} />
                </a>
              </div>
            </div>
            
            {/* Carousel Module */}
            <div className="lg:w-1/2 relative w-full max-w-md mx-auto lg:max-w-none">
              <div 
                className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl lg:rounded-[3rem] shadow-2xl overflow-hidden bg-white touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {heroSlides.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-95'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={`Handmade crochet bags collection - Slide ${slide.id} | Beautiful handcrafted accessories`}
                      className="w-full h-full object-cover object-center"
                      loading={index === currentSlide ? "eager" : "lazy"}
                      fetchPriority={index === currentSlide ? "high" : "low"}
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 40vw"
                    />
                  </div>
                ))}

                {/* Arrows */}
                <button 
                  onClick={handlePrevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/70 hover:bg-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-sm text-stone-800 hover:scale-110"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                </button>
                <button 
                  onClick={handleNextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/70 hover:bg-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-sm text-stone-800 hover:scale-110"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                </button>

                {/* Dots */}
                <div className="absolute top-4 sm:top-6 left-0 right-0 z-20 flex justify-center gap-1.5 sm:gap-2">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentSlide ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/80'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Decorative Frame Behind */}
              <div className="absolute -z-10 top-6 sm:top-8 -right-4 sm:-right-6 lg:-right-8 w-full h-full border-2 border-stone-200 rounded-3xl lg:rounded-[3rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES MODULE --- */}
      <div className="bg-rose-50 py-10 sm:py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif text-stone-900">Why Choose Handmade Crochet Bags?</h2>
            <p className="text-stone-600 mt-2 text-sm sm:text-base">Sustainable, unique, and crafted with care</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { title: "100% Customizable", desc: "Choose your colors and design preferences", Icon: Palette, color: "text-pink-600", bg: "bg-pink-50" },
              { title: "Eco-Friendly Premium Yarn", desc: "Sustainable, durable, and soft cotton materials", Icon: Leaf, color: "text-green-600", bg: "bg-green-50" },
              { title: "Free Shipping India", desc: "Free delivery on orders above ₹4999", Icon: Truck, color: "text-blue-600", bg: "bg-blue-50" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start sm:flex-row sm:gap-4 gap-3 p-4 sm:p-6 bg-white/50 rounded-xl sm:rounded-2xl border border-white hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-default">
                <div className={`${feature.bg} p-3 sm:p-4 rounded-full shadow-sm flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14`}>
                  <feature.Icon className={`${feature.color} w-6 h-6 sm:w-7 sm:h-7`} strokeWidth={2.5} />
                </div>
                <div className="min-w-0 text-center sm:text-left">
                  <h3 className="font-bold text-base sm:text-lg text-stone-800">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- COLLECTION GALLERY MODULE --- */}
      <section id="collection" className="py-12 sm:py-20 lg:py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          
          {/* Custom Order Disclaimer Banner */}
          <div className="mb-12 sm:mb-16 max-w-3x2 mx-auto text-center">
             <div className="inline-block p-6 sm:p-8 rounded-3xl bg-rose-50 border border-rose-100/50 shadow-sm">
              <p className="text-stone-600 leading-relaxed font-medium text-sm sm:text-base">
                <span className="font-serif text-rose-500 text-lg sm:text-xl font-bold block mb-2">✨ Note on Custom Orders</span>
                The prices shown are for standard sizes. Customization rates depend on size & material choice. <br className="hidden sm:block" />
                All orders are subject to raw material availability.
              </p>
            </div>
          </div>


          <div className="text-center mb-10 sm:mb-16">
            <span className="text-rose-400 font-bold tracking-widest text-xs uppercase mb-2 sm:mb-3 block">Our Gallery</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 mb-6 sm:mb-8">Curated with Passion</h2>
            
            {/* Filter Tabs - Mobile App Style (Horizontal Scroll) */}
            <div className="flex overflow-x-auto sm:justify-center gap-2 sm:gap-3 pb-4 px-2 sm:px-0 no-scrollbar snap-x">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 transform whitespace-nowrap snap-center ${
                    activeTab === tab.id
                      ? 'bg-stone-900 text-white shadow-lg shadow-stone-200 scale-105' 
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                const images = product.images || (product.modelImage ? [product.image, product.modelImage] : [product.image]);
                const imgIndex = productImageIndex[product.id] || 0;
                const displayIndex = productPendingIndex[product.id] !== undefined ? productPendingIndex[product.id] : imgIndex;
                const currentImg = images[displayIndex];
                
                return (
                <div key={product.id} className="relative animate-fade-in flex flex-col h-full">
        
                  {/* Image Container */}
                  <div 
                    className="aspect-[3/4] sm:aspect-[4/5] bg-stone-100 rounded-2xl sm:rounded-3xl overflow-hidden mb-4 sm:mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0 group touch-pan-y"
                    onTouchStart={(e) => handleProductTouchStart(e, product.id)}
                    onTouchEnd={(e) => handleProductTouchEnd(e, product.id, images.length)}
                  >
                    {productImageLoading[product.id] && (
                      <div className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white/40 to-stone-50/40 backdrop-blur-md rounded-2xl sm:rounded-3xl transition-all duration-300">
                        <div className="relative">
                          <div className="w-12 h-12 border-4 border-stone-200/60 rounded-full"></div>
                          <div className="w-12 h-12 border-4 border-transparent border-t-rose-500 border-r-rose-400 rounded-full animate-spin absolute top-0 left-0"></div>
                        </div>
                      </div>
                    )}
                    <img 
              
                      src={currentImg} 
                      alt={`${product.name} - Handmade crochet ${product.category} bag in India | Buy online`}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => handleProductImageLoad(product.id)}
                      className={`w-full h-full object-contain object-cover transition-all duration-300 ease-in-out hover:scale-105`}
                      style={{
                        opacity: productImageOpacity[product.id] !== undefined ? productImageOpacity[product.id] : 1,
                        filter: productImageOpacity[product.id] < 0.5 ? 'blur(8px)' : 'blur(0px)',
                        transition: 'opacity 0.5s ease-in-out, filter 0.3s ease-out, transform 0.7s ease-out'
                      }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    
                    
                    {/* Badges */}
                    {product.tag && (
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white/95 backdrop-blur text-stone-800 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full uppercase tracking-wider shadow-sm z-10">
                        {product.tag}
                      </div>
                    )}

                    {/* Switch Indicators (Dynamic for any array length) */}
                    {images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex justify-center gap-2">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => requestProductImageChange(product.id, idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx === imgIndex ? 'w-6 bg-stone-800' : 'w-2 bg-stone-400 hover:bg-stone-600'
                            }`}
                            aria-label={`View image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Nav Arrows (Dynamic for any array length) */}
                    {images.length > 1 && (
                      <>
                        <button 
                          onClick={() => requestProductImageChange(product.id, (imgIndex - 1 + images.length) % images.length)}
                          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 bg-white/70 hover:bg-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-sm text-stone-800 hover:scale-110"
                        >
                          <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                        </button>
                        <button 
                          onClick={() => requestProductImageChange(product.id, (imgIndex + 1) % images.length)}
                          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 bg-white/70 hover:bg-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-sm text-stone-800 hover:scale-110"
                        >
                          <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                        </button>
                      </>
                    )}

                    {/* Label Badge: Simple Counter */}
                    {images.length > 1 && (
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-stone-900/80 text-white text-[8px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-1 rounded-full uppercase tracking-wider z-30">
                        {imgIndex + 1}/{images.length}
                      </div>
                    )}

                    {/* Order Button on Image */}
                    <div className="absolute bottom-3 right-3 z-20">
                      <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Rukaiya, I am interested in buying the ${product.name} (${product.price}).\nI saw this image: ${window.location.origin}${currentImg}`)}`}
                        target="_blank" 
                        rel="noreferrer"
                        className="btn-order-now btn-order-float btn-order-slide btn-order-pulse ring-1 ring-white/40"
                      >
                        <WhatsAppIcon size={18} /> Order Now
                      </a>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="pt-3 pb-2 px-1 flex flex-col flex-grow">
                    <div className="text-[10px] sm:text-xs font-bold tracking-widest text-rose-400 uppercase mb-1">
                      {product.category} Collection
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif text-stone-900 group-hover:text-rose-600 transition-colors mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-stone-900">{product.price}</span>
                      <span className="text-sm text-stone-400 line-through decoration-1">{product.originalPrice}</span>
                      <span className="ml-auto text-[10px] font-bold text-green-700 bg-green-50 border border-green-100 px-2 py-1 rounded-full">
                        Save ₹{parseInt(product.originalPrice.replace(/[^0-9]/g, '')) - parseInt(product.price.replace(/[^0-9]/g, ''))}
                      </span>
                    </div>
                  </div>
                </div>
              );
              })
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag size={30} className="text-stone-300" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Coming Soon!</h3>
                <p className="text-stone-500">We are crafting new designs for this category.</p>
              </div>
            )}
          </div>

          <div className="text-center mt-12 sm:mt-20">
            <a 
              href={INSTAGRAM_URL}
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-stone-500 hover:text-rose-500 font-bold transition-all border-b-2 border-transparent hover:border-rose-500 pb-1 text-base sm:text-lg"
            >
              View Full Gallery on Instagram <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION MODULE --- */}
      <section id="about" className="py-16 sm:py-24 bg-stone-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-rose-500 font-bold tracking-widest text-xs uppercase">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-stone-900">Handcrafted Crochet Bags Made in India</h2>
              <p className="text-stone-600 leading-relaxed">
                Hi, I'm <strong>Rukaiya</strong>. Every crochet bag you see is personally handmade by me using premium quality cotton yarn. 
                What started as a passion project has grown into a small business dedicated to sustainable fashion and unique handcrafted accessories.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Each handmade crochet bag takes hours of careful work - from selecting the perfect yarn colors to stitching every detail with precision. 
                Whether you're looking for a stylish crochet handbag, practical tote bag, trendy sling bag, or elegant potli for weddings, 
                I create each piece with love and attention to detail.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm w-24">
                  <span className="text-2xl font-bold text-stone-800">80+</span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wide">Happy Customers</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm w-24">
                  <span className="text-2xl font-bold text-stone-800">100%</span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wide">Handmade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS MODULE --- */}
      {/* <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-teal-500 font-bold tracking-widest text-xs uppercase mb-2 block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900">Customer Love</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((review) => (
              <div key={review.id} className="bg-stone-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow duration-300">
                <Quote size={40} className="text-rose-200 absolute top-6 right-6" />
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{review.name}</p>
                    <p className="text-xs text-stone-400">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- RESELLER MODULE --- */}
      <section id="reseller" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-rose-50 to-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-2xl shadow-rose-100 overflow-hidden border border-rose-100">
            <div className="">
              <div className="p-6 sm:p-12 lg:p-20 flex flex-col justify-center">
                <span className="text-rose-400 font-bold tracking-widest text-xs uppercase mb-2 sm:mb-3">Business Opportunities</span>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif text-stone-900 mb-4 sm:mb-6">Partner with Rukaiya</h2>
                <p className="text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed mb-6 sm:mb-8">
                  We love collaborating with boutiques and resellers. Our handcrafted crochet bags make the perfect addition to curated collections.
                </p>
                
                <div className="mb-8 sm:mb-10 bg-green-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-green-100">
                    <p className="font-bold text-green-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <WhatsAppIcon size={20}/> Fastest way to connect?
                    </p>
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Rukaiya, I am interested in becoming a reseller. Can we discuss pricing?")}`}
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center text-sm sm:text-base"
                    >
                        Chat directly on WhatsApp
                        <ArrowRight size={20} />
                    </a>
                </div>
                
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Wholesale pricing for bulk orders",
                    "Custom color palettes for your brand",
                    "Priority manufacturing & shipping"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-stone-700 font-medium text-sm sm:text-base">
                      <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION FOR SEO --- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-stone-600">Everything you need to know about handmade crochet bags</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-stone-50 p-6 rounded-2xl">
                <h3 className="font-bold text-stone-900 mb-2 text-lg">What are crochet bags made of?</h3>
                <p className="text-stone-600 leading-relaxed">Our crochet bags are made from 100% premium cotton yarn. This makes them durable, soft, and eco-friendly. Unlike synthetic materials, cotton crochet bags are sustainable and biodegradable.</p>
              </div>
              
              <div className="bg-stone-50 p-6 rounded-2xl">
                <h3 className="font-bold text-stone-900 mb-2 text-lg">How long does it take to make a handmade crochet bag?</h3>
                <p className="text-stone-600 leading-relaxed">Each handcrafted crochet bag takes 6-15 hours to complete, depending on the design complexity. Larger tote bags take longer, while smaller potlis are quicker. Every stitch is done by hand with care.</p>
              </div>
              
              <div className="bg-stone-50 p-6 rounded-2xl">
                <h3 className="font-bold text-stone-900 mb-2 text-lg">Can I customize the colors of my crochet bag?</h3>
                <p className="text-stone-600 leading-relaxed">Yes! We offer fully customizable colors for all our crochet bags. Choose your favorite color combinations and we'll handcraft a unique bag just for you. Custom orders take 7-14 days.</p>
              </div>
              
              <div className="bg-stone-50 p-6 rounded-2xl">
                <h3 className="font-bold text-stone-900 mb-2 text-lg">Are crochet bags durable?</h3>
                <p className="text-stone-600 leading-relaxed">Absolutely! Our handmade crochet bags are made with high-quality cotton yarn and tight stitching techniques. With proper care, they can last for years. They're perfect for daily use or special occasions.</p>
              </div>
              
              <div className="bg-stone-50 p-6 rounded-2xl">
                <h3 className="font-bold text-stone-900 mb-2 text-lg">Do you ship crochet bags all over India?</h3>
                <p className="text-stone-600 leading-relaxed">Yes! We ship handmade crochet bags across India. Metro cities receive delivery in 3-5 days, other areas in 5-7 days. We also offer free shipping on orders above ₹4999.</p>
              </div>
              
              <div className="bg-stone-50 p-6 rounded-2xl">
                <h3 className="font-bold text-stone-900 mb-2 text-lg">What types of crochet bags do you offer?</h3>
                <p className="text-stone-600 leading-relaxed">We create various styles including crochet handbags, sling bags, tote bags, potli bags (perfect for weddings), and basket bags. Each category has multiple designs and all are available in custom colors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FLOATING ACTION BUTTON --- */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Rukaiya! I'm browsing your website.")}`}
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={28} className="sm:w-8 sm:h-8 text-white drop-shadow-md" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white animate-bounce">1</span>
      </a>

      {/* --- SCROLL TO TOP BUTTON --- */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-40 p-3 bg-white text-stone-800 rounded-full shadow-lg border border-stone-200 transition-all duration-300 hover:bg-stone-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* --- POLICY MODAL --- */}
      {activePolicy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[85vh] animate-scale-up">
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-100 flex justify-between items-center bg-stone-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-full shadow-sm">
                  {policies[activePolicy].icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800">{policies[activePolicy].title}</h3>
              </div>
              <button 
                onClick={() => setActivePolicy(null)}
                className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-y-auto">
              {policies[activePolicy].content}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-100 bg-stone-50 text-center">
              <button 
                onClick={() => setActivePolicy(null)}
                className="px-6 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-12 sm:py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center md:text-left">
              <span className="text-2xl sm:text-3xl font-serif text-white block mb-2 tracking-wide">
                Rukaiya Crochet Bags<span className="text-rose-400">.</span>
              </span>
              <p className="max-w-xs mx-auto md:mx-0 text-stone-500 text-sm sm:text-base mb-4">
                Handmade crochet bags crafted with love in India. 
                Shop crochet handbags, slings, totes, and potlis online.
              </p>
            </div>
            
            <div className="flex gap-4 sm:gap-6">
              <a 
                href={INSTAGRAM_URL}
                target="_blank" 
                rel="noreferrer" 
                aria-label="Follow us on Instagram"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone-800 flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-500 hover:to-orange-500 hover:text-white transition-all duration-300"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" 
                rel="noreferrer" 
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <WhatsAppIcon size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-4 sm:gap-6 mb-6">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-medium">
                <button onClick={() => setActivePolicy('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
                <button onClick={() => setActivePolicy('shipping')} className="hover:text-white transition-colors">Shipping Policy</button>
                <button onClick={() => setActivePolicy('terms')} className="hover:text-white transition-colors">Terms & Conditions</button>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
                <a href="#reseller" className="hover:text-white transition-colors">Become a Reseller</a>
              </div>
            </div>
            
            <div className="text-center text-xs text-stone-600">
              <p className="mb-2">&copy; {new Date().getFullYear()} Rukaiya Crochet Bags. All rights reserved.</p>
              <p className="text-[10px]">
                Keywords: Handmade crochet bags, buy crochet bags online India, custom crochet handbags, 
                eco-friendly bags, sustainable fashion accessories, crochet tote bags, sling bags, potli bags
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;