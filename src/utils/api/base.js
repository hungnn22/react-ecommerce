import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3001",
    "Content-Type": "application/json"
})

const getAll = res => (instance.get(res))

const query = (res, paramString) => (instance.get(`${res}?${paramString}`))

const get = (res, id) => (instance.get(`${res}/${id}`))

const getByPro = (res, pro, values) => (instance.get(`${res}?${pro}=${values}`))

const add = (res, values) => (instance.post(res, values))

const edit = (res, id, values) => (instance.put(`${res}/${id}`, values))

const remove = (res, id) => (instance.delete(`${res}/${id}`))

export default {
    getAll, query, get, add, edit, remove, getByPro
}