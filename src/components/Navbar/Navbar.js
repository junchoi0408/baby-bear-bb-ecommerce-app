import React, { useState } from 'react';
import { Menu, ShoppingCart, Search, Person, Close } from '@material-ui/icons';
import './Navbar.css';

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    
    const handleMenuClick = () => {
        setToggle(toggle => !toggle)
    }

    return (
        <>
            <nav className="navbar__container">
                <div className="menu">
                    <Menu onClick={handleMenuClick}/>
                </div>      
                <a href="#" className="logo">BABYBEAR BB</a>
                <ul className="nav__list">
                    <li className="nav__home"><a href="#" className="nav__item nav__show">Home</a></li>
                    <li className="nav__product"><a href="#" className="nav__item nav__show">Products</a></li>
                    <li className="nav__news"><a href="#" className="nav__item nav__show">News</a></li>
                    <ul className="icon__container">
                        <li className="nav__person"><a href="#" className="nav__item nav__show"><Person className="nav__item nav__show"/></a></li>
                        <li className="nav__search"><a href="#" className="nav__item nav__show"><Search className="nav__item nav__show"/></a></li>
                        <li className="nav__cart"><ShoppingCart /></li>
                    </ul>
                </ul>      
            </nav>
            <ul className={toggle ? "nav__menu show" : "nav__menu"}>
                <Close style={{alignSelf: 'flex-end'}} onClick={handleMenuClick}/>
                <li className="nav__home__menu"><a href="#" >Home</a></li>
                <li className="nav__product__menu"><a href="#" >Products</a></li>
                <li className="nav__news__menu"><a href="#" >News</a></li>
                <li className="nav__login"><a href="#" >Log in</a></li>
                <li className="nav__create"><a href="#" >Create Account</a></li>
            </ul>
        </>
        
    )
}

export default Nav;
