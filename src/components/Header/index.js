import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import { CiBookmark } from "react-icons/ci"; // Import bookmark icon
import { IoBagHandleOutline } from "react-icons/io5"; // Import shopping bag icon
import { useSelector } from 'react-redux';
import './index.css'; // Import CSS file for styling

// Functional component for the Header
const Header = () => {

    const CartMainReducer = useSelector(state => state.CartMainReducer)
    const { cartList } = CartMainReducer

    return (
        <nav className='header-container'> {/* Container for header */}
            <Link to='/' className='link-tag'> {/* Link to home page */}
                
                <img src='https://info.furrl.in/wp-content/uploads/2022/09/Untitled-1.png' alt='logo' />
            </Link>

            <div className='nav-items-container'> {/* Container for navigation items */}
                <Link to="/wishlist" className='link-tag'> {/* Link to wishlist */}
                    <CiBookmark size={25} /> {/* Bookmark icon */}
                </Link>
                <div>
                    {cartList.length !== 0 && <span className='cart-count'>{cartList.length}</span>}
                    <Link to="/cart" className='link-tag cart-logo'> {/* Link to cart */}
                        <IoBagHandleOutline size={25} /> {/* Shopping bag icon */}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header; // Export the Header component
