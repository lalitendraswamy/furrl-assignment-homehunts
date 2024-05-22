import { TbTruckDelivery } from "react-icons/tb"; // Import truck delivery icon
import { FaChevronDown, FaChevronUp } from "react-icons/fa6"; // Import chevron icons
import './index.css'; // Import CSS file for styling
import { useState } from "react"; // Import useState hook from React

// Functional component for product delivery section
const ProductDelivery = () => {
    // State for extending/collapsing content
    const [extend, setExtend] = useState(false);

    return (
        <div>
            <div className="space-between-container"> {/* Container for heading, caption, and toggle button */}
                <div>
                    {/* Product delivery heading and caption */}
                    <div className='product-detail-heading delivery-heading'>
                        <TbTruckDelivery size={20} className='product-detail-symbol' /> {/* Truck delivery icon */}
                        <h3>Delivery</h3> {/* Heading */}
                    </div>
                    <p className="product-detail-caption">Usually ships in 2-3 working days.</p> {/* Delivery caption */}
                </div>
                {/* Toggle button for extending/collapsing content */}
                <button className="transparent-button" onClick={() => setExtend(!extend)}>
                    {extend ? <FaChevronUp /> : <FaChevronDown />} {/* Chevron icon for toggle */}
                </button>
            </div>
            {/* Extended content */}
            {
                extend && <div>
                    <p className="product-detail-caption">Enter pincode to check serviceability</p> {/* Instruction to enter pincode */}
                    {/* Container for pincode input and check button */}
                    <div className="space-between-container pin-code-container">
                        <input type="text" className="transparent-button" placeholder="Enter Pincode" /> {/* Pincode input field */}
                        <button type="button" className="transparent-button">Check</button> {/* Check button */}
                    </div>
                </div>
            }
        </div>
    );
}

export default ProductDelivery; // Export the ProductDelivery component
