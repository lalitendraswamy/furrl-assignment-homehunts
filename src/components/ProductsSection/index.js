import ProductCard from '../ProductCard'; // Import ProductCard component
import './index.css'; // Import CSS file for styling

// Functional component for products section
const ProductsSection = (props) => {
    const { productsList } = props; // Destructure productsList from props

    return (
        <div className='products-container'> {/* Container for products */}
            {productsList.map((eachProduct, index) => { // Map through productsList
                // Set additional styles for every third product on small screens
                const additionalStyles = ((index + 1) % 5 === 3 && window.innerWidth <= 768) ? { width: '100%', height: 'fit-content' } : null;
                return <ProductCard key={eachProduct.id} productDetails={eachProduct} additionalStyles={additionalStyles} />; // Render ProductCard component for each product
            })}
        </div>
    );
}

export default ProductsSection; // Export the ProductsSection component
