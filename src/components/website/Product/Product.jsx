import { useCart } from 'react-use-cart'
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
                    <i className="icon_heart_alt"></i>
                </div>
                <ul>
                    <button onClick={handleAddToCart} className="w-icon btn btn-warning"><i className="text-light icon_bag_alt" /></button>
                    <li className="quick-view"><a href="#">+ Quick View</a></li>
                    <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                </ul>
            </div>
            <div className="pi-text">
                <a href="#">
                    <h5>{product.name}</h5>
                </a>
                <div className="product-price">
                    $34.00
                </div>
            </div>
        </div>

    )
}

export default Product

