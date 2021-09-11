import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product, handleProductLinkClick, getProduct }) => {
    return (
        <>
        { product ?    
            <div className="product__container">
                <Link onClick={() => {
                    handleProductLinkClick(`products/${product.name.split(' ').join('-')}`)
                    getProduct(product)
                }
                } to={`products/${product.name.split(' ').join('-')}`} exact path>
                    <div className="product__img">
                        <img src={product.media.source} alt={product.name} />
                    </div>
                </Link>          
                <span style={{width: '345px', textAlign: 'center'}}>{product.name} - <b style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-seriif', letterSpacing: '0.1em'}}>{product.price.formatted_with_symbol}</b></span>
            </div>
            : 
            <div>
                Loading...
            </div>
            }
        </>
    )
}

export default Product;
