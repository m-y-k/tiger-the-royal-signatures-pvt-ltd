'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './page.module.css';

/* ── Data ── */
const heroSlides = [
  { image: '/images/hero-1.png', title: 'The Royal', subtitle: 'Collection 2026', cta: 'Explore Now' },
  { image: '/images/hero-2.png', title: 'Bridal', subtitle: 'Couture', cta: 'View Bridals' },
  { image: '/images/hero-3.png', title: 'Eid', subtitle: 'Festive Edit', cta: 'Shop Eid' },
];

const categories = [
  { name: 'Unstitched', image: '/images/category-unstitched.png', href: '/collections/unstitched', tall: true },
  { name: 'Kids', image: '/images/category-kids.png', href: '/collections/kids' },
  { name: 'Jewelry', image: '/images/product-4.png', href: '/collections/jewelry' },
  { name: 'Luxury Formals', image: '/images/product-3.png', href: '/collections/formals' },
  { name: 'Perfumes', image: '/images/product-1.png', href: '/collections/perfumes' },
];

const products = [
  { name: '3 Piece Embroidered Organza Suit', price: 42990, image: '/images/product-1.png', badge: 'NEW' },
  { name: 'Embroidered Raw Silk Ensemble', price: 56900, image: '/images/product-2.png', badge: 'NEW' },
  { name: 'Royal Burgundy Formal Suit', price: 38500, image: '/images/product-3.png', badge: null },
  { name: 'Ivory Chiffon Saree', price: 62000, oldPrice: 78000, image: '/images/product-4.png', badge: 'SALE' },
  { name: 'Embroidered Lawn 3-Piece', price: 18990, image: '/images/product-1.png', badge: 'NEW' },
  { name: 'Luxury Pret Kurta', price: 24500, image: '/images/product-2.png', badge: null },
  { name: 'Festive Organza Set', price: 34900, image: '/images/product-3.png', badge: 'PRE ORDER' },
  { name: 'Silk Jacquard Dupatta', price: 15500, image: '/images/product-4.png', badge: null },
];

const occasions = [
  { tag: 'Festive', title: 'Eid Dinner', desc: 'Celebrate in effortless elegance. Timeless designs made for moments that matter.', image: '/images/hero-3.png' },
  { tag: 'Wedding', title: 'Mehendi & Mayun', desc: 'Dance through traditions in vibrant embroidered masterpieces that steal the spotlight.', image: '/images/hero-1.png' },
  { tag: 'Occasion', title: 'Formal Soirée', desc: 'Command every room with pieces cut from the finest fabrics, adorned with royal craftsmanship.', image: '/images/hero-2.png' },
];

const heritage = [
  { title: 'The Craft', quote: 'Every thread tells a story of the royal courts — woven with passion, stitched with precision.', image: '/images/hero-1.png' },
  { title: 'The Vision', quote: 'Where tradition meets tomorrow\'s elegance — redefining Pakistani luxury for the modern era.', image: '/images/product-2.png' },
  { title: 'The Legacy', quote: 'Signatures that transcend time — each collection is a chapter in our ever-evolving story.', image: '/images/hero-2.png' },
];

const ugcItems = [
  { username: '@sarah_luxury', image: '/images/product-1.png' },
  { username: '@ameena.style', image: '/images/product-2.png' },
  { username: '@royalfashionista', image: '/images/product-3.png' },
  { username: '@zahra.elegance', image: '/images/product-4.png' },
  { username: '@aliya.couture', image: '/images/hero-1.png' },
  { username: '@noor.fashion', image: '/images/hero-3.png' },
  { username: '@maryam.pk', image: '/images/category-kids.png' },
];

