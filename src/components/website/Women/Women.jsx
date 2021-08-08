import Product from "../Product/Product"
import { Link } from "react-router-dom"
import useProduct from "../../../utils/hooks/useProduct"
import Sliders from "../Sliders/Sliders"
import useCategory from '../../../utils/hooks/useCategory'


const Women = (props) => {

    const { categories } = useCategory()

    const {products} = useProduct(2)

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
                        <Sliders>
                            {products && products.map(p => (
                                <Product key={p.id} product={p} />
                            ))}
                        </Sliders>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Women
