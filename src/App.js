import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import OurServices from './component/Services';
import Promise from './component/Promise';
import Reviews from './component/Reviews';
import Verified from './component/Verified';
import Servicecard from './component/Servicecards';
import AboutUs from './component/Aboutus';
import StrickyButtons from './component/Stickybutton';
import Footer from './component/Footer';
import BookingForm from './component/BookingForm';
import NewPartner from './component/NewPartner';
import './App.css';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  const openBooking = (service = '') => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  const openPartner = () => setIsPartnerOpen(true);
  const closePartner = () => setIsPartnerOpen(false);

  return (
    <HelmetProvider>
      <Navbar openBooking={openBooking} openPartner={openPartner} />
      <StrickyButtons openBooking={openBooking} />
      <Hero openBooking={openBooking} />
      <OurServices />
      <Promise />
      <Reviews />
      <Verified />
      <Servicecard openBooking={openBooking} />
      <AboutUs />
      <Footer />
      <BookingForm
        isOpen={isBookingOpen}
        closeBooking={closeBooking}
        selectedService={selectedService}
      />
      <NewPartner
        isOpen={isPartnerOpen}
        closePartner={closePartner}
      />
    </HelmetProvider>
  );
}

export default App;