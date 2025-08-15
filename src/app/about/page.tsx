'use client';

import { motion, Variants } from 'framer-motion';
import { MapPin, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import img1 from "../../../public/images/about1.jpg";
import img2 from "../../../public/images/about2.jpg";
import img5 from "../../../public/images/about5.jpeg";
import img4 from "../../../public/images/about4.jpg";

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { duration: 0.4 } 
  }
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

export default function AboutPage() {
  return (
    <main className="bg-[#f8f5f2] text-[#333333] font-sans">
      {/* Navbar spacer */}
      <div className="h-20 bg-[#ffffff]" />

      {/* Hero Section */}
      <section className="relative h-[65vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/sandsupplier.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[#000000]/60 flex items-center justify-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#ffffff] text-4xl md:text-5xl font-bold text-center leading-snug"
          >
            Reliable Sand Supply <br /> for Every Construction Need
          </motion.h1>
        </div>
      </section>

      {/* Who We Are */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="max-w-7xl mx-auto py-16 px-4 md:px-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#742731] mb-6">Who We Are</h2>
        <p className="text-lg md:text-xl leading-relaxed text-[#333333] mb-4">
          We are South Kerala's trusted supplier of quality River Sand and M-Sand for residential, commercial, and infrastructure projects.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-[#333333]">
          Whether you're building a dream home or managing large-scale infrastructure, we have the logistics and material to support your goals.
        </p>
      </motion.section>

      {/* Image Gallery */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
        className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16"
      >
        {[img1, img2, img4].map((img, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className="relative rounded-xl shadow-md w-full h-64 lg:h-80 overflow-hidden"
          >
            <Image 
              src={img}
              alt={`Gallery ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative text-[#ffffff] py-16 px-4 md:px-6"
      >
        <div className="absolute inset-0">
          <Image
            src={img5}
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#000000]/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4a373] mb-8">What We Do</h2>
          <ul className="space-y-3 text-lg md:text-xl font-medium text-[#ffffff]">
            <li>✔️ Supply premium River Sand & M-Sand</li>
            <li>✔️ On-site delivery with our truck fleet</li>
            <li>✔️ Ethical sourcing from certified quarries</li>
            <li>✔️ Support for all South Kerala projects</li>
          </ul>
        </div>
      </motion.section>

      {/* Our Commitment */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="max-w-7xl mx-auto py-16 px-4 md:px-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#742731] mb-6">Our Commitment</h2>
        <p className="text-lg md:text-xl leading-relaxed text-[#333333]">
          We source only from authorized depots and quarries—ensuring proper loading, safe transportation, and quality checks.
        </p>
      </motion.section>

      {/* Sigma Rocks Section */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="bg-[#ffffff] rounded-lg shadow-sm p-6 mb-12 border border-[#e5e7eb] max-w-3xl mx-auto"
      >
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[#333333] mb-2">
            Parented by <span className="text-[#742731]">Sigma Rocks International</span>
          </h3>
          <div className="w-16 h-1 bg-[#742731] mx-auto mb-4"></div>
          <p className="text-[#6b7280] mb-3">
            Premium-grade sand sourced from our Kallampalam quarries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="flex items-center">
              <MapPin className="text-[#742731] mr-2" size={16} />
              <span className="text-sm text-[#333333]">Head Office: Vembayam, Kollam</span>
            </div>
            <div className="flex items-center">
              <Truck className="text-[#742731] mr-2" size={16} />
              <span className="text-sm text-[#333333]">Material Source: Kallampalam</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Service Area */}
      <section className="py-16 bg-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">
              Serving <span className="text-[#742731]">All South Kerala</span>
            </h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
              From urban centers to rural sites — our trucks reach you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Coverage List */}
            <div className="bg-[#ffffff] md:p-6 px-3 py-4 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-[#333333] mb-4 text-center">
                Our Coverage Area
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {["Trivandrum", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam"].map((district, i) => (
                  <li key={i} className="flex items-center space-x-2 text-base px-2 py-1">
                    <svg className="w-5 h-5 text-[#742731]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span className="font-medium text-[#333333]">{district}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-[#742731] text-[#ffffff] p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
              <p className="text-[#e5e7eb] mb-6">
                Get a free quote today.
              </p>
              <div className="space-y-3">
                <Link
                  href="tel:+917837888666"
                  className="flex items-center justify-center w-full bg-[#ffffff] hover:bg-[#f8f5f2] text-[#742731] font-bold px-4 py-3 rounded-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  CALL: 78378 88666
                </Link>
                <Link
                  href="https://wa.me/917837888666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-[#10b981] hover:bg-[#0ea371] text-[#ffffff] font-bold px-4 py-3 rounded-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  WHATSAPP ENQUIRY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}