import React, { useState, useContext } from "react";
import { Context } from "./Context";

const Photo = ({ photo }) => {
    const { cartItems, toggleFav, addToCart, removeFromCart } = useContext(Context);

    const [hovered, setHovered] = useState(false);

    const heartBtn = (hovered || photo.isFavorite) && (
        <button className="btn btn-secondary heart-btn" onClick={() => toggleFav(photo.id)}>
            {photo.isFavorite ? <i className="ri-heart-fill"></i> : <i className="ri-heart-line"></i>}
        </button>
    );

    const inCart = cartItems.some((item) => item.id === photo.id);
    const addBtn =
        (inCart || hovered) &&
        (inCart ? (
            <button className="btn btn-secondary add-btn" onClick={() => removeFromCart(photo.id)}>
                <i className="ri-add-circle-fill"></i>
            </button>
        ) : (
            <button className="btn btn-secondary add-btn" onClick={() => addToCart(photo)}>
                <i className="ri-add-circle-line"></i>
            </button>
        ));

    return (
        <div className="photo-container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {heartBtn}
            {addBtn}
            <img src={photo.url} className="photo-grid" />
        </div>
    );
};

export default Photo;
