import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <div className="bg-white">
    
        <p>How we collect, use, and protect your data.</p>
      <section className="py-16 container-px max-w-3xl mx-auto prose prose-gray">
        <p className="text-gray-600 leading-relaxed">
          This privacy policy is a placeholder. Please contact us to request the full privacy policy document.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          For questions about our privacy practices, please visit our{" "}
          <Link to="/contact" className="text-primary font-medium hover:underline">contact page</Link>.
        </p>
      </section>
    </div>
  );
}
