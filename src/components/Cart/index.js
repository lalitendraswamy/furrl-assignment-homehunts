import EmptyCart from '../EmptyCart';
import CartItem from '../CartItem';
import './index.css'; // Import CSS file for styling

import { useSelector } from 'react-redux';

// Functional component for the Cart page
const Cart = () => {

    const CartMainReducer = useSelector(state => state.CartMainReducer)
    const { cartList } = CartMainReducer

    const totalMrp = cartList.reduce((acc, obj) => acc + obj.MRP.value, 0);
    const totalDiscount = cartList.reduce((acc, obj) => acc + (obj.MRP.value - obj.price.value), 0);

    return (
        <>
            {
                cartList.length === 0 ? <EmptyCart /> :
                    <div className='cart-container'>
                        <div className='cart-items-container'>
                            {cartList.map(eachItem => <CartItem key={eachItem.id} productDetails={eachItem} />)}
                        </div>
                        <div className='cart-content-container'>
                            <div className='coupon-container'>
                                <img className='' src="https://web.furrl.in/_next/static/media/first_purchase_coupon_fix.f341f65c.svg" alt="coupon" />
                                <p>Find applicable coupons at checkout</p>
                            </div>

                            <table className='final-bill-container'>
                                <tbody>

                                    <tr>
                                        <td>Total MRP</td>
                                        <td className='values-cell'>Rs. {totalMrp}</td>
                                    </tr>
                                    
                                    <tr className='blue'>
                                        <td>Discount on MRP</td>
                                        <td className='values-cell'>Rs. {totalDiscount}</td>
                                    </tr>
                                    <tr className='blue'>
                                        <td>Delivery</td>
                                        <td className='values-cell'>FREE</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Total Amount</td>
                                        <td className='values-cell'>Rs. {totalMrp - totalDiscount}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='checkout-container'>
                                <button className='checkout-button login'>CHECKOUT</button>
                            </div>

                        </div>
                    </div>
            }
        </>
    );
}

export default Cart; 
