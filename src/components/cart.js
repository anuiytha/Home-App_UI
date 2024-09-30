import React from 'react';
import { useCart } from 'react-use-cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    console.log("Cart Items:", items);
    console.log("Cart Total:", cartTotal);
    if (isEmpty) return <h2 className="text-center">Your cart is empty</h2>;

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Cart</h2>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Total Unique Items: {totalUniqueItems}</h4>
                <h4>Total Items: {totalItems}</h4>
            </div>
            <ul className="list-group mb-4">
                {items.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={item.Item_Image} alt={item.Item_Name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                            <div>
                                <h5>{item.Item_Name}</h5>
                                <p>{item.Item_Desc}</p>
                                <p>${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-primary mx-1" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                -
                            </button>
                            <button className="btn btn-primary mx-1" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                +
                            </button>
                            <button className="btn btn-danger mx-1" onClick={() => removeItem(item.id)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className="text-right">Total: ${typeof cartTotal === 'number' ? cartTotal.toFixed(2) : '0.00'}</h3>
            <div className="text-right">
                <button className="btn btn-danger" onClick={emptyCart}>
                    Empty Cart
                </button>
                <a href="/checkout" className="btn btn-success">Checkout</a>
            </div>
        </div>
    );
};

export default Cart;
