import React from 'react';
import './GetAppSection.css';

/* Fake QR code using a free placeholder */
const QR_CODE = 'https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://www.swiggy.com&bgcolor=ffffff&color=000000&qzone=2';

const GetAppSection = () => (
  <section id="get-app" className="getapp-section">
    {/* Dark banner */}
    <div className="getapp-banner">

      {/* Left text */}
      <div className="getapp-text">
        <div className="getapp-brand">
          <img src="icon.png" alt="Swiggy" className="getapp-logo-icon" />
          <span className="getapp-brand-name">Swiggy</span>
        </div>
        <h2>Get the Swiggy App now!</h2>
        <p>For best offers and discounts curated specially for you.</p>

        <div className="getapp-store-badges">
          <a
            href="https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920"
            target="_blank"
            rel="noreferrer"
            className="store-badge"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.78 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=in.swiggy.android"
            target="_blank"
            rel="noreferrer"
            className="store-badge"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l15 8.5c.6.34.6 1.26 0 1.6l-15 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
            Google Play
          </a>
        </div>
      </div>

      {/* QR code on phone mockup */}
      <div className="getapp-phone-wrap">
        <div className="getapp-phone">
          <img src={QR_CODE} alt="Scan to download Swiggy" className="getapp-qr" />
          <p className="getapp-scan-text">Scan to download</p>
        </div>
      </div>
    </div>
  </section>
);

export default GetAppSection;