/* ── Homepage ── */
export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useScrollReveal();

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  function formatPrice(n: number) {
    return 'PKR ' + n.toLocaleString('en-PK');
  }

  return (
    <div ref={sectionRef}>
      {/* ═══════════ HERO ═══════════ */}
      <section className={styles.hero} id="hero-section">
        {heroSlides.map((slide, i) => (
          <div key={i} className={`${styles.heroSlide} ${i === activeSlide ? styles.active : ''}`}>
            <Image
              src={slide.image}
              alt={`${slide.title} ${slide.subtitle}`}
              fill
              priority={i === 0}
              className={styles.heroImage}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroOrnament}>✦</div>
          <h1 className={styles.heroTitle}>{heroSlides[activeSlide].title}</h1>
          <p className={styles.heroSubtitle}>{heroSlides[activeSlide].subtitle}</p>
          <a href="/collections" className={styles.heroCta}>
            {heroSlides[activeSlide].cta}
            <span>→</span>
          </a>
        </div>
        <div className={styles.heroIndicators}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`${styles.indicator} ${i === activeSlide ? styles.active : ''}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ═══════════ CATEGORIES BENTO ═══════════ */}
      <section className={styles.categories} id="categories-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="heading-1">Explore Collections</h2>
            <div className="divider-gold"></div>
            <p>Curated for elegance, crafted for royalty</p>
          </div>
        </div>
        <div className={styles.bentoGrid}>
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href={cat.href}
              className={`${styles.bentoCard} ${cat.tall ? styles.bentoTall : ''} reveal reveal-delay-${i + 1}`}
            >
              <Image src={cat.image} alt={cat.name} fill className={styles.bentoImage} sizes="(max-width: 768px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              <div className={styles.bentoOverlay}>
                <span className={styles.bentoLabel}>{cat.name}</span>
              </div>
              <div className={styles.bentoGoldBorder} />
            </a>
          ))}
        </div>
      </section>

      {/* ═══════════ TRENDING ═══════════ */}
      <section className={styles.trending} id="trending-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="heading-1">Most Desired</h2>
            <div className="divider-gold"></div>
            <p>What everyone is wearing this season</p>
          </div>
        </div>
        <div className={styles.productScroller}>
          {products.map((product, i) => (
            <article key={i} className={`${styles.productCard} reveal reveal-delay-${(i % 4) + 1}`}>
              <div className={styles.productImageWrap}>
                <Image src={product.image} alt={product.name} fill className={styles.productImg} sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                <button className={styles.productWishlist} aria-label="Add to wishlist">
                  <svg width="16" height="16" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21C12 21 2 15 2 8C2 4.5 5 2 8 2C9.8 2 11.4 3 12 4C12.6 3 14.2 2 16 2C19 2 22 4.5 22 8C22 15 12 21 12 21Z" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.productPrice}>
                  {formatPrice(product.price)}
                  {'oldPrice' in product && product.oldPrice && (
                    <span className={styles.productPriceOld}>{formatPrice(product.oldPrice)}</span>
                  )}
                </div>
              </div>
              <div className={styles.productShimmer} />
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════ OCCASIONS ═══════════ */}
      <section className={styles.occasions} id="occasions-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="heading-1">Dress For The Moment</h2>
            <div className="divider-gold"></div>
            <p>Find the perfect ensemble for every celebration</p>
          </div>
        </div>
        {occasions.map((occ, i) => (
          <div key={i} className={`${styles.occasionPanel} reveal`}>
            <Image src={occ.image} alt={occ.title} fill className={styles.occasionBg} sizes="100vw" style={{ objectFit: 'cover' }} />
            <div className={styles.occasionOverlay} />
            <div className={`container ${styles.occasionContent}`}>
              <span className={styles.occasionTag}>{occ.tag}</span>
              <h3 className={styles.occasionTitle}>{occ.title}</h3>
              <p className={styles.occasionDesc}>{occ.desc}</p>
              <a href="/collections" className={styles.occasionBtn}>
                Shop The Look <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* ═══════════ BRIDAL COUTURE ═══════════ */}
      <section className={styles.bridal} id="bridal-section">
        <div className={styles.bridalInner}>
          <div className={`${styles.bridalMainImage} reveal`}>
            <Image src="/images/hero-2.png" alt="Bridal Couture Main" fill sizes="(max-width: 768px) 100vw, 55vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className={`${styles.bridalText} reveal reveal-delay-2`}>
            <span className={styles.bridalTag}>Exclusive Collection</span>
            <h2 className={styles.bridalTitle}>Bridal Couture</h2>
            <p className={styles.bridalDesc}>
              &ldquo;Where dreams are woven in silk and gold — each piece is a masterpiece
              of tradition and modern luxury.&rdquo;
            </p>
            <div className={styles.bridalThumbs}>
              {['/images/product-1.png', '/images/product-3.png', '/images/product-4.png'].map((img, i) => (
                <div key={i} className={styles.bridalThumb}>
                  <Image src={img} alt={`Bridal piece ${i + 1}`} width={100} height={130} style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <a href="/collections/bridals" className={styles.bridalCta}>
              View Collection <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ HERITAGE ═══════════ */}
      <section className={styles.heritage} id="heritage-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="heading-1">Our Heritage</h2>
            <div className="divider-gold"></div>
            <p>The story woven into every signature</p>
          </div>
        </div>
        <div className={styles.heritageGrid}>
          {heritage.map((item, i) => (
            <div key={i} className={`${styles.heritageCard} reveal reveal-delay-${i + 1}`}>
              <Image src={item.image} alt={item.title} fill className={styles.heritageCardImage} sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              <div className={styles.heritageCardOverlay}>
                <h3 className={styles.heritageCardTitle}>{item.title}</h3>
                <p className={styles.heritageCardQuote}>{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ UGC GALLERY ═══════════ */}
      <section className={styles.ugc} id="ugc-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="heading-1">The Royal Gallery</h2>
            <div className="divider-gold"></div>
            <p>Our community wears it best</p>
          </div>
        </div>
        <div className={styles.ugcGrid}>
          {ugcItems.map((item, i) => (
            <div key={i} className={`${styles.ugcItem} reveal reveal-delay-${(i % 4) + 1}`}>
              <Image src={item.image} alt={`Customer ${item.username}`} fill className={styles.ugcItemImage} sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
              <div className={styles.ugcItemOverlay}>
                <span className={styles.ugcUsername}>{item.username}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ NEWSLETTER ═══════════ */}
      <section className={styles.newsletter} id="newsletter-section">
        <div className={`${styles.newsletterContent} reveal`}>
          <h2 className={styles.newsletterTitle}>Join The Royal Court</h2>
          <p className={styles.newsletterDesc}>
            Be the first to discover new collections, exclusive offers, and royal style inspiration.
          </p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.newsletterInput}
              id="newsletter-email"
              required
            />
            <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
