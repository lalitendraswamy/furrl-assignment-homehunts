import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetailedPage from './components/ProductDetailedPage';
import Wishlist from './components/Wishlist';

// Main application component
const App = () => {
  return (
    <BrowserRouter>
      {/* Header component, displayed on all pages */}
      <Header />
      <Routes>
        {/* Route for the Home component */}
        <Route path="/" exact Component={Home} />
        {/* Route for the Cart component */}
        <Route path="/cart" exact Component={Cart} />
        {/* Route for the Wishlist component */}
        <Route path="/wishlist" exact Component={Wishlist} />
        {/* Route for the Product Detailed Page component, with dynamic product ID */}
        <Route path="/product/:id" exact Component={ProductDetailedPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
