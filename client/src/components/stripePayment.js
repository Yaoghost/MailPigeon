import React, { Component } from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckOut 
                name="MailPigeon"
                description="$5 for 5 emails"
                amount={500} // 500 cents --> 5 dollars
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Credits</button>
            </StripeCheckOut>
        );
    }
}


export default connect(null, actions)(Payments) ;