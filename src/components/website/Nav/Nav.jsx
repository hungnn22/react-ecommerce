import { useCart } from "react-use-cart"
import Toast from "../Toast/Toast"
import { Link, NavLink } from "react-router-dom"
import formatter from "../../../utils/format/formatter"
import useOrder from "../../../utils/hooks/useOrder"
import auth from "../../../utils/auth/auth"


const Nav = () => {

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
        <div>
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
                        <div className="col-lg-3 text-right col-md-3">
                            <ul className="nav-right">
                                <li className="heart-icon">
                                    <a href="/">
                                        <i className="icon_heart_alt"></i>
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
                                                                        <p>{formatter(item.price)} x {item.quantity}</p>
                                                                        <h6>{item.name}</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="">
                                                                    <button onClick={() => { handleRemove(item.id) }}
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
                                                <h5>{formatter(cartTotal)}</h5>
                                            </div> : ''}
                                        <div className="select-button">
                                            <Link exact={true} to="/cart" className="primary-btn view-card">VIEW CART</Link>
                                            <Link disable={true}
                                            exact={true} to="/checkout" className="primary-btn checkout-btn">CHECK OUT</Link>
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
        </div>
    )
}

export default Nav
