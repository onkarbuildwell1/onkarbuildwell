
export default function HomePage() {
  const products = [
    { grade: "M10", price: "₹4,200", description: "Concrete for suitable foundation and levelling work." },
    { grade: "M25", price: "₹4,850", description: "Concrete for projects specified to use M25." },
    { grade: "M30", price: "₹5,000", description: "Higher-strength concrete for specified projects." }
  ];

  return (
    <main>
      <header>
        <h2>ONKAR BUILDWELL</h2>
        <nav>
          <a href="#home">Home</a>{" | "}
          <a href="#products">Products & Prices</a>{" | "}
          <a href="#about">About Us</a>{" | "}
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home">
        <h1>Strong Foundations. Built on Trust.</h1>
        <p>
          Ready Mix Concrete for construction projects in Amritsar,
          Batala and nearby areas of Punjab.
        </p>
        <a href="#products">Explore Concrete Grades</a>
      </section>

      <section id="products">
        <h2>Our Concrete Grades</h2>
        {products.map((product) => (
          <article key={product.grade}>
            <h3>{product.grade} Concrete</h3>
            <p>{product.description}</p>
            <p>Indicative price: {product.price} per m³</p>
          </article>
        ))}
        <p>
          Please confirm current prices, GST treatment and delivery
          charges with Onkar Buildwell before ordering.
        </p>
      </section>

      <section id="about">
        <h2>About Onkar Buildwell</h2>
        <p>
          We help construction customers enquire about concrete grades,
          quotations and delivery availability for their projects.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Onkar Buildwell</h2>
        <p>Tell us your required concrete grade, quantity and site location.</p>
        <a href="mailto:info@example.com?subject=Concrete%20Quotation">
          Request a Quotation by Email
        </a>
        <p>Replace the example email with your real business email.</p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Onkar Buildwell</p>
      </footer>
    </main>
  );
}

