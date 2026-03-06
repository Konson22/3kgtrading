import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-px max-w-6xl mx-auto py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">3K General Trading Ltd</h3>
            <p className="text-white/90 text-sm mb-2">Accountability, Transparency & Compliance</p>
            <p className="text-white/90 font-semibold text-sm">"Quality and Reliability"</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
                { to: "/request-service", label: "Request Service" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/90 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="text-white/90 text-sm not-italic space-y-1">
              <p>Malakia Plaza, Office No 18</p>
              <p>Plot No 10, Block M, Hai Neem</p>
              <p>Juba, South Sudan</p>
              <a href="tel:+211929986001" className="block mt-2 hover:text-white">+211 929 986 001</a>
              <a href="mailto:info@3kgtrading.com" className="block hover:text-white">info@3kgtrading.com</a>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80 text-sm">
          <p>© {new Date().getFullYear()} 3K General Trading Ltd. All rights reserved.</p>
          <a href="https://www.3kgtrading.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            www.3kgtrading.com
          </a>
        </div>
      </div>
    </footer>
  );
}
