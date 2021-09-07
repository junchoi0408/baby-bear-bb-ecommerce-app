import React from 'react';
import './Home.css';
import BannerImg from '../../assets/baby-white-tuxedo.jpg';

const Home = () => {
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
                    <img src="" className="product" alt="product image" />
                    <h1>Baby Romper Bodysuit</h1>
                    <span>$22.99</span>
                    <div>Tax included. <a>Shipping</a> calculated at checkout.</div>
                    <span>Colors</span>
                    <div>
                        <button>WHITE</button>
                        <button>PINK</button>
                        <button>GREY</button>
                        <button>BROWN</button>
                    </div>
                    <span>Size</span>
                    <div>
                        <button>0-3 MONTHS</button>
                        <button>3-6 MONTHS</button>
                        <button>6-9 MONTHS</button>
                        <button>9-12 MONTHS</button>
                    </div>
                    <div>
                        <button>ADD TO CART</button>
                        <button>BUY IY NOW</button>
                    </div>
                    <a>Full details</a>
                </div>
            </div>
        </>
    )
}

export default Home;
