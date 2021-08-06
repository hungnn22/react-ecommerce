import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const Toast = (status, mess) => {
    status ? toast.success(mess, {autoClose: 2000}) : toast.error(mess, {autoClose: 2000}) 
}

export default Toast
