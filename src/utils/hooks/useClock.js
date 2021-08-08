import { useEffect, useState } from "react"

const useClock = () => {

    const [timer, setTimer] = useState({})

    const getCurrentTime = () => {
        const date = new Date()
        return {
            hour: date.getHours(),
            min: date.getMinutes(),
            sec: date.getSeconds()
        }
    }

    useEffect(() => {
        const show = setInterval(() => {
            setTimer(getCurrentTime)
        }, 1000)
        return (() => {
            clearInterval(show)
        })
    }, [])


    return { timer }
}

export default useClock
