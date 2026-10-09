"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  { grade: "M10", price: "₹4,200", use: "Levelling, flooring and non-structural work" },
  { grade: "M25", price: "₹4,850", use: "Residential and general structural work" },
  { grade: "M30", price: "₹5,000", use: "Higher-strength structural concrete" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    grade: "M25",
    quantity: "",
    message: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "RMC Enquiry - Onkar Buildwell",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Site location: ${form.location}`,
      `Concrete grade: ${form.grade}`,
      `Quantity: ${form.quantity} m³`,
      `Message: ${form.message || "Not specified"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/917087813333?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand" aria-label="Onkar Buildwell home">
            <Image
              src="/logo.png"
              alt="Onkar Buildwell logo"
              width={64}
              height={64}
              priority
              className="brand-logo"
            />
            <span className="brand-copy">
              <strong>ONKAR BUILDWELL</strong>
              <small>Building a Stronger Tomorrow</small>
            </span>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Our Concrete</a>
            <a href="#enquiry" onClick={() => setMenuOpen(false)}>Get a Quote</a>
            <a className="nav-call" href="tel:+917087813333">Call Us</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="eyebrow">ONKAR BUILDWELL · READY MIX CONCRETE</p>
          <h1>Building stronger foundations for a better tomorrow.</h1>
          <p className="hero-description">
            Your concrete supply partner for residential, commercial and
            infrastructure projects in Amritsar, Batala and nearby areas.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#enquiry">Request a Quote</a>
            <a className="button button-outline" href="tel:+917087813333">Call 70878 13333</a>
          </div>
          <div className="hero-note">
            <span className="hero-dot" />
            Ready Mix Concrete · Multiple Grades · Project Enquiries Welcome
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-grid">
          <div><strong>RMC</strong><span>Ready Mix Concrete</span></div>
          <div><strong>M10–M30</strong><span>Concrete grades listed</span></div>
          <div><strong>Punjab</strong><span>Amritsar, Batala & nearby</span></div>
          <div><strong>Direct</strong><span>Contact for project quotes</span></div>
        </div>
      </section>

      <section className="section section-light" id="about">
        <div className="shell about-grid">
          <div>
            <p className="eyebrow eyebrow-dark">ABOUT ONKAR BUILDWELL</p>
            <h2>Concrete solutions for construction projects.</h2>
          </div>
          <div className="about-copy">
            <p>
              Onkar Buildwell supplies ready mix concrete for construction
              projects. We help customers enquire about concrete grades,
              required quantities and delivery to their project location.
            </p>
            <p>
              Tell us your grade, quantity and site location so our team can
              discuss your requirements and provide a project-specific quote.
            </p>
            <a className="text-link" href="#enquiry">Discuss your project <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark">OUR CONCRETE</p>
              <h2>Explore concrete grades</h2>
              <p className="section-intro">
                Indicative prices are shown below. Confirm the final rate,
                GST treatment, transport and availability with our team.
              </p>
            </div>
            <a className="text-link desktop-link" href="#enquiry">Ask for a quote <span>→</span></a>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.grade}>
                <div className="product-top">
                  <span className="product-label">READY MIX CONCRETE</span>
                  <span className="product-mark">OB</span>
                </div>
                <h3>{product.grade}</h3>
                <p className="product-use">{product.use}</p>
                <div className="product-price">
                  <strong>{product.price}</strong>
                  <span>per m³ · indicative</span>
                </div>
                <a
                  className="product-link"
                  href="#enquiry"
                  onClick={() => setForm((current) => ({ ...current, grade: product.grade }))}
                >
                  Enquire about {product.grade} <span>→</span>
                </a>
              </article>
            ))}
          </div>
          <p className="price-disclaimer">
            Prices are indicative and subject to confirmation. Concrete
            specifications should be selected to suit the project design.
          </p>
        </div>
      </section>

      <section className="section enquiry-section" id="enquiry">
        <div className="shell enquiry-grid">
          <div className="enquiry-copy">
            <p className="eyebrow">LET’S BUILD TOGETHER</p>
            <h2>Tell us about your project.</h2>
            <p>
              Share your concrete grade, quantity and delivery location.
              Submit the form to open WhatsApp with your enquiry details.
            </p>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-icon">☎</span>
                <div><small>Call our team</small><a href="tel:+917087813333">70878 13333</a></div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉</span>
                <div><small>Email</small><a href="mailto:onkarbuildwell1@gmail.com">onkarbuildwell1@gmail.com</a></div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⌖</span>
                <div><small>Service area</small><strong>Amritsar, Batala & nearby Punjab areas</strong></div>
              </div>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <h3>Request a concrete quote</h3>
            <p className="form-intro">Enter your details and project requirements.</p>

            <label htmlFor="customer-name">Your name *</label>
            <input
              id="customer-name"
              name="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Enter your full name"
            />

            <label htmlFor="customer-phone">Mobile number *</label>
            <input
              id="customer-phone"
              name="phone"
              required
              type="tel"
              autoComplete="tel"
              pattern="[0-9+\-\s]{10,15}"
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              placeholder="Enter your phone number"
            />

            <label htmlFor="site-location">Project/site location *</label>
            <input
              id="site-location"
              name="location"
              required
              value={form.location}
              onChange={(event) => setForm({ ...form, location: event.target.value })}
              placeholder="Village, city or site address"
            />

            <div className="form-row">
              <div>
                <label htmlFor="concrete-grade">Concrete grade *</label>
                <select
                  id="concrete-grade"
                  name="grade"
                  value={form.grade}
                  onChange={(event) => setForm({ ...form, grade: event.target.value })}
                >
                  <option value="M10">M10</option>
                  <option value="M25">M25</option>
                  <option value="M30">M30</option>
                  <option value="Other">Other / need advice</option>
                </select>
              </div>
              <div>
                <label htmlFor="quantity">Quantity (m³) *</label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  step="0.5"
                  required
                  value={form.quantity}
                  onChange={(event) => setForm({ ...form, quantity: event.target.value })}
                  placeholder="e.g. 20"
                />
              </div>
            </div>

            <label htmlFor="project-message">Additional details</label>
            <textarea
              id="project-message"
              name="message"
              rows={3}
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              placeholder="Delivery date or other requirements"
            />

            <button className="button button-gold submit-button" type="submit">
              Continue to WhatsApp <span>→</span>
            </button>
            {submitted && (
              <p className="form-success" role="status">
                WhatsApp should open with your enquiry. Send the message there to contact us.
              </p>
            )}
            <p className="form-privacy">
              Your details are placed in a WhatsApp message for you to review and send.
              This form does not save enquiries to a database.
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-main">
          <Link href="/" className="footer-brand">
            <Image src="/logo.png" alt="Onkar Buildwell" width={48} height={48} />
            <span><strong>ONKAR BUILDWELL</strong><small>Building a Stronger Tomorrow</small></span>
          </Link>
          <p>Ready Mix Concrete for your construction requirements.</p>
          <a href="tel:+917087813333">70878 13333</a>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Onkar Buildwell. All rights reserved.</span>
          <a href="mailto:onkarbuildwell1@gmail.com">Contact us</a>
        </div>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/917087813333" target="_blank" rel="noreferrer" aria-label="Contact Onkar Buildwell on WhatsApp">
        WhatsApp
      </a>
    </main>
  );
}
