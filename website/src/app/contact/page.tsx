'use client';

import styles from './contact.module.css';

const contactInfo = [
  { icon: '📍', label: 'Visit Us', value: 'Main Boulevard, Gulberg III, Lahore, Pakistan', note: 'Mon – Sat: 11am – 9pm' },
  { icon: '📞', label: 'Call Us', value: '+92 300 123 4567', note: 'Customer support available 10am – 8pm' },
  { icon: '💬', label: 'WhatsApp', value: '+92 300 123 4567', note: 'Quick responses within 30 minutes' },
  { icon: '✉️', label: 'Email Us', value: 'info@tigerroyal.pk', note: 'We respond within 24 hours' },
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className="divider-ornament" style={{ color: '#C8A96E' }}>✦</div>
        <h1 className={styles.pageTitle}>Get In Touch</h1>
        <p className={styles.pageDesc}>We&apos;d love to hear from you. Reach out through any channel below.</p>
      </div>

      <div className={styles.contentGrid}>
        {/* Contact Form */}
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Send Us A Message</h2>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>Full Name</label>
                <input type="text" id="contact-name" className={styles.input} placeholder="Enter your name" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>Email Address</label>
                <input type="email" id="contact-email" className={styles.input} placeholder="Enter your email" required />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-phone" className={styles.label}>Phone Number</label>
              <input type="tel" id="contact-phone" className={styles.input} placeholder="+92 300 000 0000" />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-subject" className={styles.label}>Subject</label>
              <select id="contact-subject" className={styles.input}>
                <option value="">Select a topic</option>
                <option value="order">Order Inquiry</option>
                <option value="custom">Custom/Bridal Order</option>
                <option value="return">Returns & Exchange</option>
                <option value="wholesale">Wholesale Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>Message</label>
              <textarea id="contact-message" className={styles.textarea} rows={6} placeholder="Tell us how we can help..." required />
            </div>
            <button type="submit" className={styles.submitBtn}>Send Message →</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className={styles.infoSection}>
          <h2 className={styles.formTitle}>Contact Information</h2>
          <div className={styles.infoCards}>
            {contactInfo.map(info => (
              <div key={info.label} className={styles.infoCard}>
                <span className={styles.infoIcon}>{info.icon}</span>
                <div>
                  <h3 className={styles.infoLabel}>{info.label}</h3>
                  <p className={styles.infoValue}>{info.value}</p>
                  <p className={styles.infoNote}>{info.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className={styles.mapPlaceholder}>
            <span>📍 Gulberg III, Lahore, Pakistan</span>
            <p>Interactive map coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
