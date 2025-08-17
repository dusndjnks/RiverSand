import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const WhyChooseUs = () => {
  const [showForm, setShowForm] = useState(false);

  const whyChooseUsItems = [
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>),
      title: "Certified Quality",
      description: "Government-approved materials meeting all industry standards"
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
      title: "On-Time Delivery",
      description: "Guaranteed logistics with real-time tracking"
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
      title: "Full Documentation",
      description: "Complete legal paperwork with every shipment"
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>),
      title: "Competitive Pricing",
      description: "Best market rates with volume discounts"
    }
  ];

  return (
    <motion.section
      className="bg-[#2f2f2f] py-20 font-sans"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-5/12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f9f4f0] mb-6">
              Why <span className="text-[#742731]">Choose Our</span> Sand
            </h2>
            <p className="text-[#eae2d6] mb-8">
              Trusted by construction firms and contractors across Kerala for premium quality and reliable service.
            </p>

            {showForm && <ContactForm />}

            {!showForm && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowForm(true)}
                className="bg-[#742731] hover:bg-[#4b1e25] text-[#f9f4f0] px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
              >
                Request Quote
              </motion.button>
            )}
          </div>

          <div className="md:w-7/12 space-y-6 ">
            {whyChooseUsItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex items-start p-5 bg-[#2f2f2f] hover:bg-[#742731] rounded-xl transition-colors border border-[#742731] hover:border-[#f0c27b]/30 shadow-md"
              >
                <div className="bg-[#742731]/10 p-2 rounded-lg mr-5 text-[#f0c27b]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#f9f4f0] mb-1">{item.title}</h3>
                  <p className="text-[#eae2d6]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;