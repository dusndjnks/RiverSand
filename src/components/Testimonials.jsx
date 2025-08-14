import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    name: "Ajay Menon",
    company: "Menon Constructions",
    location: "Trivandrum",
    review: "Golden Sands has been our exclusive sand supplier for 3 years. Their river sand quality is unmatched in South Kerala."
  },
  {
    name: "Deepa Raj",
    company: "Raj Builders",
    location: "Kollam",
    review: "The only supplier that provides complete documentation with each delivery. Saved us countless compliance headaches."
  },
  {
    name: "Faisal K",
    company: "Horizon Developments",
    location: "Pathanamthitta",
    review: "When we had an urgent project deadline, Golden Sands arranged night deliveries to keep us on schedule."
  },
  {
    name: "Sreejith V",
    company: "Varma Associates",
    location: "Kottayam",
    review: "Compared to 5 other suppliers, Golden Sands offered the best combination of price and quality for our township project."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#f9f4f0] font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4b1e25] mb-4">
            What Builders Say About Us
          </h2>
          <p className="text-[#2f2f2f]/80 max-w-2xl mx-auto">
            Trusted by construction firms across Kerala for quality and reliability
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2 }
          }}
          loop={true}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-[#eae2d6]/20 hover:shadow-md transition-all h-full">
                <svg 
                  className="w-8 h-8 text-[#742731] mb-4 opacity-70" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#2f2f2f] text-lg mb-6">
                  {item.review}
                </p>
                <div>
                  <h3 className="font-semibold text-[#4b1e25]">
                    {item.name}
                  </h3>
                  <p className="text-[#2f2f2f]/70 text-sm">{item.company}, {item.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;