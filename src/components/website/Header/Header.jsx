import { Link, NavLink } from "react-router-dom"
import { useCart } from "react-use-cart"
import Toast from "../Toast/Toast"

const Header = () => {

    const { items, cartTotal, isEmpty, totalItems, removeItem } = useCart()

    const handleRemove = id => {
        try {
            removeItem(id)
            Toast(true, "Removed!")
        } catch (error) {
            Toast(false, "Failed!")
        }
    }

    return (
        <header className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="ht-left">
                        <div className="mail-service">
                            <i className=" fa fa-envelope"></i>
                            hungnn22@gmail.com
                        </div>
                        <div className="phone-service">
                            <i className=" fa fa-phone"></i>
                            +84 93 123 668
                        </div>
                    </div>
                    <div className="ht-right">
                        <a href="/" className="login-panel"><i className="fa fa-user"></i>Login</a>
                        {/* <div className="lan-selector">
                            <select className="language_drop" name="countries" id="countries" style={{ width: "300px" }}>
                                <option value='yt' data-image="assets/img/flag-1.jpg" data-imagecss="flag yt"
                                    data-title="English">English</option>
                                <option value='yu' data-image="assets/img/flag-2.jpg" data-imagecss="flag yu"
                                    data-title="Bangladesh">German </option>
                            </select>
                        </div> */}
                        <div className="top-social">
                            <a href="/"><i className="ti-facebook"></i></a>
                            <a href="/"><i className="ti-twitter-alt"></i></a>
                            <a href="/"><i className="ti-linkedin"></i></a>
                            <a href="/"><i className="ti-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="inner-header">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-2 col-md-2">
                            <div className="logo">
                                <a href="/">
                                    F-Shop
                                </a>
                            </div>
                        </div>
                        {/* <div className="col-lg-7 col-md-7">
                            <div className="advanced-search">
                                <button type="button" className="category-btn">All Categories</button>
                                <div className="input-group">
                                    <input type="text" placeholder="What do you need?" />
                                    <button type="button"><i className="ti-search"></i></button>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-3 text-right col-md-3">
                            <ul className="nav-right">
                                <li className="heart-icon">
                                    <a href="/">
                                        <i className="icon_heart_alt"></i>
                                        <span>1</span>
                                    </a>
                                </li>
                                <li className="cart-icon">
                                    <a href="/">
                                        <i className="icon_bag_alt"></i>
                                        {totalItems > 0 ? <span>{totalItems}</span> : ''}
                                    </a>
                                    <div className="cart-hover shadow-lg">
                                        {isEmpty ? <div className="my-2 text-center">Cart is empty</div> :
                                            <div className="select-items">
                                                <table className="align-middle">
                                                    <tbody>
                                                        {items.map(item => (
                                                            <tr key={item.id} className="d-flex justify-content-between">
                                                                <td className="si-pic"><img src={item.image} style={{ width: '80px', height: 'auto', objectFit: 'cover' }} alt="" /></td>
                                                                <td className="si-text">
                                                                    <div className="product-selected">
                                                                        <p>${item.price} x {item.quantity}</p>
                                                                        <h6>{item.name}</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="">
                                                                    <button onClick={() => {handleRemove(item.id)}} 
                                                                    className="btn btn-outline-dark">Remove</button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        }
                                        {!isEmpty ?
                                            <div className="select-total">
                                                <span>total:</span>
                                                <h5>${cartTotal}</h5>
                                            </div> : ''}
                                        <div className="select-button">
                                            <a href="/" className="primary-btn view-card">VIEW CARD</a>
                                            <a href="/" className="primary-btn checkout-btn">CHECK OUT</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="cart-price">${cartTotal}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-item">
                <div className="container">
                    <div className="nav-depart">
                        <div className="depart-btn">
                            <i className="ti-menu"></i>
                            <span>All departments</span>
                            <ul className="depart-hover">
                                <li className="active"><a href="/">Women’s Clothing</a></li>
                                <li><a href="/">Men’s Clothing</a></li>
                                <li><a href="/">Underwear</a></li>
                                <li><a href="/">Kid's Clothing</a></li>
                                <li><a href="/">Brand Fashion</a></li>
                                <li><a href="/">Accessories/Shoes</a></li>
                                <li><a href="/">Luxury Brands</a></li>
                                <li><a href="/">Brand Outdoor Apparel</a></li>
                            </ul>
                        </div>
                    </div>
                    <nav className="nav-menu mobile-menu">
                        <ul>
                            <li className=""><NavLink exact={true} activeClassName="bg-warning" to="/">Home</NavLink></li>
                            <li className=""><NavLink exact={true} activeClassName="bg-warning" to="/mens">Men's</NavLink></li>
                            <li className=""><NavLink exact={true} activeClassName="bg-warning" to="/womens">Women's</NavLink></li>
                            
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </div>
        </header>
    )
}

export default Header
