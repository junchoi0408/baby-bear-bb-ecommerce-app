import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import './Cart.css';

const Cart = ({ handleUpdateCartQty, handleEmptyCart, cart, handleRemoveFromCart }) => {

    const emptyCart = () => {
        return (
            <div style={{textAlign: 'center'}}>
                <p>Your cart is currently empty.</p>
                <p>Continue browsing <Link to="/products">here.</Link></p>
            </div>
        )
    }

    return (
        <>
            <div className="page__container">
                <span style={{fontSize: '30px'}}>Your Cart</span>
            </div>
            <hr className="hr--small"/>
            {  cart && cart.total_items > 0 ? 
            <>
                <div className="cart__container">
                    <div className="cart__top">
                        <p>QUANTITY</p>
                        <p>TOTAL</p>
                        <hr className="hr--cart"/>
                    </div>
                    
                    {
                        cart.line_items.map((item, index)=>(
                            <CartItem key={index} handleUpdateCartQty={handleUpdateCartQty} item={item} handleRemoveFromCart={handleRemoveFromCart}/>))   
                    }

                    <div className="subtotal__container">          
                        <hr className="hr--cart"/>
                        <div className="cart__container__subtotal">
                            <div className="subtotal">
                                <p className="subtotal__p">SUBTOTAL</p>
                                <p>{ cart.subtotal.formatted_with_symbol }</p>
                            </div>
                            <span style={{fontFamily: 'Arapey, serif', marginBottom: '1em'}}>Tax included. <a style={{color: '#FFB7C5', textDecoration: 'underline'}}>Shipping</a> calculated at checkout.</span>
                            <div className="cart__button__container">
                                <button className="update__button" onClick={handleEmptyCart}>EMPTY CART</button>
                                <button className="checkout__button"><Link to="/checkout">CHECK OUT</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            :
                emptyCart()
            }
        </>
    )
}

export default Cart;
