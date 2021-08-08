import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useCart } from "react-use-cart"
import formatter from '../../../utils/format/formatter'
import cartService from "../../../utils/service/cart.service"

const Checkout = () => {

    const { items, cartTotal, emptyCart, isEmpty } = useCart()
    const [loading, setLoading] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [value, setValue] = useState()

    useEffect(() => {
        window.scroll({
            top: 800,
            left: 0,
            behavior: 'smooth'
        })
    }, [])

    const handlePayment = values => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            cartService.payment(values)
        }, 2000)
    }

    return (
        <form className="container form py-4" onSubmit={handleSubmit(handlePayment)}>
            <Link className="text-dark" to="/cart"><i className="icon_cart_alt" /> Back to cart...</Link>
            <div className="row my-4">
                <div className="col-5 px-4">
                    <h4 className="mb-4">Your Infor:</h4>
                    <div className="form-group mb-2">
                        <label className="form-label">Name:</label>
                        <input className="form-control" {...register('name', { required: true, minLength: 4 })} />
                        {errors.name && <span className="text-danger">Name must be longer than 4 characters!</span>}
                    </div>

                    <div className="form-group mb-2">
                        <label className="form-label">Email:</label>
                        <input className="form-control" type="email"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span className="text-danger">Invalid email!</span>}

                    </div>

                    <div className="form-group mb-2">
                        <label className="form-label">Address:</label>
                        <input className="form-control" {...register('address', { required: true, minLength: 4 })} />
                        {errors.address && <span className="text-danger">Address must be longer than 4 characters!</span>}
                    </div>

                    <div className="form-group mb-2">
                        <label className="form-label">Phone number:</label>
                        <input className="form-control" {...register('phone',
                            {
                                required: true,
                                pattern: /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
                            })} />
                        {errors.phone && <span className="text-danger">Invalid phone number!</span>}
                    </div>
                </div>
                <div className="col px-4">
                    <h4 className="mb-4">Cart:</h4>
                    {items.map(item => (
                        <div key={item.id} className="mb-4 pb-2 d-flex justify-content-between border-bottom">
                            <span>{item.name}</span>
                            <span>{item.quantity} x {item.price} = {formatter(item.price * item.quantity)}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-right mt-4">
                <h5>Total: {formatter(cartTotal)}</h5>
                <button className="btn btn-warning mt-4" disabled={loading}>{loading ? 'Waiting...' : 'Payment' }</button>
            </div>
        </form>
    )
}

export default Checkout
