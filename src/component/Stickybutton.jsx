function StickyButtons({ openBooking }) {
  const whatsappMessage = `Hello Divi Homes!%0AI need a cleaning service.%0APlease contact me.`;
  
  return (
    <div className="sticky-buttons">
      <a href="tel:+919177038969" className="sticky-btn">
        <img src="/Servicecard/Phoneemoji.png" alt="Call" />
      </a>
      <a href={`https://wa.me/917093040178?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="sticky-btn whatsapp-btn">
        <img src="/Servicecard/whatsappemoji.png" alt="WhatsApp" />
      </a>
      <div className="sticky-btn" onClick={() => openBooking()}>
        <img src="/Servicecard/Bookbtn.png" alt="Cart" />
      </div>
    </div>
  );
}

export default StickyButtons;