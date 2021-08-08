import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useCart } from "react-use-cart";
import base from "../../../utils/api/base";
import Toast from "../../../components/website/Toast/Toast";
import Star from "../../../components/website/Star/Star";
import formatter from "../../../utils/format/formatter";

const ProductDetail = (props) => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [reviews, setReviews] = useState([])
    const { addItem } = useCart()

    useEffect(() => {

        window.scroll({
            top: '800',
            left: '0',
            behavior: 'smooth'
        })

        const getData = async () => {
            const { data } = await base.get('/products', id)
            setProduct(data)
        }

        const getReviews = async () => {
            const { data } = await base.getByPro('/reviews', 'productId', id)
            setReviews(data)
        }
        getData()
        getReviews()

    }, [id])

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
        <div className="container" style={{paddingTop: '60px'}}>
            <div className="row">
                <div className="col-4">
                    <img src={product.image} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div className="col px-4 text-left" style={{ position: 'relative' }}>
                    <h2>{product.name}</h2>
                    <Star rating={product.rating} />
                    <p>Price: {formatter(product.price)}</p>
                    <p>Quantity: {product.quantity}</p>
                    <div className="text-dark text-left mt-2"><b>Description:</b> {product.des}</div>

                    <div style={{ position: 'absolute', bottom: '0', right: '0' }}>
                        <Link exact={true} to="/" type="button" className="btn btn-outline-secondary mx-1" data-dismiss="modal"
                            disabled={loading}
                        >Back</Link>
                        <button type="button" className="btn btn-warning"
                            disabled={loading}
                            onClick={handleAddToCart}
                            style={{ color: '#ffffff' }}
                        >Add to cart</button>
                    </div>
                </div>
            </div>
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
    )
}

export default ProductDetail
