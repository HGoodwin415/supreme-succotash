import greekSaladImage from '../assets/greek salad.jpg';
import grilledFishImage from '../assets/grilled fish.jpg';
import pastaImage from '../assets/pasta.jpg';
import lemonDessertImage from '../assets/lemon dessert.jpg';
import bruschettaImage from '../assets/bruschetta.svg';
import basketImage from '../assets/Basket.svg';
import React, { useState } from 'react';
import NavBar from './Navbar';


const foodItems = [
    { 
        name: 'Greek salad', 
        price: 12.99, 
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        image: greekSaladImage
    },
    { 
        name: 'Grilled fish', 
        price: 20.00, 
        description: 'The fish is swiftly grilled over medium- or high-heat coals or over medium- or high-heat gas grill burners. Thinner fillets and steaks are grilled over direct fire.',
        image: grilledFishImage
    },
    {
        name: 'Pasta',
        price: 18.99,
        description: 'Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. Our delicious pasta is made with our homemade pasta sauce made daily. Toppings of meatballs and cheese are optional. sided with homemade garlic bread.',
        image: pastaImage
    },
    {
        name: 'Lemon dessert',
        price: 6.99,
        description:'This cake is adored not only for its flavor but also for its texture and simplicity. A base of creamed butter and sugar, eggs, lemon, milk, and flour are among the most basic ingredients. We omitted the brown sugar and substituted extra granulated sugar instead.',
        image: lemonDessertImage
    },
    {
        name: 'Bruschetta',
        price: 7.99,
        description: 'An Italian antipasto called bruschetta is made of grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.',
        image: bruschettaImage
    },
];

const MenuItemCards = () => {
    const [basketItems, setBasketItems] = useState([]);

    const handleOrder = (item) => {
        setBasketItems([...basketItems, item]);
    };

    const handleBasketClick = () => {
        console.log("items in basket: ", basketItems.length);
        };

        return (
            <div>
                <nav>
                    {<NavBar/>}
                </nav>
                <div className="food-item-cards">
                    {foodItems.map((item, index) => (
                        <div key={index} className="food-item-card">
                            <h3>{item.name}</h3>
                            <img src={item.image} alt={item.name} width="250px" height="180px" />
                            <p>{item.description}</p>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <button onClick={() => handleOrder(item)}>Order</button>
                        </div>
                    ))}
                    <img src={basketImage} alt="Basket" width="40px" height="40px" onClick={handleBasketClick} />
                    <div>
                        <h3>Basket</h3>
                        <p>Items in basket: {basketItems.length}</p>
                        {basketItems.map((item, index) => (
                            <div key={index}>
                                <p>{item.name}</p>
                                <p>Price: ${item.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    export default MenuItemCards;
