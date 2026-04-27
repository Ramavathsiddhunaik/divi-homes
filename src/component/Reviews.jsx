function Reviews(){
    const reviews = [
        {id:1, name:"Ravi Kumar", Stars:"⭐⭐⭐⭐⭐", comment:"I've tried several cleaning services before, but this one stands out for their professionalism and thoroughness. Highly recommend to anyone "},
        {id:2, name:"Joshna Muddam", Stars:"⭐⭐⭐⭐⭐", comment:"Booking was easy and the staff was courteous and well-equipped. My house has never felt this fresh and clean before!"},
        {id:3, name:"Sara.M", Stars:"⭐⭐⭐⭐⭐", comment:"The team arrived on time and left my home spotless. Their attention to detail in every corner was truly impressive"},
        {id:4, name:"Rakesh Yadav", Stars:"⭐⭐⭐⭐⭐", comment:"Outstanding service from start to finish — they handled everything with care and efficiency. Will definitely be scheduling regular visits"},
        {id:5, name:"Pavan Kalyan", Stars:"⭐⭐⭐⭐⭐", comment:"Their eco-friendly products were a huge plus for my family, and the results were still incredibly deep and detailed. Very satisfied"},
        {id:6, name:"Gautham Reddy", Stars:"⭐⭐⭐⭐⭐", comment:"I was amazed at how transformed my living space looked after just one session. Professional, reliable, and genuinely thorough work!"},
        {id:7, name:"Ahimath Mohd", Stars:"⭐⭐⭐⭐⭐", comment:"The cleaners were respectful of my belongings and did an exceptional job on the kitchen and bathrooms. Worth every penny "},
        {id:8, name:"Johnson Reddy", Stars:"⭐⭐⭐⭐⭐", comment:"Punctual, polite, and precise — exactly what you want in a cleaning service. My home looked brand new when they were done"},
        {id:9, name:"Sudharshan.K", Stars:"⭐⭐⭐⭐⭐", comment:"From the moment they walked in, their professionalism and dedication were evident. Every room was cleaned to perfection — I couldn't be happier with the results!"},
    ]

    const doubled = [...reviews, ...reviews, ...reviews, ...reviews]
    return(
        <section className="review-section">
            <h1 className="head-review">User reviews and feedback</h1>
            <h6 className="head-sub">See how we have transformed users' <br /> experiences through their own words</h6>
          <div className="review-track">
           {doubled.map((review, index) => (
                <div key={index} className="review-card">
                    <h4>{review.name}</h4>
                    <p>{review.Stars}</p>
                    <hr />
                    <p>{review.comment}</p>
                </div>
           )

           )
}
          </div>
        </section>
      
    )
}

export default Reviews;