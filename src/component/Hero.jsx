

function Hero({ openBooking}) {
    return (
        <section className="hero-section" id="home">
            <video autoPlay muted loop className="hero-video">
                <source src="/Glasse.mp4" type="video/mp4" />
            </video>
            <div className="hero-content">
                <div className="hero-left">
                    <h1>Trusted House Help <div id="time"><span>in Minutes</span></div></h1>
                    <p>📍 Hyderabad & Secunderabad <div id="location">Hayathnagar | Pedda Amberpet | Kuntloor | Nagole | Meerpet | Vanasthalipuram | Karmanghat | Nadergul </div>  </p>
                
                    <button className="book-btn" onClick={() => openBooking()}>Book Now</button>
                </div>
                <div className="hero-right">
                    <img src="/haves.png" alt="equipment" />
                </div>
            </div>
        </section>
    );
}

export default Hero;