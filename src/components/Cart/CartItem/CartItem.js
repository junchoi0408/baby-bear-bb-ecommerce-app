import React from 'react'
import babyImg from '../../../assets/baby_bunny_snow_coat.jpg'

const CartItem = () => {
    return (
        <div className="cart">
            <div className="cart__product">
                <img src={babyImg} alt="product img" />
                <div className="cart__product__description">
                    <h4>BABY BUNNY SNOW COAT</h4>
                    <span>Pink / 70 (0-12 M)</span>
                    <p>Remove</p>
                </div>

            </div>
            <div className="cart__item__price" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <input type="number" placeholder="1" style={{marginRight:'3em', width: '80px', height: '43px', textAlign: 'center', fontSize: '16px', fontWeight: 600}}/>
                <span style={{marginLeft: '3em'}}>$47.98</span>
            </div>
        </div>
    )
}

export default CartItem;
