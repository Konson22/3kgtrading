import React from "react";
import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <div className="bg-white">
     
        <p>Terms and conditions for using our services.</p>
      <section className="py-16 container-px max-w-3xl mx-auto prose prose-gray">
        <p className="text-gray-600 leading-relaxed">
          This terms of service document is a placeholder. Please contact us to request the full terms document.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          For questions about our terms, please visit our{" "}
          <Link to="/contact" className="text-primary font-medium hover:underline">contact page</Link>.
        </p>
      </section>
    </div>
  );
}
