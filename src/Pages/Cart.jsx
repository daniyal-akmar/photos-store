import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import CartItem from "../Components/CartItem";

const Cart = () => {
    const { cartItems, setCartItems } = useContext(Context);
    const [btnText, setBtnText] = useState("Order");
    const total = cartItems.length * 5.99;
    const price = total.toLocaleString("en-US", {style:"currency", currency:"USD"});
    const itemElements = cartItems.map((item) => <CartItem key={item.id} item={item} />);

    const order = () => {
        setBtnText("Ordering...");

        setTimeout(() => {
            console.log("Ordered!");
            setBtnText("Order");
            setCartItems([]);
        }, 3000);
    }

    return (
        <main className="cart container">
            {cartItems.length > 0 ? 
                <div>
                    <h2>Cart Items</h2>
                    {itemElements}
                    <p style={{ fontWeight: "bold", textAlign: "right" }}>Total: {price}</p>
                    <button className="btn btn-order" onClick={order}>
                        {btnText}
                    </button>
                </div> : 
                <h2 style={{ textAlign: "center" }}>
                    There are no items in the cart.</h2>}
        </main>);
};

export default Cart;
