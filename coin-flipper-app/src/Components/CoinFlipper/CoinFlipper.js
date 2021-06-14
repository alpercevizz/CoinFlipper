import React from 'react';
import "../CoinFlipper/CoinFlipper.css";
import Coin from '../Coin/Coin';

class CoinFlipper extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            side:"tura",
            flipping: false,
            counter:0,
            tura:0,
            yazi:0
        };
    }

    flippingCoin = ()=> {
        this.setState({
            flipping:true,
            counter: this.state.counter+1
        }, ()=> {
            if(Math.random() < 0.5) {
                this.setState({side:"tura", tura: this.state.tura+1})
            }
            else {
                this.setState({side:"yazi", yazi: this.state.yazi+1})
            }
        });
        setTimeout(()=> this.setState({flipping:false}),1000);
    };

    render() {
        return(
            <div className="CoinFlipper">
                <h1>Yazı mı Tura mı?</h1>
                <Coin side={this.state.side} flipping=  {this.state.flipping} />
                <button onClick={this.flippingCoin}>At!</button>
                <p>
                    Toplam
                    <strong>{this.state.counter}</strong> atıştan
                    <strong>{this.state.tura}</strong> ü tura
                    <strong>{this.state.yazi}</strong> si yazı geldi.
                </p>
            </div>
        );
    }
}

export default CoinFlipper;