import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import base from "../../../utils/api/base";
import './signup.css';

const Signup = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [result, setResult] = useState(false)
    const [failed, setFailed] = useState(false)

    const handleSignup = async values => {
        try {
            const { data } = await base.add('/signup', values)
            const { user } = data
            setResult('Signup successfully!')
            setFailed(false)
            reset({})
        } catch (error) {
            console.log(error.response);
            setFailed(error.response.data)
            setResult(false)
        }
    }

    return (
        <div className="page-holder d-flex align-items-center sign-bg-gray-100 vh-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="show col-lg-6 px-lg-4">
                        <div className="sign-card">
                            <div className="sign-card-header px-lg-5">
                                <div className="sign-card-heading sign-text-primary">Fresh signup</div>
                            </div>
                            <div className="card-body p-lg-5">
                                <h3 className="mb-4">Get started with Fresh</h3>
                                <p className="text-muted text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <form id="signinForm" className="form" onSubmit={handleSubmit(handleSignup)}>
                                    {result && <span className="text-primary mb-2">{result}</span>}
                                    {failed && <span className="text-danger mb-2">{failed}</span>}
                                    <div className="form-group mb-2">
                                        <label className="form-label">Name:</label>
                                        <input className="form-control" type="text"
                                            {...register('name', { required: true, required: true, minLength: 6 })}
                                        />
                                        {errors.name && <span className="text-danger">Name must be longer than 6 characters!</span>}
                                    </div>

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
                                        <button className="btn btn-primary">Signup</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer px-lg-5 py-lg-4">
                                <div className="text-sm text-muted">Already have an account? <Link exact={true} to="/signin" className="sign">Signin</Link>.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center sign-text-primary"><img className="img-fluid mb-4" width="300"
                        src="https://therichpost.com/wp-content/uploads/2021/06/login_page_image.png" alt="" style={{ transform: "rotate(10deg)" }} />
                        <h3 className="mb-4 text-primary">Fresh Fashion <br className="d-none d-lg-inline" />freshfashion.com.</h3>
                        <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
