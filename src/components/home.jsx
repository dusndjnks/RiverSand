'use client'; 

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckIcon } from 'lucide-react';
import Head from 'next/head';

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
import Image from 'next/image';

const Home = () => {
  const aboutRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  const heroImages = [hero6, sands2, hero1, hero3];

  const whyChooseUsItems = [
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>),
      title: "Certified quality",
      description: "Government‑approved materials that meet site specs and pass checks"
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
      title: "On‑time delivery",
      description: "Planned routes, quick turnarounds, and night drops when needed"
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
      title: "Full documentation",
      description: "Invoice, permits, and load details provided with each trip"
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>),
      title: "Fair pricing",
      description: "Clear quotes and market‑linked rates with room for volume deals"
    }
  ];

  const featuredProducts = [
    {
      title: "River Sand",
      image: riversand,
      description: "Licensed river sand with low silt and a fine feel that helps plaster sit right and bonds brickwork well; a dependable choice across Kerala sites.",
    },
    {
      title: "M-Sand",
      image: msand,
      description: "Crushed stone sand with uniform size and no clay—made for RCC, blocks, and precast where strength and repeatable mixes matter.",
    },
    {
      title: "P-Sand",
      image: psand,
      description: "Fine plastering sand for neat finishes and fewer cracks; flows well, trowels clean, and makes wall work simpler.",
    },
    {
      title: "Rockdust",
      image: rockdust,
      description: "Stone powder for base layers and paving; compacts tight, spreads even, and helps carry load without fuss.",
    },
  ];

  return (
    <div className="font-sans bg-beige text-dark">
      <Head>
        <title>Sigma Sand - Kerala&apos;s Premium Sand Supplier</title>
        <meta name="description" content="Kerala&apos;s leading supplier of high-quality construction sand including River Sand, M-Sand, P-Sand and Rockdust. Government approved materials with complete documentation." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
        <Swiper 
          modules={[Autoplay, EffectFade]} 
          effect="fade" 
          autoplay={{ delay: 5000 }} 
          loop 
          className="absolute inset-0 w-full h-full z-0"
        >
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image 
                src={img} 
                alt={`Sigma Sand ${idx+1}`} 
                className="w-full h-full object-cover" 
                priority={idx === 0}
                fill
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center">
          <div className="text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg"
            >
              Kerala’s licensed river sand supplier
            </motion.h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Image 
                src={sands6} 
                alt="Sigma Sand quality construction materials" 
                className="rounded-xl shadow-xl w-full h-auto object-cover max-h-[400px]"
                loading="lazy"
                height={350}
                width={500}
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#742731] mb-6">
                About Sigma Sand
              </h2>
              <div className="text-gray-700 mb-6">
                <p className="mb-4">
                  Sigma Sand supplies government‑approved river sand and building materials across South Kerala with a simple promise: honest rates, clean materials, and deliveries that show up when planned. Work happens across Trivandrum, Kollam, Pathanamthitta, Alappuzha, and Kottayam, with paperwork sorted before the truck reaches the gate.
                </p>
                <p className="mb-4">
                  Every load is screened and graded so mixes stay consistent and plastering stays smooth. Because the team handles licensed sourcing and transport end‑to‑end, there’s less chasing and fewer surprises on site. <Link href="/aboutus" className="text-[#742731] font-medium hover:underline hover:text-[#5a1e26] transition-colors">Read more...</Link>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckIcon className="text-[#742731] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-[#742731]">Serving 5 Districts</span>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckIcon className="text-[#742731] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-[#742731]">Govt. Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        className="py-20 bg-[#f9f4f0]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#742731] mb-2">
                Premium Construction Sands
              </h2>
              <div className="w-20 h-1 bg-[#742731] mb-3" />
              <p className="text-gray-600 max-w-2xl">
                Pick the sand that fits the job—concrete, brickwork, or a clean finish for plaster—each grade kept steady so the work goes as planned.
              </p>
            </div>
            <Link
              href="/products"
              className="bg-[#742731] hover:bg-[#5a1e26] text-white px-6 py-3 rounded-md font-medium transition shadow-md whitespace-nowrap"
            >
              Explore All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-100 hover:border-[#742731] hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-52 md:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                    loading="lazy"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
                    <h2 className="text-lg font-semibold text-white drop-shadow-md">
                      {product.title}
                    </h2>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="bg-dark py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-5/12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why <span className="text-[#742731]">choose our</span> sand
              </h2>
              <p className="text-gray-300 mb-8">
                Builders stick with the team for licensed sourcing, steady grading, and deliveries that don’t slip.
              </p>
              <>
                {showForm && <ContactForm />}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowForm(true)}
                  className="bg-[#742731] hover:bg-[#5a1e26] text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                >
                  Request Quote
                </motion.button>
              </>
            </div>

            <div className="md:w-7/12 space-y-6">
              {whyChooseUsItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="flex items-start p-5 bg-gray-900 hover:bg-[#742731] rounded-xl transition-colors border border-[#742731] hover:border-gray-300/30 shadow-md"
                >
                  <div className="bg-[#742731]/10 p-2 rounded-lg mr-5">
                    <div className="text-[#742731]">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <ServicesSection
        title="What we do"
        description="End‑to‑end supply of licensed river sand and reliable alternatives for day‑to‑day construction needs."
        items={[
          {
            title: "Premium materials",
            description: "Curated sand grades and building aggregates that stay consistent"
          },
          {
            title: "Practical guidance",
            description: "Help with picking the right sand for mixes, plaster, and finishes"
          },
          {
            title: "Delivery done right",
            description: "A dependable fleet, scheduled dispatch, and site‑wise coordination"
          },
          {
            title: "South Kerala coverage",
            description: "District‑wise fulfillment with local support when issues pop up"
          },
          {
            title: "Equipment access",
            description: "Well‑kept machinery available on flexible terms when required"
          },
          {
            title: "Ongoing support",
            description: "Straightforward help through ordering, delivery, and documents"
          }
        ]}
      />

      <BlogPost
        title="Latest from our blog"
        posts={[
          {
            title: "Choosing the Right Sand for Your Construction",
            description: "A quick guide to where river sand, M‑Sand, and P‑Sand fit—and how they change strength and finish.",
            date: "May 15, 2023",
            link: "/blog/choosing-right-sand"
          },
          {
            title: "Sustainable Sand Mining Practices",
            description: "What compliant sourcing looks like on the ground and why it protects quality and timelines.",
            date: "April 28, 2023",
            link: "/blog/sustainable-sand-mining"
          }
        ]}
      />

      <Reviews
        testimonials={[
          {
            quote: "The only supplier that sends full paperwork with each load—less chasing, fewer delays.",
            author: "Deepa Raj, Raj Builders, Kollam"
          },
          {
            quote: "When the pour was tight, Sigma Sand arranged night drops and kept the schedule.",
            author: "Faisal K, Horizon Developments, Pathanamthitta"
          },
          {
            quote: "After checking a few options, Sigma Sand had the right quality at a sensible rate.",
            author: "Sreejith V, Varma Associates, Kottayam"
          },
          {
            quote: "For three years now, their licensed river sand has been steady—no surprises.",
            author: "Ajay Menon, Menon Constructions, Trivandrum"
          }
        ]}
      />

      {/* Final CTA */}
      <motion.section
        className="py-20 bg-[#742731] text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order Quality Sand?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for government-approved sand with complete documentation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+917837888666" 
              className="bg-white hover:bg-gray-100 text-[#742731] px-10 py-4 rounded-md font-medium text-lg transition-colors"
            >
              Call: +91 7837 888 666
            </a>
            <a 
              href="https://maps.app.goo.gl/SQR5ssyvra1TBtmu5?g_st=aw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-md font-medium text-lg transition-colors"
            >
              Visit: Vadakottukavu, NH Road, Kallambalam
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;