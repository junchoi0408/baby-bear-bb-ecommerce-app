import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import BannerImg from '../../assets/baby-white-tuxedo.jpg';
import { gsap } from 'gsap';

const Home = ({ products, variant, handleAddToCart }) => {
    const [product, setProducts] = useState(products[0])
    const [variantData, setVariantData] = useState({});

    const handleChange = e => {
        const { name, value } = e.target
        variantData[name] = value;
    }

    useEffect(()=>{
        gsap.from('.hero__subtitle', {opacity: 0, duration: 1, delay: 1, y:10})
        gsap.from('.hero__title', {opacity: 0, duration: 1, delay: 1.1, y:10})
    }, [])

    return (
        <>
            <div className="banner__slide">
                <img src={BannerImg} alt="home page pic" className="banner__img"/>
                <div className="hero__banner">
                    <span className="hero__subtitle">AN INTRODUCTORY</span>
                    <h2 className="hero__title">Hero Banner</h2>
                </div>   
            </div>
            <div className="home__container">
                <p className="home__description">Use this text to share information about your brand with your customers. Describe a product, share announcements, or welcome customers to your store.</p>
                
                <div>
                    <div style={{marginBottom: '1.5em'}}>
                        <h2 className="featured__title">Featured collections</h2>
                        <hr className="hr--small"/>
                    </div>
                    
                    <div className="productLink">
                        <div className="productHome__img__container">
                            <img src={products[0].assets[0].url} alt={products[0].name} />
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
                            
                            <Link to={`products/${product.id}`}>Full details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;