

function Servicecard({ openBooking }){
    const Service= [
        {
  id: 1,
  image : "/Servicecard/1-LBHK.png",
  name: "Single Bedroom Cleaning",
  description: " Your bedroom is where you rest — it should feel like a reset, not a chore. \nWe clean what you overlook: under the bed, ceiling fans, skirting boards, windows, and every surface in between.\nDust out. Fresh in. You sleep better tonight.",
  furnished : "4000 - 4500",
  unfurnished : "2800 - 3500",
},
{
  id: 2,
  image : "/Servicecard/2-LBHK.png",
  name: "Double Bedroom Cleaning",
  description: " We make deeply cleaned with precision and care, work every surface fresh and dust-free.\nWe focus on sanitizing key areas, organizing spaces, and maintaining a neat, comfortable environment.\nDesigned for convenience, this service brings a professional touch to keep your home clean, healthy, and inviting.",
  
  furnished : "6000 - 6500",
  unfurnished : "4500 - 5000",
},
{
  id: 3,
  image: "/Servicecard/3-LBHK.png",
  name: "Triple Bedroom Cleaning",
  description: " Our responsibility to handled the high level of professionalism for you space, ensuring each space is cleaned thoroughly and maintained to premium standards.\nWe focus on detailed dusting, proper sanitization, and organized finishing to create a fresh and hygienic space.\nPerfect for larger homes, this service delivers consistent quality, comfort, and a well-presented living environment.  ",
  furnished : "9000 - 11000",
  unfurnished : "8000",
  above_2500_sft: "11000+",
},
{
  id: 4,
  image : "/Servicecard/Kitchen.png",
  name: "Kitchen Deep cleaning",
  description : "Your kitchen works hard every day — grease builds, grime hides, odors settle in. \n  We deep clean every surface, scrub the stove, degrease the tiles, and sanitize every corner you cook in. \n Clean kitchen. Safe food. Zero compromise.",
  
  Price : "1800 - 2500",

},
{
  id: 5,
  image : "/Servicecard/Washroom.png",
  name: "Washroom Deep Cleaning",
  description : " Your washroom is used every day — it should be spotless, not just rinsed.\nWe scrub the tiles, descale the fixtures, clean the toilet, sanitize every surface you touch.\nNo stains, no odor, no shortcuts. Just a washroom that feels genuinely cleaned",
  
  Price : "500",
  
},
{
  id: 6,
  image : "/Servicecard/Singleroom.png",
  name: "Single Bedroom Cleaning",
  description: " Your room holds your rest, your peace, your privacy — it deserves more than a quick wipe.\nWe go deep: every shelf, every corner, every surface you stopped noticing.\nOne room. Total focus. Walk in and feel the difference... ",
  
  Price : "1000",
  
},
{
  id: 7,
  image : "/Servicecard/Sofa.png",
  name: "Sofa Deep Cleaning",
  subname : "( 5-6-7-8 Above )",
  description : "Your sofa takes daily abuse — body weight, food, sweat, pet hair, invisible bacteria.\nWe deep clean every fiber, lift every stain, eliminate every allergen buried inside.\nFresh fabric. Restored comfort. Like the day you bought It...",
  
  Price : "1500 - 2000+"
},
{
  id: 8,
  image : "/Servicecard/Watertank.png",
  name: "Water Tank Deep cleaning ( Terrace / Underground Tanks)",
  description : "You drink it, cook with it, live on it — your water should be pure from the source.\nWe clean and sanitize your tank completely — removing sediment, algae, and bacteria buildup inside.\nClean tank. Safe water. No compromise...",
  
  Price : " 1rs/Liter",
},
{
  id: 9,
 image: "/Servicecard/Allmix/1-last.png",
  name: " Office Cleaning , Villa Cleaning , Duplex House Cleaning , Farmhouse Cleaning , Function Hall/Event Cleaning , Building Deep Cleaning , Commercial Flat ... ",
  description : "Grand spaces demand a greater standard. \nWe move through every floor, every hall, every surface with trained hands and professional equipment. \nWhen we leave, the space doesn't just look clean — it commands respect.",
  
  Price : "Above 3000 Sft floors, \n ( Customer Quotation )"
},
    ];

     return (
         <div className="servicecard-container">
            <h2 className="servicecard-title" id="services"> Our Services</h2>
            <p className="servicecard-subtitle">✨ Book . We Clean . You Relax 🧼</p> 
            {Service.map((service) => (
               <div className="servicecard-card" key={Service.id}>
                <img src={service.image} alt={service.name} className="servicecard-img"/>

                <div className="servicecard-middle">
                  <h3>{service.name}</h3>
                  <h4>{service.subname}</h4>
                  <p>{service.description}</p>
                </div>

                <div className="servicecard-right">
                <div className="price-box">
                  <span>{service.furnished ? "Furnished" : "Price"}</span>
                  <p>₹{service.furnished || service.Price}</p>
                  <button className="book-btn" onClick={() => openBooking(service.name)}>Book Now</button>
                </div>

                  { service.unfurnished && (
                    <div className="price-box">
                      <span>Unfurnished</span>
                      <p>₹{service.unfurnished}</p>
                      <button className="book-btn" onClick={() => openBooking(service.name)}>Book Now</button>
                    </div>

                  )}

                </div>


               </div>
            ))}
         </div>
    )
     
}

export default Servicecard;




