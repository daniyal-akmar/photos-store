import { createContext, useState } from "react";
import Data from "../Data";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [photos, setPhotos] = useState(Data || []);
    const [cartItems, setCartItems] = useState([]);

    const toggleFav = (id) => {
        setPhotos((prev) =>
            prev.map((photo) =>
                photo.id === id
                    ? {
                          ...photo,
                          isFavorite: !photo.isFavorite,
                      }
                    : photo
            )
        );
    };

    const addToCart = (product) => {
        setCartItems((prev) => [...prev, product]);
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((photo) => photo.id !== id));
    };

    return <Context.Provider value={{ photos, cartItems, setCartItems, toggleFav, addToCart, removeFromCart }}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
