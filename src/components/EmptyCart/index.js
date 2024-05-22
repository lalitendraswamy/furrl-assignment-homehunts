import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './index.css'

const EmptyCart = () => {
    return (
        <div className='empty-cart-container'> {/* Container for cart */}
            <img src="https://web.furrl.in/_next/static/media/emptyBag.317aed26.svg" alt="empty cart" /> {/* Image for empty cart */}
            <h2>Looks like your shopping bag is empty.</h2> {/* Message indicating empty cart */}
            <Link to="/" style={{ width: '100%' }}> {/* Link to the home page */}
                <button className="cart-buttons continue-shopping">CONTINUE SHOPPING</button> {/* Button to continue shopping */}
            </Link>
            <button className="cart-buttons login">LOGIN</button> {/* Button for login */}
        </div>
    )
}

export default EmptyCart
