import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarTop from "./navbar-top";
import NavbarBottom from "./navbar-bottom";
import NavbarBottomMobile from "./navbar-bottom-mobile";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary text-white shadow-md">
      <NavbarTop />
      <div className="bg-white border-t p-0 border-gray-200">
        <NavbarBottom />
        <NavbarBottomMobile open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}