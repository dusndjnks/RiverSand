"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../public/images/sigmasands.webp"; // Place your logo in the public folder

const NAV_LINKS = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "About", to: "/about" },
  { name: "Blogs", to: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

const isActive = (path) => pathname === path;

  return (
    <nav className="w-full z-50 bg-white/50 backdrop-blur-md shadow font-sans fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Sigma Sands Logo"
              className="block"
              height={48}
              width={120}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-[17px] font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.to}
                className={`transition-all duration-200 transform hover:scale-105 ${
                  isActive(link.to)
                    ? "font-semibold"
                    : "text-gray-800"
                }`}
                style={{
                  color: isActive(link.to) ? "#742731" : undefined,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#742731")}
                onMouseLeave={(e) =>
                  !isActive(link.to) &&
                  (e.currentTarget.style.color = "")
                }
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-white rounded-full px-6 py-2 shadow-md font-semibold transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: "#742731" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#4b1e25")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#742731")
              }
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
            style={{ color: "#742731" }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 py-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-[15px] py-2 px-3 rounded-md transition-all transform hover:scale-105 duration-200 ${
                      isActive(link.to) ? "font-semibold" : ""
                    }`}
                    style={{
                      color: isActive(link.to) ? "#742731" : "#111111",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#742731")
                    }
                    onMouseLeave={(e) =>
                      !isActive(link.to) &&
                      (e.currentTarget.style.color = "#111111")
                    }
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Contact Button in Mobile */}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-[15px] py-2 px-4 mt-1 rounded-full font-semibold text-center transition-transform transform hover:scale-105 duration-200"
                  style={{ backgroundColor: "#742731", color: "white" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#4b1e25")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#742731")
                  }
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
