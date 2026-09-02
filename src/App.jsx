import { useState } from "react";
import {
  services,
  team,
  reviews,
  gallery,
  browMenu,
  lashMenu,
} from "./data/studioData";

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "services"],
    ["About", "about"],
    ["Brows", "brows"],
    ["Lashes", "lashes"],
    ["Gallery", "gallery"],
    ["Testimonials", "testimonials"],
    ["Contact", "contact"],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        <span className="brand-mark">A&L</span>
        <span>
          <strong>Arch & Lash</strong>
          <small>Beauty Studio</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav className={open ? "nav open" : "nav"}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Book now
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">BROW • LASH • BEAUTY</p>
        <h1>Beautiful brows.<br />Luminous lashes.</h1>
        <p className="hero-lede">
          Thoughtful brow shaping, lash lifts and bespoke extensions designed
          to make your natural features stand out.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#services">Explore services</a>
          <a className="text-link" href="#about">Discover the studio →</a>
        </div>
      </div>
      <div className="hero-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1772236617396-2f8460293c07?auto=format&fit=crop&w=1400&q=85"
          alt="Beauty professional applying eyelash extensions"
        />
        <div className="hero-badge">
          <span>01</span>
          <strong>Precision<br />beauty</strong>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR SERVICES</p>
          <h2>Signature brow & lash care</h2>
        </div>
        <p>
          From a clean, tailored brow to soft everyday extensions, every
          service is adapted to your face, lifestyle and desired finish.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.name}>
            <span className="service-number">{service.number}</span>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <span className="service-price">{service.price}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1774814305111-8298b8cde459?auto=format&fit=crop&w=1100&q=85"
          alt="Close-up of an eye with defined eyebrow and eyelashes"
        />
      </div>
      <div className="about-copy">
        <p className="eyebrow">WELCOME TO ARCH & LASH</p>
        <h2>A softer kind of beauty studio.</h2>
        <p>
          We believe the best brow and lash work looks like you — only a little
          more polished. Our approach is calm, precise and personal, with
          consultations built into every appointment.
        </p>
        <p>
          Whether you want fluffy brows, a subtle lash lift or a full set of
          extensions, we focus on balance, comfort and beautiful detail.
        </p>
        <a className="text-link" href="#contact">Start with a consultation →</a>
      </div>
    </section>
  );
}

function FeatureStrip() {
  const features = [
    ["01", "Sanitised tools", "Clean, considered and appointment-ready."],
    ["02", "Brow mapping", "Shape guided by your natural proportions."],
    ["03", "Lash styling", "Classic, hybrid and volume looks."],
    ["04", "50+ shades", "Tint options for brows and lashes."],
  ];

  return (
    <section className="feature-strip">
      {features.map(([number, title, body]) => (
        <div key={title} className="feature">
          <span>{number}</span>
          <div>
            <strong>{title}</strong>
            <p>{body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function Team() {
  return (
    <section className="section team-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">MEET THE ARTISTS</p>
          <h2>Small team. Big attention to detail.</h2>
        </div>
      </div>
      <div className="team-grid">
        {team.map((member) => (
          <article className="team-card" key={member.name}>
            <img src={member.image} alt={member.name} />
            <div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MenuList({ title, items, id }) {
  return (
    <section className="menu-section" id={id}>
      <div className="menu-intro">
        <p className="eyebrow">{id === "brows" ? "BROW MENU" : "LASH MENU"}</p>
        <h2>{title}</h2>
      </div>
      <div className="menu-list">
        {items.map(([name, price, description]) => (
          <article className="menu-item" key={name}>
            <div>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <strong>{price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE LOOK</p>
          <h2>Brows, lashes & studio moments</h2>
        </div>
        <p>Use these images as visual placeholders while you build your own portfolio.</p>
      </div>
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <figure className={`gallery-item gallery-${index + 1}`} key={item.image}>
            <img src={item.image} alt={item.alt} />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  return (
    <section className="section testimonial-section" id="testimonials">
      <p className="eyebrow">KIND WORDS</p>
      <blockquote>{review.quote}</blockquote>
      <p className="reviewer">{review.name} <span>· {review.service}</span></p>
      <div className="review-controls">
        <button onClick={() => setActive((active - 1 + reviews.length) % reviews.length)}>←</button>
        <span>{String(active + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
        <button onClick={() => setActive((active + 1) % reviews.length)}>→</button>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="eyebrow">COME SAY HELLO</p>
        <h2>Ready for your next brow or lash appointment?</h2>
        <p className="contact-copy">
          Replace these details with your real studio information when you're
          ready to turn the practice project into a real business site.
        </p>
      </div>
      <div className="contact-details">
        <div><span>Studio</span><strong>18 Willow Lane, New York</strong></div>
        <div><span>Phone</span><strong>+1 212 555 0148</strong></div>
        <div><span>Email</span><strong>hello@archandlash.example</strong></div>
        <a className="button button-light" href="mailto:hello@archandlash.example">Book by email</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Arch & Lash</strong>
        <span>Brows • Lashes • Extensions</span>
      </div>
      <p>Practice project — replace branding, images and contact details with your own.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <FeatureStrip />
        <Team />
        <MenuList id="brows" title="Brow services" items={browMenu} />
        <MenuList id="lashes" title="Lash services" items={lashMenu} />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
