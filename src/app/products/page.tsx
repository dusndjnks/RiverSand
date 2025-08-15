'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

import riversand from "../../../public/images/riversand.webp";
import msand from "../../../public/images/m-sand.webp";
import psand from "../../../public/images/p-sand.webp";
import bluemetal20 from "../../../public/images/20mm-bluemetal.webp";
import bluemetal6 from "../../../public/images/6mmbluemetal.webp";
import rockdust from "../../../public/images/rockdust.webp";
import rockrubble from "../../../public/images/product3.webp";
import row3 from "../../../public/images/row3.webp";
import row2 from "../../../public/images/row2.webp";
import row1 from "../../../public/images/row1.webp";
import sands1 from "../../../public/images/goldensands (1).webp";

interface Product {
  title: string;
  description: string;
  image: StaticImageData;
  uses: string[];
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}

const products: Product[] = [
  {
    title: 'River Sand',
    description: 'Naturally available sand used for brick work, RCC, and other construction. Washed and filtered for superior quality.',
    image: riversand,
    uses: ['Concrete mixing', 'Brickwork', 'Plastering']
  },
  {
    title: 'M-Sand (Manufactured Sand)',
    description: 'High-quality crushed stone sand with perfect gradation, ideal for concrete and construction applications.',
    image: msand,
    uses: ['Concrete production', 'RCC works', 'Flooring']
  },
  {
    title: 'P-Sand (Plastering Sand)',
    description: 'Ultra-fine sand specially processed for smooth plaster finishes with excellent workability.',
    image: psand,
    uses: ['Wall plastering', 'Interior finishes', 'Putty mixing']
  },
  {
    title: '20mm Blue Metal',
    description: 'Premium quality coarse aggregate for concrete mixes and road construction with excellent compaction.',
    image: bluemetal20,
    uses: ['Concrete foundations', 'Road base', 'Drainage systems']
  },
  {
    title: '6mm Blue Metal',
    description: 'Smaller aggregate size perfect for precast concrete, tiles, and finishing applications.',
    image: bluemetal6,
    uses: ['Tile fixing', 'Terrazzo flooring', 'Decorative concrete']
  },
  {
    title: 'Rock Dust',
    description: 'Fine crushed stone powder ideal for compaction and as a base material for various construction needs.',
    image: rockdust,
    uses: ['Filling material', 'Base preparation', 'Landscaping']
  },
  {
    title: 'Rock Rubble',
    description: 'Durable and versatile aggregate for foundation works, landscaping, and erosion control with excellent strength.',
    image: rockrubble,
    uses: ['Retaining walls', 'Road embankments', 'Decorative features', 'Drainage systems']
  }
];

export default function ProductPage() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProductClick = (productTitle: string) => {
    setFormData(prev => ({
      ...prev,
      product: productTitle
    }));
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }
    
    if (!formData.phone.trim() || !/^[0-9]{10,15}$/.test(formData.phone.trim())) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const payload = {
        ...formData,
        timestamp: new Date().toISOString()
      };

      const formDataEncoded = new URLSearchParams();
      (Object.entries(payload) as [keyof typeof payload, string][]).forEach(([key, value]) => {
        formDataEncoded.append(key, value);
      });

      const scriptUrl = "https://script.google.com/macros/s/AKfycbwo7alFZPoohmj2LVge0gGuXzQ3vp5fCufgIU29JtwTLSaIFvmQILSTgiPsRsaUQgyOng/exec";
      
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataEncoded
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.text();
      console.log("Form submission successful:", result);
      
      alert("Thank you for your enquiry! We will contact you soon.");
      setFormData({
        name: '',
        phone: '',
        email: '',
        product: '',
        message: ''
      });
      setShowForm(false);
      
    } catch (error) {
      console.error("Submission error:", error);
      alert(`There was an error. Please try again or contact us directly at +91 7837888666`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f8f5f2] text-gray-800 font-sans">
      {/* Spacer for Navbar */}
      <div className="h-20 bg-white"></div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#742731] to-[#9a3a47] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Golden Sands & Aggregates</h1>
          <p className="text-xl md:text-2xl opacity-90">High-quality sand and aggregates supplied across South Kerala</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#742731] mb-3">Our Premium Products</h2>
          <div className="w-20 h-1 bg-[#742731] mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Quality construction materials for all your building needs
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Side - Image */}
              <div className="md:w-1/2 h-80 md:h-[400px] relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="object-cover scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
              </div>

              {/* Right Side - Text */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#742731]">
                  {product.title}
                </h2>
                <p className="text-gray-700 mb-6">
                  {product.description}
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Common Uses
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  {product.uses.map((use, i) => (
                    <li key={i}>{use}</li>
                  ))}
                </ul>

                <button
                  onClick={() => handleProductClick(product.title)}
                  className="w-full md:w-auto bg-[#742731] hover:bg-[#5a1e26] text-white py-3 px-6 rounded-md transition-colors"
                  aria-label={`Enquire about ${product.title}`}
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 id="modal-title" className="text-xl font-bold text-[#742731]">Product Enquiry</h3>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#742731]"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#742731]"
                      aria-required="true"
                      pattern="[0-9]{10,15}"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#742731]"
                    />
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      value={formData.product}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#742731]"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[#742731] hover:bg-[#5a1e26] text-white py-2 px-4 rounded-md transition-colors ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#742731] mb-3">Quality Assurance</h2>
          <div className="w-20 h-1 bg-[#742731] mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            All our materials undergo rigorous quality testing to ensure they meet industry standards.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full">
          {[
            { title: "Purity", value: "100%", image: row1 },
            { title: "Govt. Approved", value: "GST Invoice", image: row2 },
            { title: "Silt Content", value: "< 3%", image: row3 },
            { title: "Delivery", value: "On-Time", image: sands1 },
          ].map((item, index) => (
            <div key={index} className="relative w-full h-[280px]">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
                <div className="text-xl font-bold">{item.value}</div>
                <div className="text-sm">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#742731] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Order Your Construction Materials?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today for the best quality sand and aggregates in Kerala.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="tel:+917837888666"
              className="bg-white text-[#742731] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
              aria-label="Call us at +91 7837888666"
            >
              Call Now
            </Link>
            <Link
              href="https://wa.me/917837888666?text=Hi%2C%20I%27m%20interested%20in%20ordering%20construction%20materials."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#742731] transition"
              aria-label="Contact us on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.38 0 0 5.38 0 12a11.93 11.93 0 0 0 1.64 6L0 24l6.25-1.63A11.9 11.9 0 0 0 12 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22a9.92 9.92 0 0 1-5.08-1.37l-.36-.21-3.7.96.99-3.6-.23-.37A9.9 9.9 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.44-7.55c-.3-.15-1.79-.88-2.06-.98s-.48-.15-.68.15-.78.98-.96 1.18-.36.23-.66.08a8.15 8.15 0 0 1-2.4-1.48 9.01 9.01 0 0 1-1.67-2.07c-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53s-.68-1.65-.93-2.28c-.24-.6-.49-.52-.68-.53l-.58-.01c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.24 3.1c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.79-.73 2.04-1.44.25-.7.25-1.3.17-1.44-.08-.14-.27-.22-.56-.36z" />
              </svg>
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}