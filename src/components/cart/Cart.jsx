import { useContext, useState } from "react";
import { CartProductData } from "../CartContext";
import "./Cart.css";

const Cart = () => {

  const {cart, setCart} = useContext(CartProductData);

  const removefromCart = (productId) => {
    console.warn(productId);
    let remCart = cart.filter((cartproduct) => (
      cartproduct.id !== productId
    ))
    setCart(remCart);
  }

  return (
    <>
      <div className='cart-products'>
        <table>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Cart</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((cartproduct) => (
              <tr className='cart-single-product' key={cartproduct.id}>
                <td><img src={cartproduct.productImage}/></td>
                <td><b>{cartproduct.productName}</b></td>
                <td>Rs {cartproduct.price}/-</td>
                <td><button onClick={() => removefromCart(cartproduct.id)}>Remove from Cart</button></td>
              </tr>
            ))}
          </tbody>

          <tfoot>
          </tfoot>
        </table>
      </div>
    </>
  );
}


export default Cart;