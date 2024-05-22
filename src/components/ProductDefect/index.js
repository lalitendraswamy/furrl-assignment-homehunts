import { useState } from 'react'; // Import useState hook from React
import { FaChevronDown, FaChevronUp } from "react-icons/fa6"; // Import chevron icons
import { IoBulbOutline } from "react-icons/io5"; // Import bulb icon
import './index.css'; // Import CSS file for styling

// Functional component for product defects section
const ProductDefect = () => {
    // State for extending/collapsing content
    const [extend, setExtend] = useState(false);

    return (
        <div>
            <div className="space-between-container"> {/* Container for heading and toggle button */}
                {/* Product detail heading */}
                <div className='product-detail-heading product-defect-heading'>
                    <IoBulbOutline size={20} className='product-detail-symbol' /> {/* Bulb icon */}
                    <h3>Defective product returns enabled</h3> {/* Heading */}
                </div>
                {/* Toggle button for extending/collapsing content */}
                <button className="transparent-button" onClick={() => setExtend(!extend)}>
                    {extend ? <FaChevronUp /> : <FaChevronDown />} {/* Chevron icon for toggle */}
                </button>
            </div>
            {/* Extended content */}
            {
                extend && <div style={{ color: 'gray' }}>
                    {/* Information about defective product returns */}
                    <p>Furrl takes pride in bringing you new-age homegrown brands that create pieces for you with utmost care and pleasure! </p>
                    <ul>
                        <li>This brand has enabled returns for any defects on this product.</li>
                        <li>A replacement or return request for a product defect needs to be raised within 3 days of delivery.</li>
                    </ul>
                </div>
            }
        </div>
    );
}

export default ProductDefect; // Export the ProductDefect component
