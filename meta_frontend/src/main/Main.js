import React from 'react';
import FoodCard from './components/FoodCard';

function Main(){
    return (<main className="standard-flex-container" style={{flexDirection: 'column', alignItems: 'center'}}>
        <section className="standard-flex-container" >
            <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Little lemon is a nice classy restaurant, Our environment is approapiate for children.
                All our ingredients are natural and organic. We have a wide variety of meals to choose from.
            </p>
            <button>Reserve a table </button>
            </article>
            <figure>
                <img src="images/restaurant.jpg" alt="Image of something" max-width="50 px"/>
            </figure>
        </section>
        <section className="standard-flex-container" style={{flexDirection: 'column', alignItems: 'center'}}>
            <div> Here is the title and the button</div>
            <section className="standard-flex-container" style={{justifyContent: 'space-between', alignItems: 'center', gap: '2em'}}>
                <FoodCard 
                    image="images/greek salad.jpg"
                    name="Greek Salad" 
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." 
                    price="12.99"/>
                <FoodCard 
                    image="images/bruchetta.svg" 
                    name="Bruchetta" 
                    description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." 
                    price="5.99"/>
                <FoodCard 
                    image="images/lemon dessert.jpg" 
                    name="Lemon Dessert" 
                    description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." 
                    price="5.00"/>
            </section>
        </section>
        <section> Testimonials</section>
    </main>);
}

export default Main;