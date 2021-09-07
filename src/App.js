import './App.css';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <header>
        <div className="announcement">
          <span>FREE SHIPPING ON PURCHASES OVER $75.00</span>
        </div>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
