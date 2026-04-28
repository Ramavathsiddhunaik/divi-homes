import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_85hucmy';
const TEMPLATE_ID = 'template_95ui84n';
const PUBLIC_KEY = 'OrZQg6SqfkGvqPjex';

function BookingForm({ isOpen, closeBooking, selectedService }) {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    mobile: '',
    location: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send background email
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: formData.name,
      phone: formData.mobile,
      service: formData.service,
      message: `Location: ${formData.location}`,
      reply_to: 'Capitalhomecleaning.hyd@gmail.com',
    }, PUBLIC_KEY);

    // Send WhatsApp
    const message = `New Booking!%0AService: ${formData.service}%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0ALocation: ${formData.location}`;
    window.open(`https://wa.me/919177038969?text=${message}`, '_blank');
    setSubmitted(true);
  };

  const handleClose = () => {
    closeBooking();
    setSubmitted(false);
    setFormData({ service: '', name: '', mobile: '', location: '' });
  };

  return (
    <>
      <div className={`booking-overlay ${isOpen ? 'overlay-show' : 'overlay-hide'}`} onClick={handleClose}></div>
      <div className={`booking-modal ${isOpen ? 'open' : ''}`}>
        <button className="booking-close" onClick={handleClose}>✕</button>

        {submitted ? (
          <div className="booking-success">
            <div className="success-icon">🎉</div>
            <h2>Booking Submitted!</h2>
            <p>Thank you for choosing Capital Home Cleaning Services!</p>
            <p>Our team will contact you shortly.</p>
            <button onClick={handleClose}>Close</button>
          </div>
        ) : (
          <div className="booking-layout">
            <div className="booking-left">
              <img src="/Servicecard/formimage.png" alt="Cleaning" className="booking-img booking-form-img" />
            </div>
            <div className="booking-right">
              <h2>My Bookings</h2>
              <p>Book your cleaning service in minutes!</p>
              <form className="booking-form" onSubmit={handleSubmit}>
                <input list="services-list" name="service" placeholder="Select or Type Service" value={formData.service} onChange={handleChange} autoComplete="off" required />
                <datalist id="services-list">
                  <option value="Single Bedroom Cleaning" />
                  <option value="Double Bedroom Cleaning" />
                  <option value="Triple Bedroom Cleaning" />
                  <option value="Kitchen Deep Cleaning" />
                  <option value="Washroom Deep Cleaning" />
                  <option value="Single Room Cleaning" />
                  <option value="Sofa Deep Cleaning" />
                  <option value="Water Tank Cleaning" />
                  <option value="Commercial Cleaning" />
                  <option value="Villa Cleaning" />
                  <option value="Office Cleaning" />
                  <option value="Farmhouse Cleaning" />
                  <option value="Funtional Hall Cleaning" />
                </datalist>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} autoComplete="off" required />
                <input type="tel" name="mobile" placeholder="Mobile Number (10 digits)" value={formData.mobile} onChange={handleChange} maxLength={10} autoComplete="off" required />
                <input list="locations-list" name="location" placeholder="Select or Type Location" value={formData.location} onChange={handleChange} autoComplete="off" required />
                <datalist id="locations-list">
                  <option value="LB Nagar" />
                  <option value="Hayathnagar" />
                  <option value="Pedda Amberpet" />
                  <option value="Kuntloor" />
                  <option value="Nagole" />
                  <option value="Vanasthalipuram" />
                  <option value="Karmanghat" />
                  <option value="Nadergul" />
                  <option value="Malakpet" />
                  <option value="Dilsukhnagar" />
                  <option value="Uppal" />
                  <option value="Amberpet" />
                  <option value="Boduppal" />
                  <option value="Kachiguda" />
                </datalist>
                <button type="submit">Book Now 🚀</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BookingForm;