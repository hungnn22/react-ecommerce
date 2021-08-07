import { useEffect, useState } from "react"
import base from "../api/base"
import queryString from 'query-string'

const res = '/products'
const initFilters = {
    // typeId: 2,
    _limit: 6,
    _page: 1
}

const useWomens = () => {

    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState(initFilters)
    const [totalRows, setTotalRows] = useState(1)

    useEffect(() => {
        const getData = async () => {
            {
                const paramString = queryString.stringify(filters)
                console.log(paramString);
                const { data, headers } = await base.query(res, paramString)
                setProducts(data)
                setTotalRows(Number(parseInt(headers['x-total-count'])))
            }
        }
        getData()
    }, [filters])

    const handleChangePage = newPage => {
        setFilters({
            ...filters,
            _page: newPage
        })
    }

    const handleSearch = searchValues => {
        setFilters({
            ...filters,
            _page: 1,
            name_like: searchValues
        })
    }

    const handleSort = sortValues => {
        const obj = queryString.parse(sortValues)
        setFilters({
            ...filters,
            _page: 1,
            _sort: obj._sort,
            _order: obj._order,
        })
    }

    const handleFilterByCategory = categoryValues => {
        if (categoryValues === '') {
            setFilters(initFilters)
        } else {
            setFilters({
                ...filters,
                _page: 1,
                categoryId: categoryValues
            })
        }
    }

    return {
        products: products,
        onChangePage: handleChangePage,
        filters: filters,
        totalRows: totalRows,
        onSearch: handleSearch,
        onSort: handleSort,
        onFilterByCategory: handleFilterByCategory
    }
}

export default useWomens
