import Pagination from "../../../components/website/Pagination/Pagination"
import Search from "../../../components/website/Search/Search"
import Sort from "../../../components/website/Sort/Sort"
import formatter from "../../../utils/format/formatter"
import useProduct from "../../../utils/hooks/useProduct"
import CategoryFilter from '../../../components/website/Filter/Filter'
import useCategory from "../../../utils/hooks/useCategory"
import ProductModal from "../../../components/admin/ProductModal/ProductModal"
import Toast from "../../../components/website/Toast/Toast"
import { Link } from "react-router-dom"
import Star from "../../../components/website/Star/Star"

const ProductList = () => {

    const { products, filters, onChangePage, totalRows, onSearch, onSort, onFilterByCategory, onRemove } = useProduct()
    const { _page, _limit } = filters
    const { categories } = useCategory()

    const handleRemove = id => {
        try {
            setTimeout(() => {
                onRemove(id)
                Toast(true, "Removed!")
            })

        } catch (error) {
            Toast(false, "Remove failed!")
        }
    }


    return (
        <div className="">
            <h3 className="mb-4">Product Management</h3>

            <div className="row d-flex mb-4 justify-content-between">
                <div className="col-5">
                    <Search onSearch={onSearch} />
                </div>
                <div className="col-5 d-flex">
                    <div className="col"><Sort onSort={onSort} /></div>
                    <div className="col"><CategoryFilter list={categories} onFilter={onFilterByCategory} /></div>
                    <Link exact={true} to="/admin/products/add" className="btn btn-primary"
                        style={{ minWidth: '150px' }}
                    >New Product</Link>

                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover mt-2">
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Edit/Remove</th>
                    </thead>
                    <tbody className="text-secondary">
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td className="align-middle"><b>{_limit * (_page - 1) + index + 1}</b></td>
                                <td className="align-middle">
                                    <a className="btn btn-default"
                                        data-toggle="modal"
                                        data-target={`#productModal${product.id}`}
                                    >{product.name}</a></td>
                                <td className="align-middle">{formatter(product.price)}</td>
                                <td className="align-middle">{product.quantity}</td>
                                <td className="align-middle">
                                    <img src={product.image}
                                        style={{
                                            width: '80px', height: '80px',
                                            borderRadius: '50%', objectFit: 'cover'
                                        }}
                                        title={product.des}
                                    />
                                </td>
                                <td className="align-middle">
                                    <Link exact={true}
                                        to={`/admin/products/${product.id}/edit`}
                                        className="btn btn-outline-warning mx-1">
                                        <i className="fas fa-highlighter" /></Link>

                                    <button className="btn btn-outline-danger mx-1"
                                        type="button"
                                        data-toggle="modal"
                                        data-target={`#removeModal${product.id}`}
                                    ><i className="fas fa-archive"></i></button>

                                    <div className="modal fade" id={`removeModal${product.id}`} tabIndex={-1} role="dialog"
                                        aria-labelledby={`removeModal${product.id}`}
                                        aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Remove product</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body py-4">
                                                    Are you sure remove <span className="text-danger">{product.name}</span>?
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                                        Close
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        data-dismiss="modal"
                                                        onClick={() => handleRemove(product.id)}
                                                    >Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <div className="modal fade"
                                    id={`productModal${product.id}`}
                                    tabIndex={-1} role="dialog"
                                    aria-labelledby={`productModal${product.id}`}
                                    aria-hidden="true">
                                    <ProductModal product={product} />
                                </div>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination filters={filters} totalRows={totalRows} onChangePage={onChangePage} />
        </div>
    )
}

export default ProductList
