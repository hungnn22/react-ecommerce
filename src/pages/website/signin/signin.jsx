// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import base from '../../../utils/api/base';
import auth from '../../../utils/auth/auth';
import cartService from '../../../utils/service/cart.service';
import './signin.css';
import queryString from 'query-string'
import { useCart } from 'react-use-cart';

const Signin = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [failed, setFailed] = useState(false)
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const {setItems} = useCart()

    const handleSignin = async values => {
        try {
            setFailed(true)
            setLoading(true)
            const { data } = await base.add('/signin', values)
            const { user } = data
            auth.setAuth(user)
            
            const param = queryString.stringify({
                userId: user.id,
                status: false
            })
            const getOrderRes = await base.query('/orders', param)
            const getOrder = getOrderRes.data[0]
            if (typeof (getOrder) !== 'undefined') {
                setItems((JSON.parse(getOrder.orderJson).items))
            }

            setTimeout(() => {
                setLoading(false)
                history.push(user.id === 1 ? '/admin' : '/')
            }, 2000)
        } catch (error) {
            setFailed(error.response.data)
            setLoading(false)
        }
    }

    return (
        <div className="page-holder d-flex align-items-center sign-bg-gray-100 vh-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="show col-lg-6 px-lg-4">
                        <div className="sign-card">
                            <div className="sign-card-header px-lg-5">
                                <div className="sign-card-heading sign-text-primary">Fresh Fashion</div>
                            </div>
                            <div className="card-body p-lg-5">
                                <h3 className="mb-4">Hi, welcome back! 👋👋</h3>
                                <p className="text-muted text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <form id="signinForm" className="form" onSubmit={handleSubmit(handleSignin)}>
                                    {failed && <span className="text-danger mb-2">{failed}</span>}
                                    <div className="form-group mb-2">
                                        <label className="form-label">Email:</label>
                                        <input className="form-control" type="email"
                                            {...register('email', { required: true })}
                                        />
                                        {errors.email && <span className="text-danger">Invalid email!</span>}
                                    </div>

                                    <div className="form-group mb-2">
                                        <label className="form-label">Password:</label>
                                        <input className="form-control" type="password" {...register('password', { required: true, minLength: 6 })} />
                                        {errors.password && <span className="text-danger">Password must be longer than 6 characters!</span>}
                                    </div>

                                    <div className="form-group mt-4">
                                        <button disabled={loading} className="btn btn-primary">{loading ? 'Waiting...' : 'Signin'}</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer px-lg-5 py-lg-4">
                                <div className="text-sm text-muted">Don't have an account? <Link className="sign" to="/signup">signup</Link>.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center sign-text-primary">
                        <img className="img-fluid mb-4" width="300"
                            src="https://therichpost.com/wp-content/uploads/2021/06/login_page_image.png" alt="" style={{ transform: "rotate(10deg)" }} />
                        <h3 className="mb-4 text-primary">Fresh Fashion <br className="d-none d-lg-inline" />freshfashion.com.</h3>
                        <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
