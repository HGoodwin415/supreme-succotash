import photo from "../assets/restaurant.jpg";
import Header from "./Header";
import { Link } from "react-router-dom";

function Reservation() {
return (
    <div className="res-content-container">
        <Header />
        <div className="text">
            <h2>Come dine with us at the Little Lemon Restaurant.</h2>
            <img className="photo" src={photo} alt="Little Lemon Restaurant patio" width="500px" height="500px" />
            <Link to="/booking"><button type="onClick">Reserve a Table</button></Link>
        </div>
       
    </div>
);
};

export default Reservation;

