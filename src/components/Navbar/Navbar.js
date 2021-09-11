import React, { useState } from 'react';
import { Menu, ShoppingCart, Search, Person, Close } from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './Navbar.css';

const Nav = ({ isLoggedIn }) => {
    const location = useLocation();

    const [toggle, setToggle] = useState(false);
    
    const handleMenuClick = () => {
        setToggle(toggle => !toggle)
    }

    return (
        <header>
            { location.pathname === '/' &&
                <div className="announcement">
                    <span>FREE SHIPPING ON PURCHASES OVER $75.00</span>
                </div>
            }
            <nav className="navbar__container">
                <div className="menu">
                    <Menu onClick={handleMenuClick}/>
                </div>      
                <Link to="/" className="logo">BABYBEAR BB</Link>
                <ul className="nav__list">
                    <li className="nav__home"><Link to='/' className="nav__item nav__show">Home</Link></li>
                    <li className="nav__product"><Link to='/products' className="nav__item nav__show">Products</Link></li>
                    <li className="nav__news"><Link to='/news' className="nav__item nav__show">News</Link></li>
                    <ul className="icon__container">
                        <li className="nav__person">
                            <IconButton component={Link} to={!isLoggedIn ? "/auth" : "/profile"} aria-label="Show profile" color="inherit">
                                <Person className="nav__item nav__show"/>
                            </IconButton>
                        </li>     
                        <li className="nav__search">
                            <IconButton aria-label="Show search" color="inherit">
                                <Search className="nav__item nav__show"/>
                            </IconButton>
                        </li>
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
            <ul className={toggle ? "nav__menu show" : "nav__menu"} onClick={handleMenuClick}>
                <Close style={{alignSelf: 'flex-end', cursor:'pointer'}} onClick={handleMenuClick}/>
                <li className="nav__home__menu"><Link to='/'>Home</Link></li>
                <li className="nav__product__menu"><Link to='/products'>Products</Link></li>
                <li className="nav__news__menu"><Link to='/news'>News</Link></li>
            {   !isLoggedIn ? 
                <>
                    <li className="nav__login"><Link to='/auth'>Log in</Link></li>
                    <li className="nav__create"><Link to='/auth'>Create Account</Link></li>
                </>
                :
                <li className="nav__login"><Link to='/profile'>Profile</Link></li>
            }
            </ul>
        </header>
    )
}

export default Nav;
