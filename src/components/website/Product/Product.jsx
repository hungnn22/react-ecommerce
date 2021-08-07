import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import ProductModal from '../ProductModal/ProductModal'
import Star from '../Star/Star'
import Toast from '../Toast/Toast'

const Product = ({ product }) => {

    const { addItem } = useCart()

    const handleAddToCart = () => {
        try {
            Toast(true, "Added!")
            addItem(product)
        } catch (error) {
            Toast(false, "Failed!")
        }
    }

    return (
        <div className="product-item col">
            <div className="pi-pic">
                <img src={product.image} alt="" />
                <div className="icon">
                    <Star rating={product.rating} />
                </div>
                <ul>
                    <button onClick={handleAddToCart} className="w-icon btn btn-warning"><i className="text-light icon_bag_alt" /></button>
                    <li className="quick-view">
                        <button
                            className="btn btn-default"
                            data-toggle="modal"
                            data-target={`#productModal${product.id}`}
                        >+ View</button>
                        <div className="modal fade" id={`productModal${product.id}`} tabIndex={-1} role="dialog"
                            aria-labelledby={`productModal${product.id}`}
                            aria-hidden="true">
                            <ProductModal product={product} />
                        </div>

                    </li>
                    <li className="w-icon"><a href="/"><i className="fa fa-random"></i></a></li>
                </ul>
            </div>
            <div className="pi-text">
                <Link exact={true} to={`/detail/${product.id}`}>
                    <h5>{product.name}</h5>
                </Link>
                <div className="product-price">
                    ${product.price.toFixed(2)}
                </div>
            </div>
        </div>

    )
}

export default Product

