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

const Women = (props) => {

    const { womenProducts } = props

    return (
        <section className="women-banner spad">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="product-large set-bg" data-setbg="assets/img/women-large.jpg">
                            <h2>Women’s</h2>
                            <a href="#">Discover More</a>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1">
                        <div className="filter-control text-center">
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
                            {womenProducts && womenProducts.map(p => (
                                <Product key={p.id} product={p} />
                            ))}
                        </Slider>

                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Women
