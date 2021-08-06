import Product from "../Product/Product"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};

const Men = (props) => {

    const { menProducts } = props

    return (
        <section className="man-banner spad">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="filter-control">
                            <ul>
                                <li className="active">All</li>
                                <li>Clothings</li>
                                <li>HandBag</li>
                                <li>Shoes</li>
                                <li>Accessories</li>
                            </ul>
                        </div>
                        {/* <div className="product-slider owl-carousel row d-flex"> */}
                        <Slider {...settings}>
                            {menProducts && menProducts.map(p => (
                                <Product key={p.id} product={p} />
                            ))}
                        </Slider>
                        {/* </div> */}
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="product-large set-bg m-large" data-setbg="assets/img/man-large.jpg">
                            <h2>Men’s</h2>
                            <a href="#">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Men
