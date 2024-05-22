import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './index.css'; // Import CSS file for styling

// Functional component for wishlist
const Wishlist = () => {
  return (
    <div className='empty-cart-container'> {/* Container for wishlist */}
      <img src="https://web.furrl.in/_next/static/media/emptyWishlist.c12c0656.svg" alt="empty wishlist" /> {/* Image for empty wishlist */}
      <h2>Looks like your wishlist is empty.</h2> {/* Message for empty wishlist */}
      <Link to="/" style={{ width: '100%' }}> {/* Link to continue shopping */}
        <button className="cart-buttons login">CONTINUE SHOPPING</button> {/* Continue shopping button */}
      </Link>
    </div>
  );
};

export default Wishlist; // Export the Wishlist component
