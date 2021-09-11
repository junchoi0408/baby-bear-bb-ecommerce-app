import React from 'react';
import CartItem from './CartItem/CartItem';
import './Cart.css';

const Cart = () => {
    return (
        <>
            <div className="page__container">
                <span style={{fontSize: '30px'}}>Your Cart</span>
            </div>
            <hr className="hr--small"/>
            <div className="cart__container">
                <div className="cart__top">
                    <p>QUANTITY</p>
                    <p>TOTAL</p>
                    <hr className="hr--cart"/>
                </div>
                
                <CartItem />
            
                <div className="subtotal__container">          
                    <hr className="hr--cart"/>
                    <div className="cart__container__subtotal">
                        <div className="subtotal">
                            <p className="subtotal__p">SUBTOTAL</p>
                            <p>$47.98</p>
                        </div>
                        <span style={{fontFamily: 'Arapey, serif', marginBottom: '1em'}}>Tax included. <a style={{color: '#FFB7C5', textDecoration: 'underline'}}>Shipping</a> calculated at checkout.</span>
                        <div className="cart__button__container">
                            <button className="update__button">UPDATE CART</button>
                            <button className="checkout__button">CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;
