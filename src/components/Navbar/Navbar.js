import React, { useState } from 'react';
import { Menu, ShoppingCart, Search, Person, Close } from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Nav = () => {

    const [toggle, setToggle] = useState(false);
    
    const handleMenuClick = () => {
        setToggle(toggle => !toggle)
    }

    return (
        <header>
            <div className="announcement">
                <span>FREE SHIPPING ON PURCHASES OVER $75.00</span>
            </div>
            <nav className="navbar__container">
                <div className="menu">
                    <Menu style={{}} onClick={handleMenuClick}/>
                </div>      
                <Link to="/" className="logo">BABYBEAR BB</Link>
                <ul className="nav__list">
                    <li className="nav__home"><Link to='/' className="nav__item nav__show">Home</Link></li>
                    <li className="nav__product"><Link to='/products' className="nav__item nav__show">Products</Link></li>
                    <li className="nav__news"><Link to='/news' className="nav__item nav__show">News</Link></li>
                    <ul className="icon__container">
                        <li className="nav__person"><a className="nav__item nav__show"><Person className="nav__item nav__show"/></a></li>
                        <li className="nav__search"><a className="nav__item nav__show"><Search className="nav__item nav__show"/></a></li>
                        <li className="nav__cart">
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={1} color="primary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </li>
                    </ul>
                </ul>      
            </nav>
            <ul className={toggle ? "nav__menu show" : "nav__menu"}>
                <Close style={{alignSelf: 'flex-end'}} onClick={handleMenuClick}/>
                <li className="nav__home__menu"><Link to='/'>Home</Link></li>
                <li className="nav__product__menu"><Link to='/products'>Products</Link></li>
                <li className="nav__news__menu"><Link to='/news'>News</Link></li>
                <li className="nav__login"><Link to='/auth'>Log in</Link></li>
                <li className="nav__create"><Link to='/auth'>Create Account</Link></li>
            </ul>
        </header>
        
    )
}

export default Nav;
