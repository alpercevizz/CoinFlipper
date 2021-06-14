import React from 'react';
import "./Coin.css";
import CoinFront from '../../Assets/1-lira-yazi.png';
import CoinBack from '../../Assets/1-lira-tura.png';

class Coin extends React.Component{
    render(){
        return(
            <div className="Coin-container">
                <div className={`Coin ${this.props.flipping ? "Coin-rotate" : ""}`}>
                    <img src={CoinFront} className={this.props.side==="yazi" ? "Coin-back" : "Coin-front"} />
                    <img src={CoinBack} className={this.props.side==="yazi" ? "Coin-front" : "Coin-back"} />
                </div>
            </div>
        );
    }
}
export default Coin;