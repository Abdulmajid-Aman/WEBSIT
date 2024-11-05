import logo from '../Images/logo.png'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import '../Navbar.css'

const NavBar = () => {
  return (
    <>
    <div className="navbar">
            <div className="first-part">
            <figure className='logo'>
                <img src={logo} alt="Website Logo" />
            </figure>
            <div className="sections">
                <a href="">EVERYTHING</a>
                <a href="">WOMEN</a>
                <a href="">MEN</a>
                <a href="">ACCESSORIES</a>
            </div>
            </div>
            <div className="second-section">
               <div className="links">
                <a href="">ABOUT</a>
                <a href="">CONTACT US</a>
               </div>
               <div className="inner-part">
                <p className="price">$0.00</p>
                <div className="icon">
                    <HiOutlineShoppingBag  className='cart-icon'/>
                    <div className="number">
                        <span className='item'>0</span>
                    </div>
                </div>
                <IoPersonOutline  className='profile'/>
               </div>
            </div>
    </div>
    </>
  )
}

export default NavBar