import base from "../api/base";
import auth from "../auth/auth";
import queryString from 'query-string'

const payment = values => {
    console.log(values);
}

const save = async () => {
    const cartJson = localStorage.getItem('react-use-cart')
    const param = queryString.stringify({
        userId: auth.getAuth().id,
        status: false
    })
    const orderRes = await base.query('/orders', param)    
    const order = orderRes.data[0]
    console.log(order);
    
}

const create = async () => {
    const orderRes = await base.getByPro('/orders', 'userId', auth.getAuth().id)

}

export default {
    payment, save
}