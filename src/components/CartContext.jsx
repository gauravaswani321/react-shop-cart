import { createContext, useState } from "react";
import products from "./Products";

export const CartProductData = createContext();

const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (singleproduct) => {
        setCart([...cart, singleproduct]);
    }
    
    const globaldata = {products, cart, setCart, addToCart};

    return (
    <>
        <CartProductData.Provider value={globaldata}>
            {children}
        </CartProductData.Provider>
    </>
  );
}

export default CartContext;
