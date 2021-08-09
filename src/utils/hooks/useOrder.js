import { useEffect, useState } from "react"
import base from '../api/base'

const useOrder = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async () => {            
            const { data } = await base.getAll('/orders?status=true')
            setOrders(data)
        }
        getOrders()
    }, [])

    return {
        orders: orders
    }
}

export default useOrder
