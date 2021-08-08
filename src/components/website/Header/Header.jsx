import { Link } from "react-router-dom"
import { useCart } from "react-use-cart"
import auth from "../../../utils/auth/auth"
import cartService from "../../../utils/service/cart.service"


const Header = () => {

    const {emptyCart} = useCart()


    const handleSignout = () => {
        cartService.signout()
        emptyCart()
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
                        {auth.isSignin ?
                            <Link exact={true} to='/signin'
                                onClick={handleSignout}
                                className="login-panel"><i className="fa fa-user"></i>Signout</Link>
                            :
                            <Link exact={true} to='/signin' className="login-panel"><i className="fa fa-user"></i>Signin</Link>
                        }
                        <div className="top-social">
                            <a href="/"><i className="ti-facebook"></i></a>
                            <a href="/"><i className="ti-twitter-alt"></i></a>
                            <a href="/"><i className="ti-linkedin"></i></a>
                            <a href="/"><i className="ti-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
