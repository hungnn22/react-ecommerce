import { useEffect, useState } from "react"
import base from "../api/base"
import queryString from 'query-string'

const res = '/categories'

const useCategory = () => {


    const initFilters = {
        _limit: 6,
        _page: 1,
    }

    const [categories, setCategories] = useState([])
    const [filters, setFilters] = useState(initFilters)
    const [totalRows, setTotalRows] = useState(1)

    useEffect(() => {
        const getData = async () => {
            {
                const paramString = queryString.stringify(filters)
                console.log(paramString);
                const { data, headers } = await base.query(res, paramString)
                setCategories(data)
                setTotalRows(Number(parseInt(headers['x-total-count'])))
            }
        }
        getData()
    }, [filters])

    const handleRemove = async id => {
        const { data } = await base.remove('/categories', id)
        setCategories(categories.filter(categories => (categories.id !== id)))
    }

    const handleAdd = async values => {
        const { data } = await base.add('/categories', values)
        setCategories([...categories, data])
    }

    const handleEdit = async (id, values, category) => {
        const { data } = await base.edit(res, id, values)
        const newList = categories.map(p => (p.id === id ? data : p))
        setCategories(newList)
    }


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
        categories: categories,
        onChangePage: handleChangePage,
        filters: filters,
        totalRows: totalRows,
        onSearch: handleSearch,
        onSort: handleSort,
        onRemove: handleRemove,
        onAdd: handleAdd,
        onEdit: handleEdit
    }
}

export default useCategory
