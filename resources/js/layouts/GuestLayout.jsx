import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { Footer } from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
