import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useCart } from "react-use-cart"
import formatter from "../../../utils/format/formatter"

const Cart = (props) => {
    const { items, isEmpty, cartTotal, updateItemQuantity, removeItem } = useCart()
    const [loading, setLoading] = useState(false)
    const [goCheckout, setGoCheckout] = useState(false)
    const history = useHistory()

    useEffect(() => {
        window.scroll({
            top: 800,
            left: 0,
            behavior: 'smooth'
        });
        setLoading(true)
        const hideLoading = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return (() => {
            clearTimeout(hideLoading)
        })
    }, [])

    const handelCheckout = () => {
        setGoCheckout(true)
        setTimeout(() => {
            setGoCheckout(false)
            history.push('/checkout')
        }, 2000)
    }


    return (

        <div className="container py-4">
            <Link className="text-dark" to="/"><i className="icon_cart_alt" /> Continue shopping...</Link>
            {isEmpty ?
                <h3 className="text-center mt-4">Your cart is empty...</h3> :
                <div>
                    <table className="table table-hover mt-4">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td className="align-middle">
                                        <img src={item.image}
                                            title={item.desc}
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="align-middle" style={{ width: '140px' }}>{formatter(item.price)}</td>
                                    <td className="align-middle">
                                        <button className="btn btn-default mx-1"
                                            disabled={goCheckout}
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        > - </button>
                                        <button className="btn btn-outline-muted" disabled
                                            style={{ minWidth: '28px' }}>{item.quantity}</button>
                                        <button className="btn btn-floating mx-1"
                                            disabled={goCheckout}
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                        > + </button>
                                    </td>
                                    <td className="align-middle" style={{ width: '140px' }}>{formatter(item.price * item.quantity)}</td>

                                    <td className="align-middle">
                                        <button type="button" className="btn"
                                            disabled={goCheckout}
                                            onClick={() => removeItem(item.id)}>
                                            <i className="icon_trash_alt text-danger" />
                                        </button>

                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div className="text-right mt-4">
                        <h5 className="mx-1">Amount: {formatter(cartTotal)}</h5>
                        <button className="btn btn-warning mt-2" disabled={goCheckout}
                            onClick={handelCheckout}
                        >{goCheckout ? 'Wating...' : 'Checkout'}</button>
                    </div>
                </div>
            }
        </div>

    )
}

export default Cart
