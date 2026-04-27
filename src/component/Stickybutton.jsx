function StickyButtons({ openBooking }) {
  const whatsappMessage = `Hello Divi Homes!%0AI need a cleaning service.%0APlease contact me.`;
  
  const openWhatsApp = () => {
    window.open(`https://wa.me/917093040178?text=${whatsappMessage}`, '_blank');
    setTimeout(() => {
      window.open(`https://wa.me/919177038969?text=${whatsappMessage}`, '_blank');
    }, 1000);
  };

  return (
    <div className="sticky-buttons">
      <a href="tel:+919177038969" className="sticky-btn">
        <img src="/Servicecard/Phoneemoji.png" alt="Call" />
      </a>
      <div className="sticky-btn whatsapp-btn" onClick={openWhatsApp}>
        <img src="/Servicecard/whatsappemoji.png" alt="WhatsApp" />
      </div>
      <div className="sticky-btn" onClick={() => openBooking()}>
        <img src="/Servicecard/Bookbtn.png" alt="Cart" />
      </div>
    </div>
  );
}

export default StickyButtons;