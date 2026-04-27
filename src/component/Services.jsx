function OurServices(){
   let services = [
    { id: 1, name: "FLOOR CLEANING", image: "/Ourservices/Floor.png" },
    { id: 2, name: "GARDEN CLEANING", image: "/Ourservices/Garden.png" },
    { id: 3, name: "GLASS CLEANING", image: "/Ourservices/Glass.png" },
    { id: 4, name: "Bedroom CLEANING", image: "/Ourservices/bedroom.png" },
    { id: 5, name: "SPECIFIC CLEANING", image: "/Ourservices/Specific.png" },
    { id: 6, name: "DEEP CLEANING", image: "/Ourservices/deep.png" },
    { id: 7, name: "KITCHEN CLEANING", image: "/Ourservices/kitchen.png" },
    { id: 8, name: "TOILET CLEANING", image: "/Ourservices/toilet.png" },
    { id: 9, name: "TERRACE WATER TANKER", image: "/Ourservices/tank.png" },
]
const doubled = [...services, ...services]
    return(
        <section className="services-section">
            <h1 className="heading">Our Services - <div><span>Help in Minutes</span></div> </h1>
        <div services-wrapper>
          <div className="services-track">
             {doubled.map( (services, index) => (
            <div key={index} className="service-card">
              <img src={services.image} alt={services.name} />
                 <p id="image">{services.name}</p>
           </div>
           
       ))}
       </div>
       </div>
       </section>
    )
}
export default OurServices;