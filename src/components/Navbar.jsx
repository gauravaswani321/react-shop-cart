import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <>  
        <div className='navbar'>
            <Link to='/'>Shop</Link>
            <Link to='/cart'>Cart</Link>
        </div>
    </>
  );
}

export default Navbar;