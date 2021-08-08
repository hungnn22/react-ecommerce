import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useCart } from "react-use-cart"
import auth from "../../../utils/auth/auth"
import formatter from '../../../utils/format/formatter'
import cartService from "../../../utils/service/cart.service"

const Checkout = () => {

    const { items, cartTotal, emptyCart, isEmpty } = useCart()
    const [loading, setLoading] = useState()
    const [result, setResult] = useState('')

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const user = auth.getAuth()

    useEffect(() => {
        window.scroll({
            top: 800,
            left: 0,
            behavior: 'smooth'
        })
        reset()
    }, [])

    const handlePayment = values => {
        try {
            // setLoading(true)
            cartService.payment({
                ...values,
                name: user.name,
                email: user.email
            }, items, cartTotal)
            setTimeout(() => {
                // setLoading(false)
                setResult('Thank you!')
                emptyCart()
            }, 2000)
        } catch (error) {
            setResult('You should have signin to checkout!')
        }
    }

    return (
        <form className="container form py-4" onSubmit={handleSubmit(handlePayment)}>
            <Link className="text-dark mb-2" to="/cart"><i className="icon_cart_alt" /> Back to cart...</Link>
            <h3 className="text-center text-dark">{result.length > 0 ? result : ''}</h3>
            <div className="row my-4">
                <div className="col-5 px-4">
                    <h4 className="mb-4">Your Infor:</h4>
                    <div className="form-group mb-2">
                        <label className="form-label">Name:</label>
                        <input className="form-control"
                            defaultValue={user && user.name}
                            disabled
                            {...register('name')} />
                    </div>

                    <div className="form-group mb-2">
                        <label className="form-label">Email:</label>
                        <input className="form-control" type="email"
                            disabled={true}
                            defaultValue={user && user.email}
                            {...register('email')}
                        />
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
                    <table className="table">
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="align-middle text-right">{item.quantity} x {item.price} = {item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tr>
                            <td></td>
                            <td className="align-middle text-right">

                                <b>Total: {formatter(cartTotal)}</b>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="text-right mt-4">
                    <button className="btn btn-warning mt-2" disabled={loading || isEmpty === true}>{loading ? 'Waiting...' : 'Payment'}</button>
            </div>
        </form>
    )
}

export default Checkout
