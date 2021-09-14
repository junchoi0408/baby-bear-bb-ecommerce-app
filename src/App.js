import React, { useEffect, useState } from 'react';
import { firebaseConfig } from './firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { commerce } from './lib/commerce';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Navbar, Home, Products, News, Auth, ProductLink, Cart, Profile, Checkout } from './components';
import { CircularProgress } from '@material-ui/core'
import './App.css';

function App() {
    const [firebaseApp, setFirebaseApp] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [productLink, setProductLink] = useState([]);
    const [product, setProduct] = useState({});
    const [cart, setCart] = useState({});
    const [variant, setVariant] = useState({})
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

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

    useEffect(()=>{
        setIsLoading(true);
        fetchProducts();
        fetchCart();
        setIsLoading(false);
    },[])

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
        setIsLoading(true);
        const { data } = await commerce.products.list();
        setProducts(data);
        setIsLoading(false);
    }
  
    const fetchCart = async () => {
        setIsLoading(true);
        setCart(await commerce.cart.retrieve());
        setIsLoading(false);
    }

    const handleAddToCart = async (productId, quantity, variantData) => {
        const { cart } = await commerce.cart.add(productId, quantity, variantData);
        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        setIsLoading(true);
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
        setIsLoading(false);
    }

    const handleEmptyCart = async () => {
        setIsLoading(true);
        const { cart } = await commerce.cart.empty();
        setCart(cart);
        setIsLoading(false);
    }

    const handleUpdateCartQty = async (productId, quantity, variant) => {
        setIsLoading(true);
        
        if (!quantity) {
            quantity = 0;
        }

        const { cart } = await commerce.cart.update(productId, { quantity }, variant);

        setCart(cart);
        setIsLoading(false);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try { 
            console.log(newOrder)
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message)
        }
    }

    return (
      <>
        {  !isLoading && init ? 
            <Router>
                <Navbar isLoggedIn={isLoggedIn} totalItems={cart.total_items}/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/products">
                        <Products products={products} getProduct={getProduct} handleProductLinkClick={handleProductLinkClick}/>
                    </Route>
                    { !isLoading && products.length > 0 ?
                       <Route path={`/products/:productId`}>
                            <ProductLink products={products} item={product} handleAddToCart={handleAddToCart}/>
                        </Route>
                        :
                        <div style={{display: 'flex',justifyContent:'center', alignItems:'center', height: '100vh'}}>
                            <CircularProgress />
                        </div>
                    }
                    <Route exact path="/news">
                        <News />
                    </Route>
                    <Router exact path="/cart">
                        <Cart handleUpdateCartQty={handleUpdateCartQty} handleEmptyCart={handleEmptyCart} cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
                    </Router>
                    <Route exact path="/checkout">
                        <Checkout 
                            cart={cart} 
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage}/>
                    </Route>
                    { isLoggedIn ?  
                    <Router exact path="/profile">
                        <Profile />
                    </Router>
                    :
                    <Route exact path="/auth">
                        <Auth />
                    </Route>
                    }
                </Switch>
                <footer className="footer__container">
                    <div>
                        <hr className="hr--large" />
                        <span>Copyright &copy;{new Date().getFullYear()}, BabyBear BB </span>
                    </div>
                </footer>
                </Router>
                :
                <>
                    <div style={{display: 'flex',justifyContent:'center', alignItems:'center', height: '100vh'}}>
                        <CircularProgress />
                    </div>
                </>
            }
      </>
      
    );
}

export default App;
