'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const navLinks = [
  {
    label: 'New Arrivals',
    href: '/collections/new-arrivals',
    mega: null,
  },
  {
    label: 'Unstitched',
    href: '/collections/unstitched',
    mega: {
      columns: [
        { title: 'By Fabric', links: ['Lawn', 'Chiffon', 'Organza', 'Silk', 'Cotton'] },
        { title: 'By Collection', links: ['Eid Collection', 'Summer \'26', 'Winter \'26', 'Festive Edit'] },
      ],
    },
  },
  {
    label: 'Luxury Pret',
    href: '/collections/luxury-pret',
    mega: {
      columns: [
        { title: 'Categories', links: ['Formal Pret', 'Casual Pret', 'Co-ords', 'Kurtas'] },
        { title: 'Occasion', links: ['Eid', 'Wedding', 'Dinner', 'Casual'] },
      ],
    },
  },
  {
    label: 'Bridals',
    href: '/collections/bridals',
    mega: {
      columns: [
        { title: 'Collections', links: ['Couture', 'Nikah', 'Walima', 'Mehendi'] },
        { title: 'Accessories', links: ['Bridal Jewelry', 'Clutches', 'Dupattas'] },
      ],
    },
  },
  {
    label: 'Kids',
    href: '/collections/kids',
    mega: null,
  },
  {
    label: 'Accessories',
    href: '/collections/accessories',
    mega: {
      columns: [
        { title: 'Categories', links: ['Bags', 'Jewelry', 'Perfumes', 'Dupattas', 'Clutches'] },
      ],
    },
  },
  {
    label: 'Sale',
    href: '/collections/sale',
    mega: null,
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerInner}>
          {/* Left: Hamburger + Search */}
          <div className={styles.headerLeft}>
            <button
              className={styles.iconBtn}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              id="menu-toggle"
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={mobileOpen ? "M1 1L21 15M1 15L21 1" : "M1 1H21M1 8H21M1 15H15"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button
              className={styles.iconBtn}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              id="search-toggle"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Center: Logo */}
          <a href="/" className={styles.logo} id="site-logo">
            <span className={styles.logoMain}>TIGER</span>
            <span className={styles.logoSub}>THE ROYAL SIGNATURES</span>
          </a>

          {/* Right: Wishlist + Account + Cart */}
          <div className={styles.headerRight}>
            <a href="/wishlist" className={styles.iconBtn} aria-label="Wishlist" id="wishlist-link">
              <svg width="22" height="20" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C12 21 2 15 2 8C2 4.5 5 2 8 2C9.8 2 11.4 3 12 4C12.6 3 14.2 2 16 2C19 2 22 4.5 22 8C22 15 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/account" className={styles.iconBtn} aria-label="Account" id="account-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4 21C4 17 7.5 14 12 14C16.5 14 20 17 20 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
            <button className={styles.cartBtn} aria-label="Cart" id="cart-toggle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H22L20 16H8L6 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M6 6L5 2H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="10" cy="20" r="1.5" fill="currentColor"/>
                <circle cx="18" cy="20" r="1.5" fill="currentColor"/>
              </svg>
              <span className={styles.cartCount}>0</span>
            </button>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className={styles.desktopNav} id="main-nav">
          {navLinks.map((link, i) => (
            <div
              key={link.label}
              className={styles.navItem}
              onMouseEnter={() => link.mega ? setActiveMega(i) : setActiveMega(null)}
              onMouseLeave={() => setActiveMega(null)}
            >
              <a href={link.href} className={styles.navLink}>
                {link.label}
                {link.label === 'Sale' && <span className={styles.saleBadge}>HOT</span>}
              </a>
              {link.mega && activeMega === i && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaInner}>
                    {link.mega.columns.map((col) => (
                      <div key={col.title} className={styles.megaCol}>
                        <span className={styles.megaColTitle}>{col.title}</span>
                        {col.links.map((subLink) => (
                          <a key={subLink} href={`${link.href}/${subLink.toLowerCase().replace(/\s/g, '-')}`} className={styles.megaLink}>
                            {subLink}
                          </a>
                        ))}
                      </div>
                    ))}
                    <div className={styles.megaImage}>
                      <div className={styles.megaImagePlaceholder}>
                        <span>Shop {link.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className={styles.searchOverlay} onClick={() => setSearchOpen(false)}>
          <div className={styles.searchPanel} onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Search our collections..."
              className={styles.searchInput}
              autoFocus
              id="search-input"
            />
            <button className={styles.searchClose} onClick={() => setSearchOpen(false)}>✕</button>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                  {link.label}
                  {link.label === 'Sale' && <span className={styles.saleBadge}>HOT</span>}
                </a>
              ))}
            </nav>
            <div className={styles.mobileSocial}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
