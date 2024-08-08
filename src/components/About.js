import owners from "../assets/Mario and Adrian A.jpg";
import Header from "./Header";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
        <Header/>
        
                <article className="about-us">
                    <section className="hero-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                        Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                        and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                        continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                        <Link to="/"><button type="onClick">Homepage</button></Link>
                        <Link to="/menu"><button type="onClick">Menu</button></Link>
                        <Link to="/reservation"><button type="onClick">Reserve a Table</button></Link>
                    </section>
        
                    <section className="owner-image">
                        <img className="owners" src={owners} alt="Little Lemon Restaurant owners" width="500px" height="400px"/>
                        
                    </section>
            </article>
            </>
            );
        }
    


export default About;