import { Link } from "react-router-dom";
import Brand from "./Brand";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function NavbarBottom() {
  return (
    <nav className="hidden lg:flex relative container-px max-w-6xl mx-auto items-center justify-between lg:py-2 py-0">
      <Brand />
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-gray-700 hover:text-primary font-medium transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        to="/request-service"
        className="inline-flex items-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm"
      >
        Request our service
      </Link>
    </nav>
  );
}
