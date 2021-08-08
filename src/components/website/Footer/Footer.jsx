const Footer = () => {
    return (
        <div>
            <div className="partner-logo">
                <div className="container">
                    <div className="logo-carousel owl-carousel">
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="assets/img/logo-1.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="assets/img/logo-2.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="assets/img/logo-3.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="assets/img/logo-4.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="assets/img/logo-5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer-left">
                                <div className="footer-logo">
                                    <a href="/">Jassa</a>
                                </div>
                                <ul>
                                    <li>Address: 11-11 Road 11 22 22</li>
                                    <li>Phone: +00 00.000.000</li>
                                    <li>Email: therichposts@gmail.com</li>
                                </ul>
                                <div className="footer-social">
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <a href="/"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <div className="footer-widget">
                                <h5>Information</h5>
                                <ul>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Checkout</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Serivius</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-widget">
                                <h5>My Account</h5>
                                <ul>
                                    <li><a href="/">My Account</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Shopping Cart</a></li>
                                    <li><a href="/">Shop</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="newslatter-item">
                                <h5>Join Our Newsletter Now</h5>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form action="/" className="subscribe-form">
                                    <input type="text" placeholder="Enter Your Mail" />
                                    <button type="button">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-reserved">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-text">

                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://therichpost.com" target="_blank">Jassa</a>

                                </div>
                                <div className="payment-pic">
                                    <img src="assets/img/payment-method.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer
