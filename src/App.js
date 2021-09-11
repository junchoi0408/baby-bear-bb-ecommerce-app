import React, { useEffect, useState } from 'react';
import { firebaseConfig } from './firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Navbar, Home, Products, News, Auth, ProductLink, Cart, Profile } from './components';
import { commerce } from './commerce';
import { CircularProgress } from '@material-ui/core'

function App() {
    const [firebaseApp, setFirebaseApp] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [productLink, setProductLink] = useState([]);
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        init();
        const auth = getAuth(firebaseApp);
        onAuthStateChanged(auth, user => {
            if(user){
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        })
        setIsLoading(false);
    }, [])

    const init = async () => {
        const firebase = await initializeApp(firebaseConfig);
        setFirebaseApp(firebase);
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
        fetchProducts();
    },[])

    return (
      <>
        {  !isLoading && init ? 
            <Router>
                <Navbar isLoggedIn={isLoggedIn}/>
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
                    <Router exact path="/cart">
                        <Cart />
                    </Router>
                    {   isLoggedIn ?  
                    <Router exact path="/profile">
                        <Profile />
                    </Router>
                    :
                    <Route exact path="/auth">
                        <Auth />
                    </Route>}
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
                :
                <div style={{display: 'flex',justifyContent:'center', alignItems:'center', height: '100vh'}}>
                    <CircularProgress />
                </div>
                
            }
      </>
      
    );
}

export default App;
