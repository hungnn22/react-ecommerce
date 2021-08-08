import { useEffect, useState } from "react"
import base from "../../../utils/api/base"
import Star from "../../website/Star/Star"
import formatter from "../../../utils/format/formatter"
import { Link } from "react-router-dom"

const ProductModal = ({ product }) => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getReviews = async () => {
            const { data } = await base.getByPro('/reviews', 'productId', product.id)
            setReviews(data)
        }

        getReviews()
    }, [product.id])

    return (
        <div className="modal-dialog modal-xl" role="document">
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
                            <img style={{ width: '100%' }} src={product.image} />
                            <div className="text-dark text-left mt-2"><b>Description:</b> {product.des}</div>
                        </div>
                        <div className="col-6 px-4 text-left">
                            <div className="h4">{product.name}</div>
                            <p>Price: {formatter(product.price)}</p>
                            <p>Quantity: {product.quantity}</p>

                            <div className="mt-4">
                                <p>Reviews({reviews.length}):</p>
                                {reviews.map(review => (
                                    <div key={review.id} className="border-bottom pb-2">
                                        <span>{review.createAt}: </span>
                                        <p>{review.content}</p>
                                        <Star rating={review.rating} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    <Link exact={true} to={`/admin/products/${product.id}/edit`} type="button" className="btn btn-warning"
                        style={{ color: '#ffffff' }}
                    >Edit</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductModal
