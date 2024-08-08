import image from '../assets/greek salad.jpg';
import image2 from '../assets/bruschetta.svg';
import image3 from '../assets/lemon dessert.jpg';
import { Link } from 'react-router-dom';


function Main() {


    return(
        <main className="main">
               <Link to="/orderOnline"><button type='onClick'>Order Online</button></Link>
            <h1>This weeks specials</h1>
            <p>Our menu is updated weekly with new specials. Check out our current specials below.</p>

             <section className="menu">

             <div className="menu-item1">
                <img src={image} alt="greek salad" width="264px" height="186px"/>
                <span>
                <h3>Greek salad</h3>  
                <h4 className="price"> $12.99</h4>
                </span>
                <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
             </div>
             <div className="menu-item2">
                <img  src={image2} alt="bruschetta" width="264px" height="186px"/>
                <span>
                <h3>Bruschetta</h3>
                <h4 className="price">$7.99</h4>
                </span>
                <p className="description">An Italian antipasto called bruschetta is made of grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.</p>
                </div>
                <div className="menu-item2">
                    <img  src={image3} alt="lemon dessert" width="264px" height="186px" />
                    <span>
                    <h3>Lemon dessert</h3>
                    <h4 className="price">$6.99</h4>
                    </span>
                    <p className="description">This cake is adored not only for its flavor but also for its texture and simplicity. A base of creamed butter and sugar, eggs, lemon, milk, and flour are among the most basic ingredients. We omitted the brown sugar and substituted extra granulated sugar instead.</p>
                </div>

                </section>

        </main>
    );
};



export default Main;