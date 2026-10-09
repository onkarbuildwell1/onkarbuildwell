
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#enquiry" }
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a
          className="brand"
          href="#home"
          aria-label="Onkar Buildwell home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Onkar Buildwell — Building a Stronger Tomorrow"
            width={64}
            height={64}
            priority
            className="brand-logo"
          />

          <span className="brand-name">
            <strong>ONKAR BUILDWELL</strong>
            <small>READY MIX CONCRETE & CONSTRUCTION</small>
          </span>
        </a>

        <button
          className="mobile-menu"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={menuOpen ? "main-nav open" : "main-nav"}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            className="header-cta"
            href="#enquiry"
            onClick={() => setMenuOpen(false)}
          >
            Request a Quote
            <ArrowUpRight size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
