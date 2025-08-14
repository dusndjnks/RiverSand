'use client';

import { useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    place: "",
    message: "",
  });

  const [show, setShow] = useState(true);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbwWSybaEuvpwpGLEvbNmXi8d4MLupSGJk-uJ3pwIUHWLo6gudAjOUIKE0Dy4_SB7730CA/exec";

      const formData = new FormData();
      for (const [key, value] of Object.entries(form)) {
        formData.append(key, value);
      }

      await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });

      toast.success("Form submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        district: "",
        place: "",
        message: "",
      });
      setTimeout(() => setShow(false), 2000);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission failed. Please try again.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#00000080] z-[100] flex items-center justify-center px-4 py-10">
      <Toaster position="top-right" toastOptions={{
        style: {
          background: '#742731',
          color: '#f9f4f0',
        },
      }} />
      
      <div
        ref={formRef}
        className="bg-[#f9f4f0] rounded-lg shadow-xl w-full max-w-xl relative p-6 font-sans border border-[#eae2d6]"
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-4 text-[#2f2f2f] hover:text-[#742731] text-2xl font-bold transition-colors"
          type="button"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center text-[#742731] mb-4">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 border border-[#eae2d6] rounded-md text-[#2f2f2f] bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#742731]/50"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 border border-[#eae2d6] rounded-md text-[#2f2f2f] bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#742731]/50"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="p-3 border border-[#eae2d6] rounded-md text-[#2f2f2f] bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#742731]/50"
            />
            <select
              name="district"
              value={form.district}
              onChange={handleChange}
              required
              className="p-3 border border-[#eae2d6] rounded-md text-[#2f2f2f] bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#742731]/50"
            >
              <option value="">Select District</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Kollam">Kollam</option>
              <option value="Pathanamthitta">Pathanamthitta</option>
              <option value="Alappuzha">Alappuzha</option>
              <option value="Kottayam">Kottayam</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <input
            type="text"
            name="place"
            value={form.place}
            onChange={handleChange}
            placeholder="Place"
            required
            className="p-3 border border-[#eae2d6] rounded-md text-[#2f2f2f] bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#742731]/50"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your Message"
            required
            className="p-3 border border-[#eae2d6] rounded-md text-[#2f2f2f] bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#742731]/50"
          />

          <button
            type="submit"
            className="w-full bg-[#742731] hover:bg-[#5a1e26] text-[#f9f4f0] py-3 rounded-md font-medium transition-colors duration-200 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;