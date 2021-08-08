import { useEffect, useState } from "react"
import base from "../api/base"

const useType = () => {

    const [types, setTypes] = useState([])

    useEffect(() => {
        const getList = async () => {
            const { data } = await base.getAll('/types')
            setTypes(data)
        }
        getList()
    }, [])

    return {
        types: types
    }
}

export default useType
