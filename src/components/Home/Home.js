import React, { useState, useEffect } from 'react';
import './Home.css';
import BannerImg from '../../assets/baby-white-tuxedo.jpg';

const Home = ({ ProductLink, products, handleAddToCart, getProduct }) => {
    const [home, setHome] = useState(true);
    const [product, setProduct] = useState({})

    useEffect(()=> {
        if (Object(products).length > 0) {
            setProduct(products[0])
        }
    }, [])

    return (
        <>
            <div className="banner__slide">
                <img src={BannerImg} alt="home page pic" className="banner__img"/>
            </div>
            <div className="home__container">
                <div className="introductory__container">
                    <span>AN INTRODUCTORY</span>
                    <h2>Hero Banner</h2>
                    <p>Use this text to share information about your brand with your customers. Describe a product, share announcements, or welcome customers to your store.</p>
                </div>
                <div>
                    <h2>Featured collections</h2>
                        {/* <ProductLink products={products} item={product} handleAddToCart={handleAddToCart} home={home}/> */}
                    <a>Full details</a>
                </div>
            </div>
        </>
    )
}

export default Home;
