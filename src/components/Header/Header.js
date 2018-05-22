import React, { Component } from "react";
import "./Header.css"
import "font-awesome/css/font-awesome.min.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux"; 
import { toggleHamburgerBtn } from "../../ducks/viewReducer";

class Header extends Component {
   
    render() {
        const { burgerFlag } = this.props;
        return (
            <div>
                <div className="header-wrapper">
                    <div className="header-container">
                        <div className="burger" onClick={() => this.props.toggleHamburgerBtn()}>
                            <div className={burgerFlag ? "top" : "top topBun"} />
                            <div className={burgerFlag ? "middle" : null} />
                            <div className={burgerFlag ? "bottom" : "bottom bottomBun"} />
                        </div>
                        <div className="logo-wrapper">
                            <Link to="/" className="header-links logo-container">
                                <h2>WishTrip</h2>
                                <i className="fa fa-plane plane-icon"></i>
                            </Link>
                        </div>
                        <div className="links-container">
                            <Link to="/" className="header-links">Home</Link>
                            <Link to="/login" className="header-links">Login</Link>
                            <Link to="/plan" className="header-links">Plan</Link>
                            <Link to="/profile" className="header-links">Profile</Link>
                            <Link to="/trips" className="header-links">Trips</Link>
                        </div>
                    </div>
                </div>
                {!burgerFlag ? (
                    <div className="hamburger-links-container">
                        <Link to="/" className="hamburger-links">Home</Link>
                        <Link to="/login" className="hamburger-links">Login</Link>
                        <Link to="/plan" className="hamburger-links">Plan</Link>
                        <Link to="/profile" className="hamburger-links">Profile</Link>
                        <Link to="/trips" className="hamburger-links">Trips</Link>
                    </div>
                ) : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.viewReducer
})

export default connect(mapStateToProps, { toggleHamburgerBtn })(Header);