import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductLink.css';

const ProductLink = ({ products, getProduct, item, handleAddToCart }) => {
    const [product, setProduct] = useState(item)
    const { productId } = useParams();

    const [slider, setSlider] = useState(false);
    const [variantData, setVariantData] = useState({});

    const handleChange = e => {
        const { name, value } = e.target
        variantData[name] = value;
    }

    useEffect(()=> {
        if (Object.keys(item).length === 0 && products.length > 0) {
            const prod = (products.find(product => product.id === productId))
            setProduct(prod)
        }
    })
    
    return (
        <>
            { Object.keys(product).length > 0 &&
                <>
                    <div className="productLink">
                        <div className="productLink__img__container">
                            { !slider && product.assets.map((asset) => {
                                return <img src={asset.url} alt={product.name} />
                            }) }
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
                                                    if (index===0)  variantData[variant.id] = option.id
                                                    return (
                                                        <>               
                                                            <input type="radio" id={`${option.id}`} name={`${variant.id}`} value={`${option.id}`} onClick={handleChange} defaultChecked={index === 0}/>
                                                            <label for={`${option.id}`}>{option.name}</label>              
                                                        </>
                                                    )
                                                }
                                                    
                                                )}
                                            </div>
                                        </>
                                    )
                                })}

                                <button type="button" className="btn__addToCart" onClick={() => handleAddToCart(product.id, 1, variantData)}>ADD TO CART</button>
                                <button type="button" className="btn__buyItNow">BUY IT NOW</button>
                            </form>
                            
                            <div className="product__description" dangerouslySetInnerHTML={{ __html: product.description }}>
                                
                            </div>
                        </div>
                    </div>
                    <div className="productlink__recommendation__container" style={{textAlign: 'center'}}>
                        <h2>You may also like</h2>
                    </div>
                </>
            }
        </>
    )
}

export default ProductLink;
