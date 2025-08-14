import { motion } from "framer-motion";

const ServicesSection = () => {
  const cardVariants = {
    hover: {
      y: -6,
      scale: 1.02,
      boxShadow: "0 12px 30px -5px rgba(0, 0, 0, 0.15)",
      transition: { type: "spring", stiffness: 300, damping: 12 }
    }
  };

  const iconContainerVariants = {
    hover: {
      backgroundColor: "rgba(116, 39, 49, 0.15)", // primary color with opacity
      scale: 1.1,
      transition: { duration: 0.4 }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, 10, -8, 4, 0],
      scale: [1, 1.15, 1.05, 1.1, 1],
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const svgVariants = {
    hover: {
      scale: 1.3,
      strokeWidth: 1.5,
      transition: { duration: 0.4 }
    }
  };

   const services = [
    { title: "Premium Materials", description: "Superior construction supplies and quality building solutions.", icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />), color: "primary" },
    { title: "Expert Consultation", description: "Strategic guidance to source and implement materials.", icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />), color: "secondary" },
    { title: "Logistics Excellence", description: "Precision delivery network ensuring timely transport.", icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />), color: "primary" },
    { title: "Global Distribution", description: "Worldwide network providing certified materials.", icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />), color: "secondary" },
    { title: "Equipment Solutions", description: "Fleet of industry-leading machinery for flexible rental.", icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />), color: "primary" },
    { title: "Continued Support", description: "End-to-end project assistance with dedicated teams.", icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />), color: "secondary" }
  ];

  return (
    <motion.section 
      className="relative py-16 bg-gradient-to-b from-[#f9f4f0] to-white"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }}
    >
      {/* Animated HR */}
      <motion.div 
        className="w-full h-0.5 bg-gradient-to-r from-[#742731] to-[#a26769] mb-14"
        initial={{ scaleX: 0 }} 
        whileInView={{ scaleX: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }} 
        viewport={{ once: true }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-14" 
          initial={{ y: -20 }} 
          whileInView={{ y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-[#2f2f2f] mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#742731] to-[#a26769]">
              What We Do
            </span>
          </h2>
          <motion.p 
            className="text-lg text-[#2f2f2f]/80 max-w-2xl mx-auto" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
          >
            Comprehensive construction services tailored to your project needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-md border border-[#eae2d6] p-7"
              variants={cardVariants} 
              whileHover="hover" 
              transition={{ type: "spring" }}
            >
              <motion.div 
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 ${service.color === 'primary' ? 'bg-[#742731]/10' : 'bg-[#a26769]/10'}`} 
                variants={iconContainerVariants}
              >
                <motion.div variants={iconVariants}>
                  <motion.svg 
                    className={`w-7 h-7 ${service.color === 'primary' ? 'text-[#742731]' : 'text-[#a26769]'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    variants={svgVariants}
                  >
                    {service.icon}
                  </motion.svg>
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-semibold text-[#2f2f2f] mb-2">{service.title}</h3>
              <p className="text-[#2f2f2f]/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;