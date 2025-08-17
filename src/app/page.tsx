'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckIcon, Clock, ShieldCheck, FileText, Award } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';

import BlogPost from "../components/Blogs";
import Reviews from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import ServicesSection from '../components/ServicesSection';

import hero1 from "../../public/images/hero1.webp";
import hero6 from "../../public/images/hero5.webp";
import hero3 from "../../public/images/hero3.webp";
import riversand from "../../public/images/riversand.webp";
import msand from "../../public/images/m-sand.webp";
import psand from "../../public/images/p-sand.webp";
import rockdust from "../../public/images/rockdust.webp";
import sands2 from "../../public/images/goldensands (2).webp";
import sands6 from "../../public/images/goldensands (5).webp";

const Home = () => {
  const aboutRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  const heroImages = [
    { img: hero6, alt: "Sigma Sand construction materials delivery" },
    { img: sands2, alt: "High quality construction sand piles" },
    { img: hero1, alt: "Sigma Sand quality assurance" },
    { img: hero3, alt: "Sand delivery trucks at work site" }
  ];

  const whyChooseUsItems = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Certified Quality",
      description: "Government-approved materials meeting all industry standards"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Delivery",
      description: "Guaranteed logistics with real-time tracking"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Full Documentation",
      description: "Complete legal paperwork with every shipment"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Competitive Pricing",
      description: "Best market rates with volume discounts"
    }
  ];

  const featuredProducts = [
    {
      title: "River Sand",
      image: riversand,
      alt: "Natural river sand for construction",
      description: "Naturally sourced sand ideal for plastering and brickwork. Offers excellent binding strength, fine texture, and minimal impurities. Preferred for residential and commercial plaster finish jobs.",
    },
    {
      title: "M-Sand",
      image: msand,
      alt: "Manufactured sand for concrete",
      description: "Crushed stone sand specially manufactured for load-bearing concrete mixes. Free from silt and clay, M-Sand provides high compressive strength and uniform particle size, making it ideal for RCC and block works.",
    },
    {
      title: "P-Sand",
      image: psand,
      alt: "Plastering sand for smooth finishes",
      description: "Finely graded plastering sand with ultra-smooth particles for flawless wall finishing and tile laying. P-Sand ensures better cohesion, crack resistance, and superior workability for internal and external rendering.",
    },
    {
      title: "Rockdust",
      image: rockdust,
      alt: "Stone powder for construction base",
      description: "High-grade stone powder used as a compactable base material for paving, concrete sub-layers, and soil conditioning. Rockdust offers excellent compaction, improved load distribution, and is a sustainable alternative to traditional fillers.",
    },
  ];

  return (
    <div className="font-sans bg-beige text-dark">
      <Head>
        <title>Sigma Sand - Kerala&apos;s Trusted Sand Supplier | Quality Construction Materials</title>
        <meta name="description" content="Kerala's leading supplier of high-quality construction sand including River Sand, M-Sand, P-Sand and Rockdust. Government approved materials with complete documentation and on-time delivery." />
        <meta name="keywords" content="sand supplier kerala, construction sand, river sand, m-sand, p-sand, rockdust, building materials" />
        <meta property="og:title" content="Sigma Sand - Kerala's Premium Sand Supplier" />
        <meta property="og:description" content="Quality construction materials with government approval and complete documentation" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sigmasand.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen w-full overflow-hidden" aria-label="Hero banner">
        <Swiper 
          modules={[Autoplay, EffectFade]} 
          effect="fade" 
          autoplay={{ 
            delay: 5000,
            disableOnInteraction: false 
          }} 
          loop 
          className="absolute inset-0 w-full h-full z-0"
        >
          {heroImages.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Image 
                src={item.img} 
                alt={item.alt}
                className="w-full h-full object-cover" 
                priority={idx === 0}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/30" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
            >
              Kerala&apos;s Trusted Construction Sand Supplier
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        id="about"
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Image 
                src={sands6} 
                alt="Sigma Sand quality construction materials stockyard" 
                className="rounded-xl shadow-xl w-full h-auto object-cover max-h-[500px]"
                loading="lazy"
                height={500}
                width={600}
                quality={85}
                placeholder="blur"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#742731] mb-6">
                About <span className="text-dark">Sigma Sand</span>
              </h2>
              
              <div className="text-gray-700 mb-6 space-y-4">
                <p>
                  Since our establishment, Sigma Sand has proudly served as the leading provider of essential construction materials in South Kerala. With our dedication to quality, reliability and customer satisfaction, we have earned a reputation as the go-to supplier for businesses and individuals across five districts.
                </p>
                <p>
                  At Sigma Sand, we understand the critical role that high-quality materials play in any construction project. That&apos;s why we are committed to sourcing and supplying only the finest government-approved materials, ensuring your projects are built to last.
                </p>
                <p>
                  As a trusted construction material supplier, we control the entire supply chain process, guaranteeing timely delivery to your sites with complete documentation and quality assurance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <CheckIcon className="text-[#742731] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-dark">Serving 5 Districts</span>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <CheckIcon className="text-[#742731] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-dark">Govt. Approved Quality</span>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <CheckIcon className="text-[#742731] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-dark">24/7 Customer Support</span>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <CheckIcon className="text-[#742731] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-dark">Bulk Order Discounts</span>
                </div>
              </div>

              <Link 
                href="/about" 
                className="inline-flex items-center text-[#742731] font-medium hover:underline hover:text-[#5a1e26] transition-colors group"
              >
                Learn more about our company
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        id="products"
        className="py-20 bg-[#f9f4f0]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#742731] mb-2">
                Premium Construction Sands
              </h2>
              <div className="w-20 h-1 bg-[#742731] mb-3" />
              <p className="text-gray-600 max-w-2xl">
                Select from our curated range of high-quality sands — precisely graded and processed to meet the most demanding construction, plastering, and filling needs.
              </p>
            </div>
            <Link
              href="/products"
              className="bg-[#742731] hover:bg-[#5a1e26] text-white px-6 py-3 rounded-md font-medium transition shadow-md hover:shadow-lg whitespace-nowrap flex items-center"
            >
              Explore All Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-100 hover:border-[#742731]/30 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-52 md:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    loading="lazy"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
                    <h3 className="text-xl font-semibold text-white drop-shadow-md">
                      {product.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <Link 
                    href={`/products#${product.title.toLowerCase().replace(' ', '-')}`}
                    className="text-[#742731] text-sm font-medium hover:underline flex items-center"
                  >
                    View specifications
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        id="why-choose-us"
        className="bg-dark py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-5/12 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why <span className="text-[#742731]">Choose</span> Sigma Sand
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Trusted by construction firms, contractors, and homeowners across Kerala for our uncompromising quality standards and reliable service.
              </p>
              <div className="mb-8">
                {showForm && <ContactForm />}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowForm(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#742731] hover:bg-[#5a1e26] text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg text-lg"
                >
                  Request Free Quote
                </motion.button>
              </div>
            </div>

            <div className="md:w-7/12 space-y-6">
              {whyChooseUsItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="flex items-start p-5 bg-gray-900 hover:bg-[#742731] rounded-xl transition-colors border border-[#742731] hover:border-gray-300/30 shadow-md"
                >
                  <div className="bg-[#742731]/10 p-3 rounded-lg mr-5">
                    <div className="text-[#742731]">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <ServicesSection />
      <BlogPost />
      <Reviews />

      {/* Final CTA */}
      <motion.section
        id="contact"
        className="py-20 bg-[#742731] text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order Premium Quality Sand?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Contact us today for government-approved sand with complete documentation and guaranteed delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+917837888666" 
              className="bg-white hover:bg-gray-100 text-[#742731] px-10 py-4 rounded-md font-medium text-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 7837 888 666
            </a>
            <a 
              href="https://maps.app.goo.gl/SQR5ssyvra1TBtmu5?g_st=aw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-md font-medium text-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Vadakottukavu, NH Road Kallambalam
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;