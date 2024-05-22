import { useState } from 'react'; // Import useState hook from React
import { BsBoxSeam } from "react-icons/bs"; // Import box seam icon
import './index.css'; // Import CSS file for styling

// List of descriptions with heights and display texts
const descriptionList = [
    {
        height: '150px',
        displayText: "more..." // Text to display when showing less content
    },
    {
        height: "", // No height set to display full content
        displayText: "...less" // Text to display when showing more content
    }
]

// Functional component for product description
const ProductDescription = () => {
    // State for toggling between full and truncated content
    const [index, setIndex] = useState(0);

    return (
        <div>
            {/* Product description heading */}
            <div className='product-detail-heading'>
                <BsBoxSeam size={20} className='product-detail-symbol' /> {/* Box seam icon */}
                <h3>Product Description</h3> {/* Heading */}
            </div>
            {/* List container with dynamic height and overflow hidden */}
            <ul style={{ height: descriptionList[index].height, overflowY: 'hidden', color: 'gray' }}>
                {/* Description items */}
                <li>Our product is crafted using premium materials and superior craftsmanship, ensuring durability and longevity. You can trust that each detail has been meticulously designed and produced to meet the highest standards.</li>
                <li>Engineered for optimal performance, our product delivers reliable and consistent results. Whether for everyday use or special occasions, it is designed to exceed your expectations and provide a seamless experience.</li>
                <li>Equipped with the latest features and a user-friendly interface, our product is easy to use and enhances your daily activities. Its innovative design makes it a versatile addition to your routine, offering convenience and efficiency.</li>
                <li>We are committed to your satisfaction and stand behind our product with excellent customer support. Should you have any questions or concerns, our dedicated team is here to assist you, ensuring a positive experience from purchase to use.</li>
            </ul>
            {/* Toggle button for showing more/less content */}
            <div className='description-toggle'>
                {/* Clickable text to toggle between more and less content */}
                <p onClick={() => setIndex(Math.abs(index-1))}>{descriptionList[index].displayText}</p>
            </div>
        </div>
    );
}

export default ProductDescription; // Export the ProductDescription component
