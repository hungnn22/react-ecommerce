import { useState } from "react"
import { useForm } from "react-hook-form"
import useCategory from "../../../utils/hooks/useCategory"
import Toast from "../../../components/website/Toast/Toast"
import { Link, useHistory } from "react-router-dom"

const AddCategory = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { onAdd } = useCategory()
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const handleAdd = values => {
        setLoading(true)
        try {
            onAdd(values)
            setTimeout(() => {
                Toast(true, "Added!")
                history.push('/admin/categories')
                setLoading(false)
            }, 2500)
        } catch (error) {
            setLoading(false)
            Toast(false, "Add failed!")
        }
    }

    return (
        <form className="form col-6 mx-auto" onSubmit={handleSubmit(handleAdd)}>
            <div className="card border">
                <div className="card-header border">
                    <h4 className="card-title text-primary">Add Category</h4>
                </div>
                <div className="card-body">

                    <div className="form-group my-4">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input autoFocus type="text" id="name" className="form-control"
                            {...register('name', { required: true, minLength: 2 })} />
                        {errors.name && <span className="text-danger">Name must be longer than 2 characters!</span>}
                    </div>

                </div>
                <div className="card-footer text-right">
                    <Link exact={true} to="/admin/categories" disabled={loading} className="btn btn-secondary mx-1">
                        Cancel</Link>
                    <button disabled={loading} className="btn btn-primary mx-1" type="submit">
                        {loading ? 'Waiting...' : 'Save'}</button>
                </div>
            </div>
        </form>
    )
}

export default AddCategory
