import HeroImage from "../assets/restaurant chef B.jpg";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";



function BookingConfirmed() {
  return (
 <> <NavBar/>
    <header className="confirmation">
        <img
        className="confirm-image"
        src={HeroImage}
        alt="Little Lemon Ingredients" height="453px" width="600px"
      />
      <section className="reserve">
    
        <h1> Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thank you for choosing the Little Lemon Restaurant</h4>
        <Link to="/"><button type="onClick">Home Page</button></Link>
      </section>
      
      
    </header>
    </>
  );
}
export default BookingConfirmed;