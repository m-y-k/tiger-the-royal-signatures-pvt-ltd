'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './product.module.css';

const product = {
  name: '3 Piece Embroidered Organza Suit',
  code: 'TRS-EF26-042',
  price: 42990,
  images: ['/images/product-1.png', '/images/product-2.png', '/images/product-3.png', '/images/product-4.png'],
  colors: [
    { name: 'Blush Pink', hex: '#E8C4B4' },
    { name: 'Emerald', hex: '#1B4332' },
    { name: 'Royal Burgundy', hex: '#6B1D34' },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  description: 'An exquisite 3-piece ensemble crafted from premium embroidered organza. Featuring intricate zardozi and thread work on the front, back, and sleeves, paired with a matching embroidered dupatta and dyed raw silk trousers. Perfect for formal occasions and festive celebrations.',
  fabric: 'Organza (Shirt), Raw Silk (Trousers), Organza (Dupatta)',
  care: 'Dry clean only. Store in garment bag away from direct sunlight.',
  includes: ['Embroidered Front & Back', 'Embroidered Sleeves', 'Embroidered Dupatta', 'Dyed Raw Silk Trousers'],
};

const relatedProducts = [
  { id: 2, name: 'Embroidered Raw Silk Ensemble', price: 56900, image: '/images/product-2.png' },
  { id: 3, name: 'Royal Burgundy Formal Suit', price: 38500, image: '/images/product-3.png' },
  { id: 4, name: 'Ivory Chiffon Saree', price: 62000, image: '/images/product-4.png' },
  { id: 5, name: 'Pearl Embroidered Net Suit', price: 48500, image: '/images/product-1.png' },
];

export default function ProductPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  function formatPrice(n: number) {
    return 'PKR ' + n.toLocaleString('en-PK');
  }

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <a href="/">Home</a><span>›</span>
        <a href="/collections">Collections</a><span>›</span>
        <span>{product.name}</span>
      </nav>

      {/* Product Area */}
      <div className={styles.productArea}>
        {/* Gallery */}
        <div className={styles.gallery}>
          <div className={styles.thumbnails}>
            {product.images.map((img, i) => (
              <button key={i} className={`${styles.thumb} ${i === activeImage ? styles.thumbActive : ''}`}
                onClick={() => setActiveImage(i)}>
                <Image src={img} alt={`View ${i + 1}`} width={80} height={106} style={{ objectFit: 'cover' }} />
              </button>
            ))}
          </div>
          <div className={styles.mainImage}>
            <Image src={product.images[activeImage]} alt={product.name} fill sizes="(max-width: 768px) 100vw, 55vw" style={{ objectFit: 'cover' }} priority />
            <span className={styles.zoomHint}>🔍 Hover to zoom</span>
          </div>
        </div>

        {/* Details */}
        <div className={styles.details}>
          <span className={styles.productCode}>{product.code}</span>
          <h1 className={styles.productName}>{product.name}</h1>
          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
          </div>

          {/* Colors */}
          <div className={styles.optionGroup}>
            <label className={styles.optionLabel}>
              Color: <strong>{product.colors[activeColor].name}</strong>
            </label>
            <div className={styles.colorSwatches}>
              {product.colors.map((c, i) => (
                <button key={c.name}
                  className={`${styles.swatch} ${i === activeColor ? styles.swatchActive : ''}`}
                  style={{ background: c.hex }}
                  onClick={() => setActiveColor(i)}
                  aria-label={c.name} />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className={styles.optionGroup}>
            <label className={styles.optionLabel}>
              Size: {activeSize !== null && <strong>{product.sizes[activeSize]}</strong>}
            </label>
            <div className={styles.sizeOptions}>
              {product.sizes.map((s, i) => (
                <button key={s}
                  className={`${styles.sizeBtn} ${i === activeSize ? styles.sizeBtnActive : ''}`}
                  onClick={() => setActiveSize(i)}>
                  {s}
                </button>
              ))}
            </div>
            <a href="/pages/size-guide" className={styles.sizeGuideLink}>📏 Size Guide</a>
          </div>

          {/* Quantity */}
          <div className={styles.optionGroup}>
            <label className={styles.optionLabel}>Quantity</label>
            <div className={styles.qtyControl}>
              <button className={styles.qtyBtn} onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span className={styles.qtyValue}>{quantity}</span>
              <button className={styles.qtyBtn} onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button className={styles.addToBag}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6H22L20 16H8L6 6Z" strokeLinejoin="round"/><path d="M6 6L5 2H2" strokeLinecap="round"/>
              </svg>
              Add To Bag
            </button>
            <button className={styles.addToWishlist}>
              <svg width="18" height="18" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21C12 21 2 15 2 8C2 4.5 5 2 8 2C9.8 2 11.4 3 12 4C12.6 3 14.2 2 16 2C19 2 22 4.5 22 8C22 15 12 21 12 21Z" strokeLinejoin="round"/>
              </svg>
              Add To Wishlist
            </button>
          </div>

          {/* Trust Badges */}
          <div className={styles.trustBadges}>
            <div className={styles.badge}>🚚 Free shipping over PKR 5,000</div>
            <div className={styles.badge}>🔄 7-day return policy</div>
            <div className={styles.badge}>📏 True to size</div>
            <div className={styles.badge}>✨ Premium craftsmanship</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <div className={styles.tabHeaders}>
          {['description', 'fabric', 'shipping'].map(tab => (
            <button key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(tab)}>
              {tab === 'description' ? 'Description' : tab === 'fabric' ? 'Fabric & Care' : 'Shipping'}
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>
          {activeTab === 'description' && (
            <div>
              <p>{product.description}</p>
              <h4 className={styles.tabSubheading}>What&apos;s Included</h4>
              <ul className={styles.includesList}>
                {product.includes.map(item => <li key={item}>✦ {item}</li>)}
              </ul>
            </div>
          )}
          {activeTab === 'fabric' && (
            <div>
              <h4 className={styles.tabSubheading}>Fabric Composition</h4>
              <p>{product.fabric}</p>
              <h4 className={styles.tabSubheading}>Care Instructions</h4>
              <p>{product.care}</p>
            </div>
          )}
          {activeTab === 'shipping' && (
            <div>
              <h4 className={styles.tabSubheading}>Delivery</h4>
              <p>Standard delivery: 3-5 business days within Pakistan. International: 7-14 business days.</p>
              <h4 className={styles.tabSubheading}>Returns</h4>
              <p>We accept returns within 7 days of delivery for unworn items in original packaging with tags attached.</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className={styles.related}>
        <div className="section-header">
          <h2 className="heading-1">You May Also Love</h2>
          <div className="divider-gold"></div>
        </div>
        <div className={styles.relatedGrid}>
          {relatedProducts.map(rp => (
            <a key={rp.id} href={`/product/${rp.id}`} className={styles.relatedCard}>
              <div className={styles.relatedImageWrap}>
                <Image src={rp.image} alt={rp.name} fill sizes="25vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.relatedInfo}>
                <h3>{rp.name}</h3>
                <span className={styles.relatedPrice}>{formatPrice(rp.price)}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
