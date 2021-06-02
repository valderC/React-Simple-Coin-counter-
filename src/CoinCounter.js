import React, { Component } from 'react'; 
import { choice } from './helper'; 
import Coin from './Coin'; 

class CoinCounter extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL._AC_.jpg'},
            {side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'}
        ]
    }; 
    constructor(props){
        super(props); 
        this.state = {
            // represents the coin itself 
            currCoin: null, 
            flips: 0, 
            heads: 0, 
            tails: 0, 
        }
        this.handleClick = this.handleClick.bind(this); 
    }
    flipCoin(){
        const newCoin = choice(this.props.coins); 

        //set state 
        this.setState(st => {
            return {
                currCoin:  newCoin, 
                flips: st.flips + 1, 
                heads: st.heads + (newCoin.side === 'heads' ? 1: 0), 
                tails: st.tails + (newCoin.side == 'tails' ? 1: 0 ),
                clicked: true
            }; 
        })
    }
    handleClick(e){
        this.flipCoin(); 
    }
    render(){
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                {(this.state.currCoin) &&  <Coin info={this.state.currCoin} /> }
                <button onClick={this.handleClick}>Flip Me</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }
}
export default CoinCounter; 