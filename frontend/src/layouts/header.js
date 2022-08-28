import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import auth from "../apis/modules/auth";
import { useCart } from "react-use-cart";
import logo from './Icon.png'

export default function Header() {
  const { loggedIn } = useContext(AuthContext);
  const { totalItems } = useCart();

  const logout = async () => {
    await auth.logout();
    localStorage.clear();
    window.location = '/login'
  }
  return (
    <div class="big-wrapper">
      <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

      <header>
        <img src="https://i.postimg.cc/qRFy6RzC/slider-left-dec.png" alt="" class="shape" />
        <div class="container">
          <div class="logo">
            <Link to="/"><img src={logo} alt="Logo"  height="150px"/></Link>
          </div>

          <div class="links">
            <ul>

              {/*unauthorized user*/}
              {
                loggedIn === null && (<>
                  <Link to="/chat"><li><a >Chat</a></li></Link>
                  <Link to="/login"><li><a>About Us</a></li></Link>
                  <Link to="/admin"><li><a>Admin</a></li></Link>
                  {/* <Link to="/"><li><a>Testimonials</a></li></Link> */}
                  <Link to="/login"><li class="btn2">Sign in</li></Link>
                </>)
              }

              {/*owner routes*/}
              {
                loggedIn !== null && loggedIn.role === 'owner' && (<>
                  <Link to="/homeowner"><li><a>MY Products</a></li></Link>
                  <Link to="/add-product"><li><a>Product Listing</a></li></Link>
                  <Link to="/orders"><li><a>Orders</a></li></Link>
                  <Link to="/login"><li class="btn2" onClick={logout}>Logout</li></Link>
                </>)
              }

              {/*client routes*/}
              {
                loggedIn !== null && loggedIn.role === 'buyer' && (<>
                  <Link to="/homeclient"><li><a>Home</a></li></Link>
                  <Link to="/myorders"><li><a>My Orders</a></li></Link>
                  {/* <Link to="/cart" style={{ textDecoration: "none" }}><li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg><span style={{ marginBottom: "10px" }}>{totalItems === 0 ? '' : String(totalItems)[0] !== 0 ? totalItems : totalItems.replace(/^0+/, '')}</span></li></Link> */}
                  <Link to="/cart" style={{ textDecoration: "none" }}><li class="nav-item px-3 text-uppercase mb-0 position-relative d-lg-flex">
                    <div id="cart" class="d-none"></div>
                    <a href="/store/cart.stml" class="cart position-relative d-inline-flex" aria-label="View your shopping cart">
                      <i class="fas fa fa-shopping-cart fa-lg"></i>
                      <span class="cart-basket d-flex align-items-center justify-content-center">{totalItems}</span>
                    </a>
                  </li></Link>
                  <Link to="/login"><li class="btn2" onClick={logout}>Logout</li></Link>
                </>)
              }
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}