import johnLewisImage from "../assets/john-lewis.jpg";
import tomBrownImage from "../assets/tom-brown.jpg";
import sueWhiteImage from "../assets/sue-white.jpg";
import janeSmithImage from "../assets/jane-smith.jpg";
import bobGreenImage from "../assets/bob-green.jpg";

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "John Lewis",
            comment: "The best restaurant I've ever been to!",
            image: johnLewisImage,
        },
        {
            id: 2,
            name: "Jane Smith",
            comment: "I love the food and the atmosphere!",
            image: janeSmithImage,
        },
        {
            id: 3,
            name: "Tom Brown",
            comment: "Great service and great food!",
            image: tomBrownImage,
        },
        {
            id: 4,
            name: "Sue White",
            comment: "I can't wait to come back!",
            image: sueWhiteImage,
        },
        {
            id: 5,
            name: "Bob Green",
            comment: "The food is absolutely amazing!",
            image: bobGreenImage,
        }
    ];

    return (
        <section className="reviews">
            <h2 className="review title">Testimonials</h2>
             {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial">
                    <img src={testimonial.image} alt={testimonial.name} width="250px" height="180px"/>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.comment}</p>
                </div>
            ))}
        
        </section>
    );
}

export default Testimonials;
