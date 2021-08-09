import { Link } from "react-router-dom"
import Pagination from "../../../components/website/Pagination/Pagination"
import Search from "../../../components/website/Search/Search"
import Sort from "../../../components/website/Sort/Sort"
import Toast from "../../../components/website/Toast/Toast"
import useCategory from "../../../utils/hooks/useCategory"

const CategoryList = () => {

    const { categories, filters, onChangePage, totalRows, onSearch, onSort, onRemove } = useCategory()
    const { _page, _limit } = filters
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
            <h3 className="mb-4">Category Management</h3>

            <div className="row d-flex mb-4 justify-content-between">
                <div className="col-5">
                    <Search onSearch={onSearch} />
                </div>
                <div className="col-5 d-flex">
                    <Link exact={true} to="/admin/categories/add" className="btn btn-primary"
                        style={{ minWidth: '150px' }}
                    >New Category</Link>

                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover mt-2">
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Edit/Remove</th>
                    </thead>
                    <tbody className="text-secondary">
                        {categories.map((category, index) => (
                            <tr key={category.id}>
                                <td className="align-middle"><b>{_limit * (_page - 1) + index + 1}</b></td>
                                <td className="align-middle">
                                    <a className="btn btn-default"
                                        data-toggle="modal"
                                        data-target={`#categoryModal${category.id}`}
                                    >{category.name}</a></td>
                                <td className="align-middle">
                                    <Link exact={true}
                                        to={`/admin/category/${category.id}/edit`}
                                        className="btn btn-outline-warning mx-1">
                                        <i className="fas fa-highlighter" /></Link>

                                    <button className="btn btn-outline-danger mx-1"
                                        type="button"
                                        data-toggle="modal"
                                        data-target={`#removeModal${category.id}`}
                                    ><i className="fas fa-archive"></i></button>

                                    <div className="modal fade" id={`removeModal${category.id}`} tabIndex={-1} role="dialog"
                                        aria-labelledby={`removeModal${category.id}`}
                                        aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Remove category</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body py-4">
                                                    Are you sure remove <span className="text-danger">{category.name}</span>?
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                                        Close
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        data-dismiss="modal"
                                                        onClick={() => handleRemove(category.id)}
                                                    >Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <div className="modal fade"
                                    id={`categoryModal${category.id}`}
                                    tabIndex={-1} role="dialog"
                                    aria-labelledby={`categoryModal${category.id}`}
                                    aria-hidden="true">
                                    <categoryModal category={category} />
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

export default CategoryList
