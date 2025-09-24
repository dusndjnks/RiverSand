import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react"; // social icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">Sigmasands</h3>
          <p className="text-gray-400 mb-4">
            Premium sand supplier since 2005, delivering high-quality sand for
            construction and landscaping across regions with reliability and
            trust.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/goldensands_bysigma/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1CeQJELWy9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:info@goldensandsbysigma@gmail.com"
              className="text-gray-400 hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-400 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-400 hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <address className="not-italic text-gray-400 space-y-2">
            <p>
              <a
                href="https://maps.app.goo.gl/1Mr3mBbCUoSs6cE96"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                PRRC+859 Karavaram, Kerala
              </a>
            </p>
            <p className="flex flex-col">
              <a href="tel:7837888666" className="hover:text-white">
                Phone: 7837 888 666
              </a>
              <a href="tel:9447745440" className="hover:text-white">
                Phone: 9447 745 440
              </a>
              <a href="tel:7307888666" className="hover:text-white">
                Phone: 7307 888 666
              </a>
            </p>
            <p>
              <a
                href="mailto:goldensandsbysigma@gmail.com"
                className="hover:text-white"
              >
                goldensandsbysigma@gmail.com
              </a>
            </p>
          </address>
        </div>

        {/* Google Map Embed */}
        <div>
          <h4 className="font-semibold mb-3">Location</h4>
          <div className="w-full h-48 md:h-32 lg:h-40 overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.4835209235!2d76.8202561!3d8.7404926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e9eb6e89e769%3A0x69d4799f07e074b6!2sSigma%20sand!5e0!3m2!1sen!2sin!4v1758681830614!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-4 space-y-1">
        <p>© 2025 Sigmasands. All rights reserved.</p>
        <a
          href="https://divegrid.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Developed by <span className="text-white">DiveGrid*</span>
          </p>
        </a>
      </div>
    </footer>
  );
}
