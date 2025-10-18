import react from "react";
import './FoodCard.css';
function FoodCard(props) {
    return (
        <div className="food-card">
            <img src={props.image} alt={props.name} className="food-card-image" />
            <div className="food-card-content">
                <div className="standard-flex-container" style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 className="food-card-title">{props.name}</h3>
                <p className="food-card-price">${props.price}</p>
                </div>
                <p className="food-card-description">{props.description}</p>
                <p><img src="images/Dish icon.svg"></img> Order a delivery</p>
            </div>
            
        </div>
    );
}

export default FoodCard;