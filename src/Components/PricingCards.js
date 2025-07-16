import React from "react";
import "./PricingCardsStyles.css";
import { Link } from "react-router-dom";

const PricingCards = () => {
    return (
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>- Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc">$5000 - $50000</p>
                    <p>- Simple App (Basic UI) -</p>
                    <p>- Minimal Features -</p>
                    <p>- Featured -</p>
                    <p>- Resposive Design -</p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW
                    </Link>
                 </div>
                 
                 <div className="card">
                    <h3>- Advanced -</h3>
                    <span className="bar"></span>
                    <p className="btc">$15000 - $35000</p>
                    <p>- Mid-Level App -</p>
                    <p>- Advanced UI -</p>
                    <p>- API Integrations, Backend -</p>
                    <p>- Resposive Design -</p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW
                    </Link>
                 </div>
                 
                 <div className="card">
                    <h3>- Premium -</h3>
                    <span className="bar"></span>
                    <p className="btc">$35000 - $80000</p>
                    <p>- Complex App -</p>
                    <p>- Real-time Features -</p>
                    <p>- AI/ML High customization -</p>
                    <p>- Resposive Design -</p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW
                    </Link>
                 </div>
            </div>
            
        </div>
    )
}


export default PricingCards;