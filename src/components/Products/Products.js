import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Grid } from '@material-ui/core';
import Product from './Product/Product'
import './Products.css';

const Products = ({ products, handleProductLinkClick, getProduct }) => {
    
    useEffect(()=>{
        gsap.from('.grid__container', {opacity: 0, duration: 1, delay: 1, y:10})
    }, [])
    
    return (
        <>
            <div className="page__container">
                <span style={{fontSize: '30px'}}>Products</span>
            </div>
            <hr className="hr--small"/>
            <div className="grid__container">
                <Grid container justifyContent="center" alignContent="center" spacing={0}>
                    {
                        products.map((product)=>(
                            <Grid item key={product.id} xs={24} sm={12} md={6} lg={4}>
                                <Product key={product.id} getProduct={getProduct} product={product} handleProductLinkClick={handleProductLinkClick}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>       
        </>
    )
}

export default Products;
