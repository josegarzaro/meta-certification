import react from "react";
import './FoodCard.css';
function FoodCard(props) {
    return (
        <div className="food-card">
            <img src={props.image} alt={props.name} className="food-card-image" />
            <div className="food-card-content">
                <h3 className="food-card-title">{props.name}</h3>
                <p className="food-card-description">{props.description}</p>
                <p className="food-card-price">${props.price}</p>
            </div>
            <p>Order a delivery</p>
        </div>
    );
}

export default FoodCard;