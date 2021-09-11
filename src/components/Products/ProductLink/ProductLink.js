import React, { useState, useEffect } from 'react';
import './ProductLink.css';

const ProductLink = ({ product }) => {
    console.log(product)
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
                    { product.variant_groups.map((variant) => {
                        return (
                            <>
                                <span>{variant.name}</span>
                                <div className="radio-toolbar">
                                    { variant.options.map((option, index) => {
                                        return (
                                            <>
                                                <input type="radio" id={`radio${option.name}`} name={`radio${variant.name}`} value={`${option.name}`} defaultChecked={index === 0}/>
                                                <label for={`radio${option.name}`}>{option.name}</label>
                                            </>
                                        )
                                    }
                                        
                                    )}
                                </div>
                            </>
                        )
                    })}

                    <button className="btn__addToCart">ADD TO CART</button>
                    <button className="btn__buyItNow">BUY IT NOW</button>
                </form>
                
                <div className="product__description" dangerouslySetInnerHTML={{ __html: product.description }}>
                    
                </div>
            
                <div className="productlink__recommendation__container">
                    <h2>You may also like</h2>
                </div>
             
            </div>
        </>
    )
}

export default ProductLink;
