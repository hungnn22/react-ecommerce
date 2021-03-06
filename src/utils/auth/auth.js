const setAuth = values => {
    localStorage.setItem('user', JSON.stringify(values))
}

const getAuth = () => {
    return typeof (localStorage.getItem('user') !== 'undefined') ?
        (JSON.parse(localStorage.getItem('user'))) : null
}

const isSignin = () => {
    return localStorage.getItem('user') !== null
}

const clear = () => {
    localStorage.removeItem('user')
}

const isAdmin = () => {
    try {
        if (getAuth()) {
            const user = JSON.parse(localStorage.getItem('user'))
            console.log(user);
            return user.id === 1 ? true : false
        }
        else {
            console.log("Auth hkajhsd")

            return false

        }
    } catch (error) {
        console.log("erro")
        return false
    }
}

export default {
    isSignin, isAdmin, setAuth, getAuth, clear
}