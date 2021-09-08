import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, Products, News, Auth } from './components';

function App() {
  return (
    <>
      <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route exact path="/news">
                    <News />
                </Route>
                <Route exact path="/auth">
                    <Auth />
                </Route>
            </Switch>
        </Router>
    </>
    
  );
}

export default App;
