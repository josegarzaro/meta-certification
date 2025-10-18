import react from "react";
import './TestimonyCard.css';
function TestimonyCard(props) {
    return (
        <div className="testimony-card">
            <div className="standard-flex-container" style={{justifyContent: 'center', alignItems: 'center'}} >
                <img src={props.image} alt={props.name} className="testimony-card-image" />
                <h3 className="testimony-card-name">{props.name}</h3>
            </div>
            <div className="testimony-card-content">

                <p className="testimony-card-testimony">"{props.testimony}"</p>
            </div>
        </div>
    );
}

export default TestimonyCard;