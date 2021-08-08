import { useEffect, useState } from "react"
import { useCart } from "react-use-cart"
import base from "../../../utils/api/base"
import Star from "../Star/Star"
import Toast from "../Toast/Toast"
import formatter from "../../../utils/format/formatter"

const ProductModal = ({ product }) => {

    const [reviews, setReviews] = useState([])
    const {addItem} = useCart()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getReviews = async () => {
            const { data } = await base.getByPro('/reviews', 'productId', product.id)
            setReviews(data)
        }

        getReviews()
    }, [product.id])

    const handleAddToCart = () => {
        try {
            setLoading(true)
            setTimeout(() => {
                addItem(product)
                setLoading(false)
                Toast(true, 'Added!')
            }, 2000)
        } catch (error) {
            Toast(false, "Failed!")
        }
    }

    return (

        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{product.name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-6">
                            <img src={product.image} />
                        </div>
                        <div className="col-6 px-4 text-left">
                            <div className="h4">{product.name}</div>
                            <div>Price: {formatter(product.price)}</div>
                            <div>Quantity: {product.quantity}</div>
                            <div className="text-dark text-left mt-2"><b>Description:</b> {product.des}</div>
                            <Star rating={product.rating} />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-dismiss="modal"
                        disabled={loading}
                    >Close</button>
                    <button type="button" className="btn btn-warning"
                        disabled={loading}
                    onClick={handleAddToCart}
                        style={{ color: '#ffffff' }}
                    >Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductModal
