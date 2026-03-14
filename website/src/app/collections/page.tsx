'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './collections.module.css';

const allProducts = [
  { id: 1, name: '3 Piece Embroidered Organza Suit', price: 42990, image: '/images/product-1.png', badge: 'NEW', category: 'formals', fabric: 'organza', color: 'pink' },
  { id: 2, name: 'Embroidered Raw Silk Ensemble', price: 56900, image: '/images/product-2.png', badge: 'NEW', category: 'formals', fabric: 'silk', color: 'green' },
  { id: 3, name: 'Royal Burgundy Formal Suit', price: 38500, image: '/images/product-3.png', badge: null, category: 'formals', fabric: 'silk', color: 'burgundy' },
  { id: 4, name: 'Ivory Chiffon Saree', price: 62000, oldPrice: 78000, image: '/images/product-4.png', badge: 'SALE', category: 'sarees', fabric: 'chiffon', color: 'ivory' },
  { id: 5, name: 'Embroidered Lawn 3-Piece', price: 18990, image: '/images/product-1.png', badge: 'NEW', category: 'unstitched', fabric: 'lawn', color: 'pink' },
  { id: 6, name: 'Luxury Pret Kurta Set', price: 24500, image: '/images/product-2.png', badge: null, category: 'pret', fabric: 'cotton', color: 'green' },
  { id: 7, name: 'Festive Organza Ensemble', price: 34900, image: '/images/product-3.png', badge: 'PRE ORDER', category: 'formals', fabric: 'organza', color: 'burgundy' },
  { id: 8, name: 'Silk Jacquard Collection', price: 15500, image: '/images/product-4.png', badge: null, category: 'unstitched', fabric: 'silk', color: 'ivory' },
  { id: 9, name: 'Pearl Embroidered Net Suit', price: 48500, image: '/images/product-1.png', badge: 'NEW', category: 'formals', fabric: 'net', color: 'pink' },
  { id: 10, name: 'Emerald Velvet Shawl Suit', price: 52000, image: '/images/product-2.png', badge: null, category: 'formals', fabric: 'velvet', color: 'green' },
  { id: 11, name: 'Bridal Red Lehenga Set', price: 185000, image: '/images/product-3.png', badge: 'EXCLUSIVE', category: 'bridal', fabric: 'silk', color: 'burgundy' },
  { id: 12, name: 'Off-White Nikah Ensemble', price: 145000, image: '/images/product-4.png', badge: null, category: 'bridal', fabric: 'organza', color: 'ivory' },
];

const categories = ['All', 'Formals', 'Pret', 'Unstitched', 'Sarees', 'Bridal'];
const fabrics = ['All', 'Organza', 'Silk', 'Chiffon', 'Lawn', 'Cotton', 'Net', 'Velvet'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFabric, setActiveFabric] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [gridCols, setGridCols] = useState(4);
  const [showFilters, setShowFilters] = useState(false);
  const sectionRef = useScrollReveal();

  const filtered = allProducts
    .filter(p => activeCategory === 'All' || p.category === activeCategory.toLowerCase())
    .filter(p => activeFabric === 'All' || p.fabric === activeFabric.toLowerCase())
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  function formatPrice(n: number) {
    return 'PKR ' + n.toLocaleString('en-PK');
  }

  return (
    <div ref={sectionRef} className={styles.page}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span className={styles.breadcrumbSep}>›</span>
        <span>Collections</span>
      </nav>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className="divider-ornament">✦</div>
        <h1 className={styles.pageTitle}>Our Collections</h1>
        <p className={styles.pageDesc}>Discover the finest luxury fashion, curated for royalty</p>
      </div>

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <button className={styles.filterToggle} onClick={() => setShowFilters(!showFilters)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="8" y2="18"/>
            <circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/>
          </svg>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <div className={styles.toolbarRight}>
          <span className={styles.resultCount}>{filtered.length} products</span>
          <select className={styles.sortSelect} value={sortBy} onChange={e => setSortBy(e.target.value)}>
            {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <div className={styles.gridToggle}>
            {[2, 3, 4].map(cols => (
              <button key={cols} className={`${styles.gridBtn} ${gridCols === cols ? styles.gridBtnActive : ''}`}
                onClick={() => setGridCols(cols)} aria-label={`${cols} columns`}>
                {Array.from({ length: cols }).map((_, i) => <span key={i} className={styles.gridDot} />)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.contentArea}>
        {/* Filters Sidebar */}
        {showFilters && (
          <aside className={styles.filters}>
            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Category</h3>
              {categories.map(cat => (
                <label key={cat} className={styles.filterOption}>
                  <input type="radio" name="category" checked={activeCategory === cat} onChange={() => setActiveCategory(cat)} />
                  <span className={styles.filterRadio} />
                  {cat}
                </label>
              ))}
            </div>
            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Fabric</h3>
              {fabrics.map(fab => (
                <label key={fab} className={styles.filterOption}>
                  <input type="radio" name="fabric" checked={activeFabric === fab} onChange={() => setActiveFabric(fab)} />
                  <span className={styles.filterRadio} />
                  {fab}
                </label>
              ))}
            </div>
          </aside>
        )}

        {/* Product Grid */}
        <div className={styles.productGrid} style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}>
          {filtered.map((product, i) => (
            <a key={product.id} href={`/product/${product.id}`} className={`${styles.productCard} reveal reveal-delay-${(i % 4) + 1}`}>
              <div className={styles.productImageWrap}>
                <Image src={product.image} alt={product.name} fill className={styles.productImg} sizes={`(max-width: 768px) 50vw, ${100 / gridCols}vw`} style={{ objectFit: 'cover' }} />
                {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                <button className={styles.wishlistBtn} aria-label="Add to wishlist" onClick={e => e.preventDefault()}>
                  <svg width="16" height="16" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21C12 21 2 15 2 8C2 4.5 5 2 8 2C9.8 2 11.4 3 12 4C12.6 3 14.2 2 16 2C19 2 22 4.5 22 8C22 15 12 21 12 21Z" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={styles.quickView}>Quick View</div>
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
            </a>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <div className={styles.emptyState}>
          <p>No products match your filters. Try adjusting your selection.</p>
        </div>
      )}
    </div>
  );
}
