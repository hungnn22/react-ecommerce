import { useEffect, useState } from "react"
import base from "../api/base"

const useCategory = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getList = async () => {
            const { data } = await base.getAll('/categories')
            setCategories(data)
        }
        getList()
    }, [])

    return {
        categories: categories
    }
}

export default useCategory
