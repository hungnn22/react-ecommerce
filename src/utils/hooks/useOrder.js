import { basePlacements } from "@popperjs/core"
import { useEffect, useState } from "react"
import base from '../api/base'
import queryString from 'query-string'
import auth from "../auth/auth"

const useOrder = (userId) => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            if (userId !== null) {
                const param = queryString.stringify({
                    userId: userId,
                    status: true
                })
                const { data } = await base.query('/orders', param)
                setOrders(data)
            }
        }
        getOrders()
    }, [])

    return {
        orders: orders
    }
}

export default useOrder
