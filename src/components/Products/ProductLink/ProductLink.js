import React, { useState, useEffect } from 'react';
import './ProductLink.css';

const ProductLink = ({ product }) => {

    return (
        <>
            <div>
                <img src={product.media.source} alt="baby bear sweatsuit sets" />
            </div>
            <div className="productLink__container">
                
                <h1 style={{fontSize: '30px', fontWeight: '300', padding: '0 1em', textAlign: 'center', margin: '1em 0'}}>{product.name}</h1>
                <span style={{marginBottom: '1.5em', fontSize: '18px', fontFamily: 'Montserrat, sans-serif', fontWeight:'600', letterSpacing: '0.1em'}}>{product.price.formatted_with_symbol}</span>

                <span style={{fontFamily: 'Arapey, serif', marginBottom: '1em'}}>Tax included. <a style={{color: '#FFB7C5', textDecoration: 'underline'}}>Shipping</a> calculated at checkout.</span>
                <hr className="hr--small"/>
                <form className="productlink__form__container">
                    <span>Color</span>
                    <div class="radio-toolbar">
                        <input type="radio" id="radioWhite" name="radioColor" value="white" defaultChecked/>
                        <label for="radioWhite">WHITE</label>
                        <input type="radio" id="radioBlack" name="radioColor" value="black"/>
                        <label for="radioBlack">BLACK</label> 
                    </div>
                    <span>Size</span>
                    <div class="radio-toolbar">
                        <input type="radio" id="radio90" name="radioSize" value="90" defaultChecked/>
                        <label for="radio90">90</label>
                        <input type="radio" id="radio100" name="radioSize" value="100" />
                        <label for="radio100">100</label> 
                        <input type="radio" id="radio110" name="radioSize" value="110" />
                        <label for="radio110">110</label>
                        <input type="radio" id="radio120" name="radioSize" value="120" />
                        <label for="radio120">120</label> 
                    </div>
                    <button className="btn__addToCart">ADD TO CART</button>
                    <button className="btn__buyItNow">BUY IT NOW</button>
                </form>
                
                <div className="product__description" dangerouslySetInnerHTML={{ __html: product.description }}>
                    
                </div>
            
                <div className="productlink__recommendation__container">
                    <h2>You may also like</h2>
                </div>
                {console.log(product)}
            </div>
        </>
    )
}

export default ProductLink;
