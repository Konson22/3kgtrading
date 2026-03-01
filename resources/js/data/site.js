/**
 * 3K General Trading – Site copy and config (from README)
 */
export const companyName = "3K General Trading Co. Ltd";
export const tagline = "Delivering Integrated Construction, Financial & Property Solutions in South Sudan";

/**
 * Hero slider slides: image, eyebrow, headline, ctaPrimary, ctaSecondary
 */
export const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    eyebrow: companyName,
    headline: "Delivering Integrated Construction, Financial & Property Solutions in South Sudan",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "View Our Projects",
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
    eyebrow: companyName,
    headline: "Trusted Partner for Government, NGOs & Private Sector Across South Sudan",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "View Our Projects",
  },
  {
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80",
    eyebrow: companyName,
    headline: "Construction, Financial Management & Property Solutions",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "View Our Projects",
  },
];

export const aboutSummary = {
  title: "Who We Are",
  body: "3K General Trading Co. Ltd is a fully registered and compliant multi-service company based in Juba, South Sudan. We specialize in construction, financial management, property management, and business consultancy services.",
  closing:
    "Our commitment to professionalism, accountability, and quality delivery has made us a reliable partner for both public and private sector clients.",
};

export const whyChooseUs = [
  "Proven experience across multiple sectors",
  "Strong compliance and governance standards",
  "Dedicated professional team",
  "Commitment to quality and timely delivery",
  "Deep understanding of local market conditions",
];

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Completed Projects" },
  { value: "30+", label: "Skilled Professionals" },
  { value: "100+", label: "Satisfied Clients" },
];

export const ctaSection = {
  title: "Ready to work with a reliable partner?",
  buttonText: "Contact Us Today",
};

export const nav = {
  home: "Home",
  about: "About Us",
  services: "Services",
  projects: "Projects",
  clientsPartners: "Clients & Partners",
  careers: "Careers",
  news: "News & Updates",
  contact: "Contact Us",
  downloadProfile: "Download Company Profile",
};

export const serviceSlugs = {
  financialManagement: "financial-management",
  generalConstruction: "general-construction",
  propertyRealEstate: "property-real-estate-management",
  smallBusinessConsultancy: "small-business-consultancy",
};

export const footer = {
  quickLinks: "Quick Links",
  ourServices: "Our Services",
  officeLocation: "Office Location",
  contactInfo: "Contact Information",
  socialMedia: "Social Media",
  privacyPolicy: "Privacy Policy",
  termsConditions: "Terms & Conditions",
};

export const contact = {
  address:
    "Malakia Plaza. Office No 18. 4th Floor. Plot No 10. 3rd. Class, Block M. Hai Neem. Juba South Sudan.",
  phones: [
    "+211 (0) 929 986001",
    "+211 (0) 929 986002",
    "+211 (0) 929 986003",
    "+211 (0) 929 986004",
  ],
  emails: ["info@3kgtrading.com", "trading3kgroup@gmail.com"],
  // Primary (for navbar / single-line display)
  get email() {
    return this.emails[0];
  },
  get phone() {
    return this.phones[0];
  },
};
