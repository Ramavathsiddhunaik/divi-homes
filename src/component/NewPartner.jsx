// import { useState } from 'react';

// function NewPartner({ isOpen, closePartner }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     location: ''
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `New Partner Request!%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0ALocation: ${formData.location}`;
//     window.open(`https://wa.me/917093040178?text=${message}`, '_blank');
//     setSubmitted(true);
//   };

  
//   const handleClose = () => {
//     closePartner();
//     setSubmitted(false);
//     setFormData({ name: '', mobile: '', location: '' });
//   };

//   return (
//     <>
//       <div className={`booking-overlay ${isOpen ? 'overlay-show' : 'overlay-hide'}`} onClick={handleClose}></div>
//       <div className={`booking-modal ${isOpen ? 'open' : ''}`}>
//         <button className="booking-close" onClick={handleClose}>✕</button>

//         {submitted ? (
//           <div className="booking-success">
//             <div className="success-icon">🎉</div>
//             <h2>Request Submitted!</h2>
//             <p>Thank you for joining Divi Homes!</p>
//             <p>Our team will contact you shortly.</p>
//             <button onClick={handleClose}>Close</button>
//           </div>
//         ) : (
//           <div className="booking-layout">

//             <div className="booking-left">
//               <img src="/Servicecard/NewPartner.png" alt="Partner" className="booking-img partner-img" />
//             </div>

//             <div className="booking-right">
//               <h2>New Partner</h2>
//               <p>Join Divi Homes and grow your business!</p>

//               <div className="partner-price">
//                 <span className="partner-mrp">₹2999</span>
//                 <span className="partner-offer">₹499 🔥</span>
//                 <span className="partner-tag">3 Months Subscription!</span>
//               </div>

//               <form className="booking-form" onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   autoComplete="off"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="mobile"
//                   placeholder="Mobile Number (10 digits)"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   maxLength={10}
//                   autoComplete="off"
//                   required
//                 />
//                 <input
//                   list="locations-list"
//                   name="location"
//                   placeholder="Select or Type Location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   autoComplete="off"
//                   required
//                 />
//                 <datalist id="locations-list">
//                   <option value="LB Nagar" />
//                   <option value="Malakpet" />
//                   <option value="Dilsukhnagar" />
//                   <option value="Nagole" />
//                   <option value="Uppal" />
//                   <option value="Amberpet" />
//                   <option value="Hayathnagar" />
//                   <option value="Pedda Amberpet" />
//                   <option value="Kuntloor" />
//                   <option value="Boduppal" />
//                   <option value="Ameerpet" />
//                   <option value="MGBS" />
//                 </datalist>
//                 <button type="submit">Join Now 🚀</button>
//               </form>
//             </div>

//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default NewPartner;








import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_85hucmy';
const TEMPLATE_ID = 'template_95ui84n';
const PUBLIC_KEY = 'OrZQg6SqfkGvqPjex';

function NewPartner({ isOpen, closePartner }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send background email
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: formData.name,
      phone: formData.mobile,
      service: 'New Partner Request',
      message: `Location: ${formData.location}`,
      reply_to: 'Capitalhomecleaning.hyd@gmail.com',
    }, PUBLIC_KEY);

    // Send WhatsApp
    const message = `New Partner Request!%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0ALocation: ${formData.location}`;
    window.open(`https://wa.me/917093040178?text=${message}`, '_blank');
    setSubmitted(true);
  };

  const handleClose = () => {
    closePartner();
    setSubmitted(false);
    setFormData({ name: '', mobile: '', location: '' });
  };

  return (
    <>
      <div className={`booking-overlay ${isOpen ? 'overlay-show' : 'overlay-hide'}`} onClick={handleClose}></div>
      <div className={`booking-modal ${isOpen ? 'open' : ''}`}>
        <button className="booking-close" onClick={handleClose}>✕</button>

        {submitted ? (
          <div className="booking-success">
            <div className="success-icon">🎉</div>
            <h2>Request Submitted!</h2>
            <p>Thank you for joining Capital Home Cleaning Services!</p>
            <p>Our team will contact you shortly.</p>
            <button onClick={handleClose}>Close</button>
          </div>
        ) : (
          <div className="booking-layout">
            <div className="booking-left">
              <img src="/Servicecard/NewPartner.png" alt="Partner" className="booking-img partner-img" />
            </div>
            <div className="booking-right">
              <h2>New Partner</h2>
              <p>Join Capital Home Cleaning Services and grow your business!</p>
              <div className="partner-price">
                <span className="partner-mrp">₹2999</span>
                <span className="partner-offer">₹499 🔥</span>
                <span className="partner-tag">3 Months Subscription!</span>
              </div>
              <form className="booking-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} autoComplete="off" required />
                <input type="tel" name="mobile" placeholder="Mobile Number (10 digits)" value={formData.mobile} onChange={handleChange} maxLength={10} autoComplete="off" required />
                <input list="locations-list" name="location" placeholder="Select or Type Location" value={formData.location} onChange={handleChange} autoComplete="off" required />
                <datalist id="locations-list">
                  <option value="LB Nagar" />
                  <option value="Malakpet" />
                  <option value="Dilsukhnagar" />
                  <option value="Nagole" />
                  <option value="Uppal" />
                  <option value="Amberpet" />
                  <option value="Hayathnagar" />
                  <option value="Pedda Amberpet" />
                  <option value="Kuntloor" />
                  <option value="Boduppal" />
                  <option value="Ameerpet" />
                  <option value="MGBS" />
                </datalist>
                <button type="submit">Join Now 🚀</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default NewPartner;