import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.topSection}>
        <div style={styles.subscribe}>
          <h4 style={styles.heading}>BE THE FIRST TO KNOW</h4>
          <p style={styles.text}>Sign up for updates from mettā muse.</p>
          <div style={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your e-mail…"
              style={styles.input}
            />
            <button style={styles.button}>SUBSCRIBE</button>
          </div>
        </div>

        <div style={styles.contact}>
          <h4 style={styles.heading}>CONTACT US</h4>
          <p style={styles.text}>+44 221 133 5360</p>
          <p style={styles.text}>customercare@mettamuse.com</p>
          <h4 style={{ ...styles.heading, marginTop: '1rem' }}>CURRENCY</h4>
          <p style={styles.text}>🇺🇸 USD</p>
          <p style={{ ...styles.text, fontSize: '12px' }}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <hr style={styles.divider} />

      <div style={styles.bottomSection}>
        <div style={styles.linksColumn}>
          <h4 style={styles.linkHeader}>mettā muse</h4>
          <p style={styles.link}>About Us</p>
          <p style={styles.link}>Stories</p>
          <p style={styles.link}>Artisans</p>
          <p style={styles.link}>Boutiques</p>
          <p style={styles.link}>Contact Us</p>
          <p style={styles.link}>EU Compliances Docs</p>
        </div>

        <div style={styles.linksColumn}>
          <h4 style={styles.linkHeader}>QUICK LINKS</h4>
          <p style={styles.link}>Orders & Shipping</p>
          <p style={styles.link}>Join/Login as a Seller</p>
          <p style={styles.link}>Payment & Pricing</p>
          <p style={styles.link}>Return & Refunds</p>
          <p style={styles.link}>FAQs</p>
          <p style={styles.link}>Privacy Policy</p>
          <p style={styles.link}>Terms & Conditions</p>
        </div>

        <div style={styles.socialColumn}>
          <h4 style={styles.linkHeader}>FOLLOW US</h4>
          <div style={styles.socialIcons}>
            <span>🔗</span> {/* Replace with actual social icons */}
            <span>📷</span>
          </div>
          <h4 style={{ ...styles.linkHeader, marginTop: '1rem' }}>mettā muse ACCEPTS</h4>
          <div style={styles.paymentIcons}>
            <img src="https://img.icons8.com/color/48/000000/google-pay-india.png" alt="GPay" style={styles.icon} />
            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="MasterCard" style={styles.icon} />
            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" style={styles.icon} />
            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" style={styles.icon} />
            <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" style={styles.icon} />
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" style={styles.icon} />
          </div>
        </div>
      </div>

      <div style={styles.copyright}>
        <p>Copyright © 2025 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px 50px',
    fontFamily: 'sans-serif',
  },
  topSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
    marginBottom: '40px',
  },
  subscribe: {
    flex: '1 1 300px',
    maxWidth: '400px',
  },
  contact: {
    flex: '1 1 300px',
    maxWidth: '400px',
  },
  heading: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  text: {
    fontSize: '13px',
    marginBottom: '8px',
  },
  subscribeForm: {
    display: 'flex',
    marginTop: '12px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '4px 0 0 4px',
    border: 'none',
    outline: 'none',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    fontWeight: '600',
  },
  divider: {
    borderColor: '#444',
    margin: '30px 0',
  },
  bottomSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '30px',
  },
  linksColumn: {
    flex: '1 1 150px',
  },
  socialColumn: {
    flex: '1 1 150px',
  },
  linkHeader: {
    fontWeight: '600',
    marginBottom: '10px',
  },
  link: {
    fontSize: '13px',
    marginBottom: '6px',
    cursor: 'pointer',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
  },
  paymentIcons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px',
  },
  icon: {
    height: '30px',
  },
  copyright: {
    marginTop: '30px',
    textAlign: 'center',
    fontSize: '12px',
    color: '#aaa',
  },
};

export default Footer;
