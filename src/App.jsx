import React from 'react'

const phoneNumber = '+917359462743'
const formattedPhoneNumber = '+91 73594 62743'
const emailAddress = 'texla351@gmail.con'
const products = [
  {
    id: 'floral-personal',
    category: 'Personal scale',
    name: 'Floral Digital Personal Scale',
    image: '/productimage/img1.jpeg',
    details: 'Maximum capacity: 180 kg · Graduation: 50 g',
  },
  {
    id: 'floral-glass',
    category: 'Personal scale',
    name: 'Floral Glass Bathroom Scale',
    image: '/productimage/img2.jpeg',
    details: 'Floral glass design with an easy-to-read digital display.',
  },
  {
    id: 'kitchen-scale',
    category: 'Kitchen scale',
    name: 'Digital Kitchen Scale',
    image: '/productimage/img3.jpeg',
    details: 'Kitchen weighing scale with a digital display and raised platform.',
  },
  {
    id: 'wave-scale',
    category: 'Personal scale',
    name: 'Wave Design Personal Scale',
    image: '/productimage/img4.jpeg',
    details: 'Black platform with a modern wave pattern and digital display.',
  },
  {
    id: 'pocket-scale',
    category: 'Pocket scale',
    name: 'Digital Pocket Scale',
    image: '/productimage/img5.jpeg',
    details: 'Compact design with an illuminated display, tare, units and PCS controls.',
  },
]

function productEmailUrl(product) {
  const subject = `Product enquiry: ${product.name}`
  const body = `Hello Sonalex,\n\nI would like to enquire about the ${product.name}. Please share availability and price.`
  return `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function App() {
  const scrollToProduct = () => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="site-shell">
      <div className="announcement">
        <span>Thoughtful design for everyday living</span>
        <a href={`tel:${phoneNumber}`}>Call us: {formattedPhoneNumber}</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sonalex home">
          <span className="brand-mark">S</span>
          <span><strong>SONALEX</strong><small>Everyday essentials</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#details">Details</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href={`tel:${phoneNumber}`}>Call us <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">A little clarity for every day</p>
            <h1>Let every reading feel <em>simple.</em></h1>
            <p className="hero-text">Meet the Sonalex digital personal weighing scale: an elegant floral glass design with an easy-to-read display and a capacity of up to 180 kg.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={scrollToProduct}>Discover the scale <span>↓</span></button>
              <a className="text-link" href="#details">Explore the details <span>→</span></a>
            </div>
            <div className="hero-proof">
              <span className="proof-icon">✳</span>
              <span><strong>Designed for daily use</strong><small>Simple, clear and easy to use</small></span>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/productimage/img1.jpeg" alt="Sonalex black floral digital weighing scale with a 180 kg maximum capacity" />
          </div>
        </section>

        <section className="ticker" aria-label="Product highlights">
          <span>180 kg maximum capacity</span><i>✳</i>
          <span>50 g graduation</span><i>✳</i>
          <span>Digital display</span><i>✳</i>
          <span>Floral glass design</span>
        </section>

        <section className="product-section" id="product">
          <div className="section-heading">
            <div><p className="eyebrow">The Sonalex collection</p><h2>Find the scale that fits your needs.</h2></div>
            <p>Explore our range of personal, kitchen and pocket scales. Contact us for availability, pricing and product details.</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading={index > 2 ? 'lazy' : 'eager'} />
                </div>
                <div className="product-info">
                  <p className="product-kicker">SONALEX / {product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="product-note">{product.details}</p>
                  <a className="product-enquire" href={productEmailUrl(product)}>Ask about this scale <span>↗</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section" id="details">
          <div className="story-image">
            <img src="/productimage/img2.jpeg" alt="Sonalex floral glass weighing scale shown in a modern home setting" />
          </div>
          <div className="story-copy">
            <p className="eyebrow">A little more detail</p>
            <h2>Simple to use. Lovely to live with.</h2>
            <p>Take a quick reading with a digital display designed to be easy to see. The black floral glass platform pairs practical everyday function with a look that feels considered.</p>
            <div className="story-list">
              <div><span>01</span><strong>Easy-to-read digital display</strong><small>See your reading clearly at a glance.</small></div>
              <div><span>02</span><strong>Up to 180 kg capacity</strong><small>50 g graduation for a clear, detailed reading.</small></div>
              <div><span>03</span><strong>Distinctive floral finish</strong><small>A polished black glass look for your home.</small></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div><p className="eyebrow">We’re here to help</p><h2>Questions?<br /><em>Let’s talk.</em></h2></div>
          <div className="contact-details">
            <p>For product details, availability and orders, get in touch with Sonalex.</p>
            <a className="contact-phone" href={`tel:${phoneNumber}`}>{formattedPhoneNumber}</a>
            <div className="contact-actions">
              <a className="contact-action" href={`sms:${phoneNumber}`}>Send a text message <span>↗</span></a>
              <a className="contact-action" href={`mailto:${emailAddress}`}>Email us <span>↗</span></a>
            </div>
            <p className="contact-line">Tulsi industries near nani mitraii road<br />Surat 395008</p>
            <a className="email-link" href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="Sonalex home">
          <span className="brand-mark">S</span>
          <span><strong>SONALEX</strong><small>Everyday essentials</small></span>
        </a>
        <div className="footer-meta"><span>© 2026 Sonalex</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

export default App
