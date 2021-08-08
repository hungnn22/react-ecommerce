import { useEffect, useState } from "react"
import base from "../api/base"
import queryString from 'query-string'
import cloud from "../api/cloud"

const res = '/products'

const useProduct = (typeId) => {

    const initFilters = {
        _limit: 6,
        _page: 1,
        typeId: typeId !== null ? typeId : ''

    }


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

    const handleRemove = async id => {
        const { data } = await base.remove('/products', id)
        setProducts(products.filter(product => (product.id !== id)))
    }

    const handleAdd = async values => {
        const formData = new FormData()
        formData.append('file', values.image[0])
        formData.append('upload_preset', 'ecommer')


        const response = await cloud.upload(formData)
        const linkImg = response.data.secure_url

        values = {
            ...values,
            price: Number(values.price),
            quantity: Number(values.quantity),
            image: linkImg,
            rating: Math.floor(Math.random() * 5 + 1),
            typeId: Number(values.typeId)
        }
        const { data } = await base.add('/products', values)
        setProducts([...products, data])
    }

    const handleEdit = async (id, values, product) => {
        let linkImg = ''

        if (values.image.length !== 0) {
            const formData = new FormData()
            formData.append('file', values.image[0])
            formData.append('upload_preset', 'ecommer')
            const response = await cloud.upload(formData)
            linkImg = response.data.secure_url
        } else {
            linkImg = product.image
        }

        values = {
            ...values,
            image: linkImg
        }
        const { data } = await base.edit('/products', id, values)
        const newList = products.map(p => (p.id === id ? data : p))
        setProducts(newList)
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
        products: products,
        onChangePage: handleChangePage,
        filters: filters,
        totalRows: totalRows,
        onSearch: handleSearch,
        onSort: handleSort,
        onFilterByCategory: handleFilterByCategory,
        onRemove: handleRemove,
        onAdd: handleAdd,
        onEdit: handleEdit
    }
}

export default useProduct
