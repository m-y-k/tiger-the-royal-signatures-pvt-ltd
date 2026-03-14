import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: 'Our Story — Tiger The Royal Signatures',
  description: 'Discover the heritage and craftsmanship behind Tiger The Royal Signatures. Where royal tradition meets modern elegance in Pakistani luxury fashion.',
};

const values = [
  { icon: '✦', title: 'Royal Craftsmanship', desc: 'Every stitch is a testament to generations of artisanal expertise — handcrafted with precision and passion.' },
  { icon: '◈', title: 'Heritage Fabrics', desc: 'We source the finest organza, silk, and chiffon from trusted mills, ensuring every piece feels as luxurious as it looks.' },
  { icon: '❖', title: 'Modern Elegance', desc: 'Our designs bridge the beauty of tradition with contemporary silhouettes — for the woman who owns her style.' },
  { icon: '◇', title: 'Sustainable Luxury', desc: 'Conscious fashion without compromise. We believe in ethical sourcing, fair wages, and responsible production.' },
];

const timeline = [
  { year: 'The Beginning', desc: 'Born from a passion for preserving Pakistan\'s rich textile heritage while reimagining it for the modern world.' },
  { year: 'The Craft', desc: 'We partnered with master artisans across Punjab and Sindh, reviving centuries-old embroidery techniques.' },
  { year: 'The Vision', desc: 'Our collections began telling stories — each piece a narrative of royal courts, Mughal gardens, and timeless elegance.' },
  { year: 'Today', desc: 'Tiger The Royal Signatures serves fashion connoisseurs worldwide, bringing Pakistani luxury to a global stage.' },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Image src="/images/hero-1.png" alt="Our Heritage" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className="divider-ornament" style={{ color: '#C8A96E' }}>✦</div>
          <h1 className={styles.heroTitle}>Our Story</h1>
          <p className={styles.heroSubtitle}>Where royal heritage meets modern elegance</p>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionInner}>
            <div className={styles.missionText}>
              <span className={styles.tag}>Our Mission</span>
              <h2 className={styles.missionTitle}>Crafting Signatures of Royalty</h2>
              <p className={styles.missionDesc}>
                At Tiger The Royal Signatures, we don&apos;t just create clothing — we craft legacies.
                Every thread is chosen with intention, every embroidery tells a story of centuries-old
                artisanal traditions passed down through generations of master craftsmen.
              </p>
              <p className={styles.missionDesc}>
                We believe that true luxury lies not in excess, but in the quiet confidence of
                impeccable craftsmanship. Our pieces are designed for those who understand that
                elegance is a language spoken through fabric, color, and form.
              </p>
            </div>
            <div className={styles.missionImage}>
              <Image src="/images/product-2.png" alt="Craftsmanship" fill sizes="(max-width: 768px) 100vw, 45vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">What We Stand For</h2>
            <div className="divider-gold"></div>
          </div>
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timeline}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Our Journey</h2>
            <div className="divider-gold"></div>
          </div>
          <div className={styles.timelineTrack}>
            {timeline.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineYear}>{item.year}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.ctaTitle}>Ready to Wear Your Crown?</h2>
          <p className={styles.ctaDesc}>Explore our latest collections and find your signature piece.</p>
          <a href="/collections" className={styles.ctaBtn}>Explore Collections →</a>
        </div>
      </section>
    </div>
  );
}
