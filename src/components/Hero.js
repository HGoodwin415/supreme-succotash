import img from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

function Hero() {
    return(
        <article>
       <h1>Little Lemon</h1> 
       <h2>Chicago</h2>
       <p>We are a family owned Mediterranean restaurant,</p>
        <p>focused on traditional recipes served with a modern twist.</p>


        <Link to="/booking"><button type="onClick">Reserve a Table</button></Link>

        <img classname="hero-image" src={img} alt="sample of cuisine" height="453px" width="352"/>
        </article>

      
    );
};



export default Hero;



