"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Truck, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    location: "",
    message: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const districts = [
    "Thiruvananthapuram",
    "Kollam",
    "Pathanamthitta",
    "Alappuzha",
    "Kottayam",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwWSybaEuvpwpGLEvbNmXi8d4MLupSGJk-uJ3pwIUHWLo6gudAjOUIKE0Dy4_SB7730CA/exec";
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        district: "",
        location: "",
        message: "",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error!", error.message);
      } else {
        console.error("Error!", error);
      }
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-[#f8e5e7]">
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative"
            >
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Form Submitted Successfully!
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Thank you for contacting us. We&apos;ll get back to you shortly.
                </p>
                <div className="flex justify-center">
                  <Link
                  href="/"
                    onClick={closeModal}
                    className="px-4 py-2 bg-[#742731] text-white rounded-lg hover:bg-[#5a1e26] transition-colors"
                  >
                    Go to Homepage
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* White header space */}
      <div className="bg-white h-20 w-full"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#742731] mb-3">
            Get In Touch With Us
          </h1>
          <div className="w-20 h-1.5 bg-[#742731] mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">
            We&apos;re ready to deliver quality sand to your construction site
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Head Office",
              icon: <MapPin size={20} />,
              location: "Venmpayam",
              phone: "+91 78378 88666",
              email: "goldensandsbysigma@gmail.com",
              locationLink: "https://maps.app.goo.gl/WB5pZHLyvd63xr1T8",
              emailLink: "mailto:goldensandsbysigma@gmail.com",
              phoneLink: "tel:+917837888666",
            },
            {
              title: "Kollam Depot",
              icon: <Truck size={20} />,
              location: "Kallambalam",
              phone: "+91 94477 45440",
              email: "goldensandsbysigma@gmail.com",
              locationLink: "https://maps.app.goo.gl/SQR5ssyvra1TBtmu5?g_st=aw",
              emailLink: "mailto:goldensandsbysigma@gmail.com",
              phoneLink: "tel:+919447745440",
            },
          ].map((branch, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-xl shadow-md border border-[#742731]/20 h-full"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#742731] p-2 rounded-full mr-3 text-white">
                  {branch.icon}
                </div>
                <h3 className="text-xl font-bold text-[#742731]">{branch.title}</h3>
              </div>
              <div className="space-y-3 pl-11">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#f8e5e7] rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <MapPin className="text-[#742731]" size={14} />
                  </div>
                  <a
                    href={branch.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:underline"
                  >
                    {branch.location}
                  </a>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#f8e5e7] rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <Phone className="text-[#742731]" size={14} />
                  </div>
                  <a href={branch.phoneLink} className="text-gray-700 hover:underline">
                    {branch.phone}
                  </a>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#f8e5e7] rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <Mail className="text-[#742731]" size={14} />
                  </div>
                  <a href={branch.emailLink} className="text-gray-700 hover:underline">
                    {branch.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 border border-[#742731]/20"
        >
          <h2 className="text-2xl font-bold text-[#742731] mb-6 text-center">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-[#742731]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] bg-gray-50 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-[#742731]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] bg-gray-50 text-sm"
                  required
                />
              </div>
            </div>

            {/* Phone & District */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-[#742731]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] bg-gray-50 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                  District <span className="text-[#742731]">*</span>
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] bg-gray-50 text-sm text-black"
                  required
                >
                  <option value="">Select District</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Specific Location <span className="text-[#742731]">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] bg-gray-50 text-sm"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message <span className="text-[#742731]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] bg-gray-50 text-sm text-black"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#742731] text-white py-3 rounded-lg font-semibold hover:bg-[#5a1e26] transition-colors shadow-sm text-sm"
              >
                Submit Your Request
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
