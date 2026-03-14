import styles from './AnnouncementBar.module.css';

export function AnnouncementBar() {
  const items = [
    'Free Shipping on Orders Over PKR 5,000',
    'New Eid Collection 2026 — Shop Now',
    'Luxury Craftsmanship Since Day One',
    'Worldwide Delivery Available',
  ];

  return (
    <div className={styles.announcement}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className={styles.marqueeContent}>
              {items.map((item, i) => (
                <span key={`${setIndex}-${i}`}>
                  <span className={styles.marqueeItem}>
                    <span className={styles.diamond}>◆</span>
                    {item}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://instagram.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Instagram</a>
        <span className={styles.separator}>|</span>
        <a href="https://facebook.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Facebook</a>
        <span className={styles.separator}>|</span>
        <a href="https://youtube.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
    </div>
  );
}
