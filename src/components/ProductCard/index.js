import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import { RiShare2Fill } from "react-icons/ri"; // Import share icon
import './index.css'; // Import CSS file for styling

// Functional component for the Product Card
const ProductCard = (props) => {
  // Destructure productDetails and additionalStyles from props
  const { productDetails, additionalStyles } = props;

  
  // Determine styles for share container
  const shareSpecificContainer = additionalStyles !== null ? { paddingBottom: '40%' } : null;

  // Destructure properties from productDetails
  const { id, title, brand, MRP, price, images, discountPercent } = productDetails;
  const brandName = brand[0].name;
  const productCardImage = images[0].src;

  // Share the product
  const shareTheProduct = (e) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
          title,
          images,
          price,
          url: `https://furrlasish.vercel.app/product/${id}`,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Share not supported on this browser, do it the old way.');
    }
  }

  return (
    // Link to product detail page with state
    <Link to={`/product/${id}`} state={productDetails} style={additionalStyles} className='product-card'>
      {/* Share button container */}
      <div className='share-container' style={shareSpecificContainer} >
        <button className='share-button' onClick={shareTheProduct}>
          <RiShare2Fill size={15} color='white' />
        </button>
      </div>

      {/* Product image */}
      <img className='product-card-image' src={productCardImage} alt={title} />

      {/* Text container for product details */}
      <div className='product-card-text-container'>
        <p className='product-brand'>{brandName}</p>
        <p className='product-title'>{title}</p>
        <p className='space-around-container'>
          {/* Product price, MRP, and discount */}
          <span className='price'>Rs. {price.value}</span>  <span className='mrp'>Rs. {MRP.value}</span> <span className='discount'>{discountPercent}%</span>
        </p>
      </div>
    </Link>
  );
}

export default ProductCard; // Export the ProductCard component
