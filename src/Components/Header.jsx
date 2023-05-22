import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";

const Header = () => {
    const { cartItems } = useContext(Context);

    return (
        <header className="site-header">
            <h1 className="site-title">
                <Link to="/" className="site-title-link">
                    PicSome
                </Link>
            </h1>

            <Link to="/cart" className="btn">
                {cartItems.length > 0 ? <i className="ri-shopping-cart-2-fill"></i> : <i className="ri-shopping-cart-2-line"></i>}
            </Link>
        </header>
    );
};

export default Header;
