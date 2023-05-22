import React, { useContext } from "react";
import { Context } from "../Context/Context"

const CartItem = ({item}) => {
    const { removeFromCart } = useContext(Context);

    return <div className="cart-item">
        <button className="btn btn-secondary" onClick={() => removeFromCart(item.id)}>&times;</button>
        <img src={item.url} width="250px" />
        <p style={{ fontWeight: "bold" }}>$5.99</p>
    </div>;
};

export default CartItem;
