import Product from "../Product/Product"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link, NavLink } from "react-router-dom"
import { useEffect } from "react"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};

const Women = (props) => {

    const { womenProducts, categories } = props

    return (
        <section className="women-banner spad">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="product-large set-bg" data-setbg="https://res.cloudinary.com/hungnn22cloudinary/image/upload/v1628348839/ecommer/women-large_j9groi.jpg"
                            style={{
                                backgroundImage: "url('https://res.cloudinary.com/hungnn22cloudinary/image/upload/v1628348839/ecommer/women-large_j9groi.jpg')"
                            }}
                        >
                            <h2>Women’s</h2>
                            <Link exact to="/womens">Discover More</Link>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1">
                        <ul className="d-flex justify-content-center mb-4">
                            {categories.map(c => (
                                <button key={c.id} 
                                className="btn btn-default mx-1 filter-button"
                                data-filter={c.name}
                                >{c.name}</button>
                            ))}
                        </ul>

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
