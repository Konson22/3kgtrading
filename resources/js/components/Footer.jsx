import { Link } from "react-router-dom";
import { footer, nav, contact } from "@/data/site";
import services from "@/data/services";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const quickLinks = [
  { to: "/", label: nav.home },
  { to: "/about", label: nav.about },
  { to: "/services", label: nav.services },
  { to: "/projects", label: nav.projects },
  { to: "/clients-partners", label: nav.clientsPartners },
  { to: "/careers", label: nav.careers },
  { to: "/news", label: nav.news },
  { to: "/contact", label: nav.contact },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="border-t border-neutral-200 bg-neutral-100">
        <div className="container-px mx-auto max-w-6xl py-12 lg:py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-800">
                {footer.quickLinks}
              </h3>
              <ul className="mt-4 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-neutral-600 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-800">
                {footer.ourServices}
              </h3>
              <ul className="mt-4 space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="text-sm text-neutral-600 transition-colors hover:text-primary"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office & Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-800">
                {footer.officeLocation}
              </h3>
              <p className="mt-4 text-sm text-neutral-600">{contact.address}</p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-800">
                {footer.contactInfo}
              </h3>
              <ul className="mt-4 space-y-1 text-sm text-neutral-600">
                {contact.emails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className="hover:text-primary">
                      {e}
                    </a>
                  </li>
                ))}
                {contact.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-primary">
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Legal */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-800">
                {footer.socialMedia}
              </h3>
              <p className="mt-4 text-sm text-neutral-600">
                Connect with us — links to be added.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>
                  <Link to="/privacy" className="text-neutral-600 hover:text-primary">
                    {footer.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-neutral-600 hover:text-primary">
                    {footer.termsConditions}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-primary py-6">
        <div className="container-px relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <button
            type="button"
            onClick={scrollToTop}
            className="absolute left-4 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0 order-first sm:order-none flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-primary text-white hover:bg-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            aria-label="Back to top"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
          <p className="text-center text-sm text-white flex-1">
            © {new Date().getFullYear()} 3K General Trading Co. Ltd. All rights reserved.
          </p>
          <div className="sm:w-10" aria-hidden />
        </div>
      </div>
    </footer>
  );
}
