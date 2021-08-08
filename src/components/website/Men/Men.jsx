import { Link } from "react-router-dom"
import useCategory from "../../../utils/hooks/useCategory"
import useProduct from "../../../utils/hooks/useProduct"
import Product from "../Product/Product"
import Sliders from "../Sliders/Sliders"


const Men = (props) => {

    const { products } = useProduct(1)
    const { categories } = useCategory()

    return (
        <section className="man-banner spad">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="filter-control">
                            <ul className="d-flex justify-content-center mb-4">
                                {categories.map(c => (
                                    <button key={c.id}
                                        className="btn btn-default mx-1 filter-button"
                                        data-filter={c.name}
                                    >{c.name}</button>
                                ))}
                            </ul>
                        </div>
                        <Sliders>
                            {products && products.map(p => (
                                <Product key={p.id} product={p} />
                            ))}
                        </Sliders>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="product-large set-bg m-large"
                            data-setbg="assets/img/man-large.jpg"
                            style={{ backgroundImage: "url('https://res.cloudinary.com/hungnn22cloudinary/image/upload/v1628348839/ecommer/man-large_qqehyq.jpg')" }}
                        >
                            <h2>Men’s</h2>
                            <Link exac={true} to="/mens">Discover More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Men
