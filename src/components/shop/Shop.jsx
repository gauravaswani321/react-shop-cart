import './Shop.css';
import { useContext } from 'react';
import { CartProductData } from '../CartContext';

const Shop = () => {

  const {products, addToCart} = useContext(CartProductData);
  return (
    <>
      <div className='grid grid-cols-3 gap-10'>
        {products.map((product) => (
          <div className='single-product' key={product.id}>
            <img src={product.productImage}/>
            <p><b>{product.productName}</b></p>
            <p>Rs {product.price}/-</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;