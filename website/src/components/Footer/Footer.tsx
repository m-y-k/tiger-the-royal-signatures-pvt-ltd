import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.footerLogo}>
            <span className={styles.footerLogoMain}>TIGER</span>
            <span className={styles.footerLogoSub}>THE ROYAL SIGNATURES</span>
          </div>
          <p className={styles.brandDesc}>
            Where royal heritage meets modern elegance. Every piece is a signature of luxury,
            crafted for those who wear their crown in style.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22.5 6.4a2.8 2.8 0 00-2-2C18.9 4 12 4 12 4s-6.9 0-8.5.4a2.8 2.8 0 00-2 2A29 29 0 001 12a29 29 0 00.5 5.6 2.8 2.8 0 002 2c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a2.8 2.8 0 002-2A29 29 0 0023 12a29 29 0 00-.5-5.6z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Column */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Contact</h4>
          <div className={styles.contactInfo}>
            <p>Lahore, Pakistan</p>
            <a href="tel:+923001234567">+92 300 123 4567</a>
            <a href="https://wa.me/923001234567">WhatsApp: +92 300 123 4567</a>
            <a href="mailto:info@tigerroyal.pk">info@tigerroyal.pk</a>
          </div>
        </div>

        {/* Information Column */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Information</h4>
          <nav className={styles.footerNav}>
            <a href="/pages/returns">Returns & Exchange</a>
            <a href="/pages/privacy">Privacy Policy</a>
            <a href="/pages/faq">FAQs</a>
            <a href="/pages/stores">Store Locator</a>
            <a href="/pages/track-order">Track Your Order</a>
            <a href="/blog">Blog</a>
          </nav>
        </div>

        {/* Customer Care Column */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Customer Care</h4>
          <nav className={styles.footerNav}>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
            <a href="/pages/size-guide">Size Guide</a>
            <a href="/pages/terms">Terms & Conditions</a>
            <a href="/pages/careers">Careers</a>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © 2026 Tiger The Royal Signatures. All rights reserved.
          </p>
          <div className={styles.payments}>
            <span className={styles.paymentIcon}>VISA</span>
            <span className={styles.paymentIcon}>MC</span>
            <span className={styles.paymentIcon}>JazzCash</span>
            <span className={styles.paymentIcon}>EasyPaisa</span>
            <span className={styles.paymentIcon}>COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
