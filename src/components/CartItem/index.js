import './index.css'

import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../actions/cartActions'
import { IoClose } from "react-icons/io5";

const CartItem = (props) => {

    const { productDetails } = props
    const { title, brand, MRP, price, images, discountPercent } = productDetails;
    const brandName = brand[0].name;
    const productCardImage = images[0].src;
    const dispatch = useDispatch()

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(productDetails))
    }

    return (
        <div className='cart-item-container'>
            <img src={productCardImage} alt="product" className='cart-item-image' />
            <div className='cart-item-text-container'>
                <p>{title}</p>
                <p>{brandName}</p>
                <p className='space-around-container'>
                    {/* Product price, MRP, and discount */}
                    <span className='price'>Rs. {price.value}</span>  <span className='mrp'>Rs. {MRP.value}</span> <span className='discount'>{discountPercent}%</span>
                </p>
            </div>

            <div>
                <button className='transparent-button remove-from-cart-btn' onClick={handleRemoveFromCart}>
                    <IoClose size={15} />
                </button>
            </div>

        </div>
    )
}

export default CartItem
