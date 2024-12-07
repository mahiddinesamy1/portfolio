import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, AlertCircle } from 'lucide-react';
import styles from './Contact.module.css';  // Importer le CSS Module

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Informations de contact</h3>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <Mail className={styles.icon} />
                <a href="mailto:mahiddinesamy@gmail.com">mahiddinesamy@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.icon} />
                <a href="tel:514-691-6731">514-691-6731</a>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.icon} />
                <span>Laval, QC H7W 2S9</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              {status === 'success' ? (
                <>
                  <Check className={styles.icon} />
                  Message envoyé
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle className={styles.icon} />
                  Erreur
                </>
              ) : (
                'Envoyer'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
