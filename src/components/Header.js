import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

 function Header(props) {
    return (
        <div className="header">

            <Navbar  id="nav">
                <Link to="/" className="title" ><Navbar.Brand id='title' > Our Store </Navbar.Brand></Link>

                <Link to="/" className="pages">Home</Link>
                <Link to="/cart" className="pages">Cart ({props.count}) </Link>

            </Navbar>
        </div>
    )
}

const mapStateToprops = (state) => ({
    count: state.ReduceCart.count
});

export default connect(mapStateToprops)(Header);


