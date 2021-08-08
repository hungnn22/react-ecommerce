import { useEffect, useState } from "react"
import base from "../api/base"

const useCategory = () => {

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState({})

    useEffect(() => {
        const getList = async () => {
            const { data } = await base.getAll('/categories')
            setCategories(data)
        }
        getList()
    }, [])

    const getCategoryName = async categoryId => {
        const { data } = await base.get('/categories', categoryId)
        return data.name
    }


    return {
        categories: categories,
        getCategoryName: getCategoryName
    }
}

export default useCategory
