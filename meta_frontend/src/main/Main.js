import React from 'react';
import FoodCard from './components/FoodCard';
import TestimonyCard from './components/TestimonyCard';
import './Main.css';
function Main(){
    return (<main className="standard-flex-container" style={{flexDirection: 'column', alignItems: 'center'    }}>
        <section className="standard-flex-container" style={{paddingLeft:'10px',width:'60%', paddingBottom:'10px'}} >
            <article className="standard-flex-container" style={{flexDirection: 'column',  alignItems: 'flex-start' , gap:'0em'   }}>
            <div style={{flex: '0 0 1'}}>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
            </div>
            <p style={{flex: '0 0 2' , maxWidth:'250px'}} >Little lemon is a nice classy restaurant, Our environment is approapiate for children.
                All our ingredients are natural and organic. We have a wide variety of meals to choose from.
            </p>
            <button style={{flex: '0 0 1'}} >Reserve a table </button>
            </article>
            <figure style={{flex: '0 0 1'}}>
                <img src="images/restaurant.jpg" alt="Image of something" style={{maxWidth:"350px"}}/>
            </figure>
        </section>
        <section className="standard-flex-container" style={{flexDirection: 'column', width:'60%',alignItems: 'center'}}>
            <div className="standard-flex-container" style={{justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <h2>Specials</h2>
                <button>Online Menu</button>
            </div>
            <section className="standard-flex-container" style={{justifyContent: 'space-between', alignItems: 'center', gap: '2em'}}>
                <FoodCard 
                    image="images/greek salad.jpg"
                    name="Greek Salad" 
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." 
                    price="12.99"/>
                <FoodCard 
                    image="images/bruchetta.svg" 
                    name="Bruchetta" 
                    description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil is one of our best sellers." 
                    price="5.99"/>
                <FoodCard 
                    image="images/cake-remastered.png" 
                    name="Lemon Dessert" 
                    description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as it can posisbly be imagined." 
                    price="5.00"/>
            </section>
        </section>
        <section  style={{ width:'60%' }}>
             <h2 style={{ color: '#F4CE14', textAlign: 'center' }}>Testimonials</h2>
             <div className="standard-flex-container" style={{justifyContent: 'space-between', width:'100%', alignItems: 'center', gap: '2em'}}>
                <TestimonyCard 
                    image="images/person1.jpg"
                    name="John Doe"
                    testimony="This is the best restaurant in Chicago! The food is amazing and the service is excellent."
                />
                <TestimonyCard 
                    image="images/person2.jpg"
                    name="Jane Smith"
                    testimony="I had a wonderful experience at Little Lemon. The atmosphere is cozy and the staff is friendly."
                />
                <TestimonyCard 
                    image="images/person3.jpg"
                    name="Mike Johnson"
                    testimony="The dishes at Little Lemon are creative and delicious. I highly recommend the Greek Salad!"
                />

             </div>
        </section>
    </main>);
}

export default Main;