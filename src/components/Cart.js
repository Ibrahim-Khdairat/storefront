
import React from 'react';
import { connect } from "react-redux";
import {deleteFromCart} from '../store/Cart'

function Cart(props) {
    console.log("props.cart : " ,props.cart);
    return (
        <>
        <h1>Cart</h1>
        <ul >
            { props.cart.cart.map((ele, index) => {
                return (
                    <li key={index} >

                        <span onClick={()=>{props.deleteFromCart(ele, index)}} >{`${index+1} - `}❌</span>
                        <span>{ele.name}</span>
                        
                    </li>
                )

            })}

        </ul>
        </>
    )
}

const mapStateToprops = (state) => ({
    cart: state.ReduceCart 
});
const mapDispatchToProps={deleteFromCart}

export default connect(mapStateToprops,mapDispatchToProps)(Cart);
