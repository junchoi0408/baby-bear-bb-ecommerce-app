import React, { useEffect, useState } from 'react';
import { firebaseConfig } from './firebase';
import { initializeApp } from 'firebase/app';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Navbar, Home, Products, News, Auth, ProductLink } from './components';
import { commerce } from './commerce';

function App() {
    const [products, setProducts] = useState([]);
    const [productLink, setProductLink] = useState([]);
    const [product, setProduct] = useState({});

    const init = async () => {
        await initializeApp(firebaseConfig);
    }

    const getProduct = (product) => {
        setProduct(product);
    };

    const handleProductLinkClick = (productLink) => {
        setProductLink(productLink);
    }

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }
  
    useEffect(()=>{
      init();
    }, [])

    useEffect(()=>{
        fetchProducts();
    },[])

    return (
      <>
          <Router>
              <Navbar />
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route exact path="/products">
                      <Products products={products} getProduct={getProduct} handleProductLinkClick={handleProductLinkClick}/>
                  </Route>
                  <Route exact path="/news">
                      <News />
                  </Route>
                  <Route exact path="/auth">
                      <Auth />
                  </Route>
                  <Router exact path={`/${productLink}`}>
                        <ProductLink product={product}/> 
                  </Router>
                  <Redirect from={`${productLink}`} to="/products" />
              </Switch>
              <footer className="footer__container">
                  <div>
                      <hr className="hr--large" />
                      <span>Copyright &copy;{new Date().getFullYear()}, BabyBear BB </span>
                  </div>
                  
              </footer>
          </Router>
      </>
      
    );
}

export default App;
