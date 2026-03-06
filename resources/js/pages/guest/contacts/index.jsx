import PageSecondaryHero from "../../../components/PageSecondaryHero";


export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageSecondaryHero
        title="Contact Us"
        eyebrow="Get in Touch"
      >
        <p>Reach out to 3K General Trading Ltd for quality services and products.</p>
      </PageSecondaryHero>
      <section className="py-16 container-px max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Office Location</h2>
            <address className="text-gray-600 not-italic space-y-2">
              <p className="font-medium text-primary">3K General Trading Ltd</p>
              <p>Malakia Plaza, Office No 18</p>
              <p>Plot No 10, Block M, Hai Neem</p>
              <p>Juba, South Sudan</p>
            </address>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <a href="tel:+211929986001" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +211 929 986 001
              </a>
              <a href="tel:+211929986002" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +211 929 986 002
              </a>
              <a href="tel:+211989986003" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +211 989 986 003
              </a>
              <a href="mailto:info@3kgtrading.com" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@3kgtrading.com
              </a>
              <a href="https://www.3kgtrading.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                www.3kgtrading.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
