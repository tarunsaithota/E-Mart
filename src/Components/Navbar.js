import React, {useContext} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Input from "@cloudscape-design/components/input";
import { contextCart } from "../Pages/Cart";

const Navbar = () => {
    const [value, setValue] = React.useState("");
    const[cart, setCart] = useContext(contextCart);

    return (
        <>
            <div className='navbar-section'>
                <div className='nav-section'>
                    <div className='nav-title'>
                        <Link to='/' exact style={{"textDecoration":"none"}}>
                            <h2>E-Mart</h2>
                        </Link>
                    </div>
                    <div className='nav-search'>
                        <Input
                            className='searchbox'
                            onChange={({ detail }) => setValue(detail.value)}
                            value={value}
                            placeholder='Search..'
                            type='search'
                        />
                    </div>
                    <div className='right-side-nav'>
                    <div className='nav-user-details'>
                        <Link to='/loginSignUp' style={{"textDecoration":"none"}}>
                            <h5>LOGIN/SIGNUP</h5>
                        </Link>
                    </div>
                    <div className='nav-cart'>
                        <h5>Cart {cart}</h5>
                    </div>
                    </div>
                </div>

                <div className='subMenu'>
                    <ul>
                        <Link to='/mobilepage' style={{"textDecoration":"none"}}>
                            <li>Mobiles</li>
                        </Link>
                        <Link to='/bookspage' style={{"textDecoration":"none"}}>
                        <li>Books</li>
                        </Link>
                        <li>Computers</li>
                        <li>Menswear</li>
                        <li>Furniture</li>
                        <li>Fridges</li>
                        <li>Kitchen</li>
                        <li>Watch</li>
                        <li>Speakers</li>
                        <li>TV</li>
                        <li>Womanwear</li>
                        <li>AC</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;