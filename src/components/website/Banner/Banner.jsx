import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div className="banner-section spad">
            <div className="container-fluid">
                <div className="row">
                    <Link to="/mens" className="col-lg-4">
                        <div className="single-banner">
                            <img src="assets/img/banner-1.jpg" alt="" />
                            <div className="inner-text">
                                <h4>Men’s</h4>
                            </div>
                        </div>
                    </Link>
                    <Link to="/womens" className="col-lg-4">
                        <div className="single-banner">
                            <img src="assets/img/banner-2.jpg" alt="" />
                            <div className="inner-text">
                                <h4>Women’s</h4>
                            </div>
                        </div>
                    </Link>
                    <div className="col-lg-4">
                        <div className="single-banner">
                            <img src="assets/img/banner-3.jpg" alt="" />
                            <div className="inner-text">
                                <h4>Kid’s</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
