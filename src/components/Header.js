import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">

            <Navbar  id="nav">
                <Link to="/" className="title" ><Navbar.Brand id='title' > Our Store </Navbar.Brand></Link>

                <Link to="/" className="pages">Home</Link>
                <Link to="/cart" className="pages">Cart </Link>

            </Navbar>
        </div>
    )
}

