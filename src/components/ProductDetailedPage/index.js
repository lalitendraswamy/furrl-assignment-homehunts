import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation hook from react-router-dom
import { FaStar } from "react-icons/fa"; // Import star icon
import Loader from "../Loader"; // Import Loader component
import ProductImages from "../Carousel"; // Import ProductImages component
import ProductDescription from "../ProductDescription"; // Import ProductDescription component
import ProductDelivery from "../ProductDelivery"; // Import ProductDelivery component
import ProductDefect from "../ProductDefect"; // Import ProductDefect component
import AppsSection from "../AppsSection"; // Import AppsSection component
import Footer from "../Footer"; // Import Footer component
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import './index.css'; // Import CSS file for styling

const ProductDetailedPage = () => {
    const location = useLocation(); // Get location object
    const ProductDetails = location.state

    const { title, brand, MRP, price, discountPercent } = ProductDetails;
    const brandName = brand[0].name;

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = () => {
        dispatch(addToCart(ProductDetails))
        navigate("/cart")
    }

    return (
        <>
            {ProductDetails ?
                <div className="big-screen-product-detail-page">
                    <ProductImages ImagesList={ProductDetails.images} />
                    <div className="details-container">
                        <div className="space-between-container brand-container">
                            <h3>{brandName}</h3>
                            <div className="brand-reviews">
                                <FaStar />
                                <span>Brand reviews</span>
                            </div>
                        </div>
                        <h2 className="product-name">{title}</h2>
                        <div className="space-between-container">
                            <p>
                                <span className='price'>Rs. {price.value}</span>
                                <span className='mrp'>Rs. {MRP.value}</span>
                                <span className='discount'>{discountPercent}% off</span>
                            </p>
                            <p style={{ color: '#7c5be7' }}>Size Chart</p>
                        </div>
                        <button onClick={handleAddToCart} className="big-screen-button add-to-bag-button">Add to Bag</button>
                        <hr className="line-break" />
                        <img className="coupon-image" src="https://web.furrl.in/_next/static/media/first-coupon.ba35be4f.png" alt="coupon" />
                        <hr className="line-break" />
                        <ProductDescription />
                        <hr className="line-break" />
                        <ProductDelivery />
                        <hr className="line-break" />
                        <ProductDefect />
                        <hr className="line-break" />
                        <AppsSection />
                        <hr className="line-break" />
                        <Footer />
                    </div>
                    <div className="add-to-bag">
                        <img src="https://cdn.furrl.in/vibes/AboveATCbanner-2.png" alt="vibes" style={{ width: '100%' }} />
                        <button onClick={handleAddToCart} className="add-to-bag-button">Add to Bag</button>
                    </div>

                </div>
                : <Loader />
            }
        </>
    );
}

export default ProductDetailedPage;
