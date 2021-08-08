import { useEffect } from "react"
import CategoryFilter from "../../../../components/website/Filter/Filter";
import Product from "../../../../components/website/Product/Product";
import Search from "../../../../components/website/Search/Search";
import useProduct from "../../../../utils/hooks/useProduct";
import Pagination from '../../../../components/website/Pagination/Pagination'
import Sort from "../../../../components/website/Sort/Sort";
import useCategory from '../../../../utils/hooks/useCategory'

const MenCollection = () => {

    const { products, filters, onChangePage, totalRows, onSearch, onSort, onFilterByCategory } = useProduct(1)
    const { categories } = useCategory()

    useEffect(() => {
        window.scroll({
            top: 800,
            left: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <div className="py-5 container">
            <div className="mb-4">
                <h3 className="border-bottom pb-2"
                >Women's Collection </h3>
            </div>
            <div className="row d-flex mb-4 justify-content-between">
                <div className="col-5"><Search onSearch={onSearch} /></div>
                <div className="col-5 d-flex">
                    <div className="col"><Sort onSort={onSort} /></div>
                    <div className="col"><CategoryFilter list={categories} onFilter={onFilterByCategory} /></div>
                </div>
            </div>
            <div className="d-flex row">
                {products.length > 0 ?
                    products.map(product => (
                        <div key={product.id} className="col-4">
                            <Product product={product} />
                        </div>
                    ))
                    : <h4 className="mx-2 text-muted">No matching results were found...</h4>
                }
            </div>

            <Pagination filters={filters} onChangePage={onChangePage} totalRows={totalRows} />
        </div>
    )
}

export default MenCollection
