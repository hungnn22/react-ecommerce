import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import useCategory from "../../../utils/hooks/useCategory"
import useProduct from "../../../utils/hooks/useProduct"
import Toast from "../../../components/website/Toast/Toast"
import { Link, useHistory, useParams } from "react-router-dom"
import useType from '../../../utils/hooks/useType'
import base from "../../../utils/api/base"

const EditProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [image, setImage] = useState(false)
    const { onEdit } = useProduct()
    const { categories } = useCategory()
    const { types } = useType()
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getItem = async () => {
            const { data } = await base.get('/products', id)
            setProduct(data)
            setImage(data.image)
            reset(product)
        }
        getItem()
    }, [id])

    const handleChangeImage = e => {
        const selected = e.target.files[0]
        const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            console.log('Loading image failed!');
        }
    }


    const handleEdit = values => {
        setLoading(true)
        try {
            onEdit(id, values, product)
            setTimeout(() => {
                Toast(true, "Updated!")
                history.push('/admin/products')
                setLoading(false)
            }, 2500)
        } catch (error) {
            setLoading(false)
            Toast(false, "Update failed!")
        }
    }


    return (
        <form className="form col-6 mx-auto" onSubmit={handleSubmit(handleEdit)}>
            <div className="card border">
                <div className="card-header border">
                    <h4 className="card-title text-primary">Edit Product</h4>
                </div>
                <div className="card-body">
                    <div className="form-group my-4 row d-flex justify-content-between">
                        <div className="col">
                            <label>Type: </label>
                            <select className="form-control"
                                {...register('typeId')}
                                defaultValue={product.typeId}
                            >
                                {types.map(type => (
                                    <option
                                        selected={product.typeId === type.id ? true : false}
                                        key={type.id}
                                        value={type.id}
                                    >{type.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col">
                            <label>Category: </label>
                            <select className="form-control"
                                {...register('categoryId')}
                                defaultValue={product.categoryId}
                            >
                                {categories.map(category => (
                                    <option
                                        selected={product.categoryId === category.id ? true : false}
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group my-4">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input autoFocus type="text" id="name" className="form-control"
                            defaultValue={product.name}
                            {...register('name', { required: true, minLength: 2 })} />
                        {errors.name && <span className="text-danger">Name must be longer than 2 characters!</span>}
                    </div>

                    <div className="form-group my-4 row d-flex">
                        <div className="col">
                            <label className="form-label" htmlFor="price">Price</label>
                            <input type="number" id="price" className="form-control "
                                defaultValue={product.price}
                                {...register('price', { required: true, min: 1 })} />
                            {errors.price && <span className="text-danger">Price must be a positive number!</span>}
                        </div>
                        <div className="col">
                            <label className="form-label">Quantity</label>

                            <input type="number" className="form-control border"
                                defaultValue={product.quantity}
                                {...register('quantity', { required: true, min: 1 })} />
                            {errors.quantity && <span className="text-danger">Quantity must be a positive number!</span>}
                        </div>
                    </div>

                    <div className="form-group my-4">
                        <label className="form-label" htmlFor="customFile">Image:</label>
                        <input type="file" className="form-control-file bg-light " id="customFile"
                            {...register('image')}
                            onChange={handleChangeImage} />
                        {image ? <img src={image} className="my-4"
                            style={{ width: "100%", height: "560px", objectFit: "cover" }}
                        /> : ''}

                        {errors.image && <span className="text-danger">Must add a photo for the product!</span>}

                    </div>

                    <div className="form-group my-4">
                        <label className="form-label">Description:</label>
                        <textarea rows={6} className="form-control border" {...register('des', { required: true })}
                            defaultValue={product.des}
                        ></textarea>
                        {errors.des && <span className="text-danger">Should add a description for the product!</span>}

                    </div>


                </div>
                <div className="card-footer text-right">
                    <Link exact={true} to="/admin/products" disabled={loading} className="btn btn-secondary mx-1">
                        Cancel</Link>
                    <button disabled={loading} className="btn btn-primary mx-1" type="submit">
                        {loading ? 'Waiting...' : 'Update'}</button>
                </div>
            </div>
        </form>
    )
}

export default EditProduct
