import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.cloudinary.com/v1_1/hungnn22cloudinary",
    "Content-Type": 'application/jsonserver'
})

const upload = values => (instance.post('/image/upload', values))

export default {upload}