import React from 'react';
import Product from './Product/Product'
import './Products.css';

const Products = ({ products, handleProductLinkClick, getProduct }) => {
    return (
        <>
            <div className="page__container">
                <span style={{fontSize: '30px'}}>Products</span>
            </div>
            <hr className="hr--small"/>
            <div> 
                {
                    products.map((product)=>{
                        return <Product key={product.id} getProduct={getProduct} product={product} handleProductLinkClick={handleProductLinkClick}/>
                    })
                }
            </div>
        </>
    )
}

export default Products;
