import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_85hucmy';
const TEMPLATE_ID = 'template_95ui84n';
const PUBLIC_KEY = 'OrZQg6SqfkGvqPjex';

function StickyButtons({ openBooking }) {
  const [showCallPopup, setShowCallPopup] = useState(false);
  const whatsappMessage = `Hello Asian Elite Home Cleaning Service!%0AI need a cleaning service.%0APlease contact me.`;

  const handleCall = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: 'A Customer',
      phone: 'Unknown',
      service: 'Called Uncle 2 - +91 9177038969',
      message: 'A customer clicked the Call button on the website.',
      reply_to: 'asianelitecleaning.hyd@gmail.com',
    }, PUBLIC_KEY);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'tel:+919177038969';
    } else {
      setShowCallPopup(true);
    }
  };

  const handleWhatsApp = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: 'A Customer',
      phone: 'Unknown',
      service: 'WhatsApped Uncle 1 - +91 7093040178',
      message: 'A customer clicked the WhatsApp button on the website.',
      reply_to: 'asianelitecleaning.hyd@gmail.com',
    }, PUBLIC_KEY);
    window.open(`https://wa.me/917093040178?text=${whatsappMessage}`, '_blank');
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText('+919177038969');
    alert('✅ Number Copied!');
  };

  return (
    <>
      <div className="sticky-buttons">
        <a className="sticky-btn" onClick={handleCall}>
          <img src="/Servicecard/Phoneemoji.png" alt="Call" />
        </a>
        <a className="sticky-btn whatsapp-btn" onClick={handleWhatsApp}>
          <img src="/Servicecard/whatsappemoji.png" alt="WhatsApp" />
        </a>
        <div className="sticky-btn" onClick={() => openBooking()}>
          <img src="/Servicecard/bookbtn.png" alt="Cart" />
        </div>
      </div>

      {showCallPopup && (
        <div className="call-popup-overlay" onClick={() => setShowCallPopup(false)}>
          <div className="call-popup" onClick={(e) => e.stopPropagation()}>
            <div className="call-popup-icon">📞</div>
            <h2 className="call-popup-title">Ready to Connect?</h2>
            <p className="call-popup-desc">
              You're one call away from a <strong>spotless home!</strong> 🏠✨
            </p>
            <div className="call-popup-number" onClick={handleCopyNumber}>
              +91 9177038969
              <span className="copy-hint">📋 Tap to Copy</span>
            </div>
            <p className="call-popup-note">
              📱 Please call from your <strong>mobile phone</strong> for the best experience.
            </p>
            <button className="call-popup-btn" onClick={() => setShowCallPopup(false)}>
              Okay, Got it! 👍
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default StickyButtons;