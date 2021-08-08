import base from "../api/base";
import auth from "../auth/auth";
import queryString from 'query-string'

const payment = async (values, items, cartTotal) => {
    const user = auth.getAuth()
    const param = queryString.stringify({
        userId: user.id,
        status: false
    })
    let orderId = ''
    const getOrderRes = await base.query('/orders', param)
    const getOrder = getOrderRes.data[0]
    const defaultOrderValues = {
        total: cartTotal,
        status: true,
        createAt: Date.now(),
        orderJson: localStorage.getItem('react-use-cart'),
        address: values.address,
        phone: values.phone
    }
    if (typeof (getOrder) !== 'undefined') {
        const updateValues = {
            ...defaultOrderValues
        }
        const updateOrderRes = await base.edit('/orders', getOrder.id, updateValues)
        orderId = getOrder.id
    } else {
        const addValues = {
            ...defaultOrderValues,
            userId: user.id
        }
        const addOrderRes = await base.add('/orders', addValues)
        orderId = addOrderRes.data.id
    }
    for (let i = 0; i < items.length; i++) {
        const detailValues = {
            orderId: orderId,
            productId: items[i].id,
            quantity: items[i].quantity
        }
        console.log(detailValues);
        const detailRes = await base.add('/orderDetails', detailValues)       
        console.log(detailRes) 
    }
}

const signout = async () => {
    const cartJson = localStorage.getItem('react-use-cart')
    const cart = JSON.parse(cartJson)
    const { isEmpty, cartTotal } = cart
    const user = auth.getAuth()
    const param = queryString.stringify({
        userId: user.id,
        status: false
    })
    const orderValues = {
        userId: user.id,
        total: cartTotal,
        status: false,
        orderJson: cartJson,
        createAt: Date.now()
    }
    const getOrderRes = await base.query('/orders', param)
    const getOrder = getOrderRes.data[0]
    if (typeof (getOrder) === 'undefined') {
        if (isEmpty === false) {
            const addOrderRes = await base.add('/orders', orderValues)
        }
    } else {
        const updateOrderRes = await base.edit('/orders', getOrder.id, orderValues)
    }
    localStorage.clear()
}

export default {
    payment, signout
}