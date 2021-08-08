const phoneValidate = values => {
    const regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
    return regex.test(values)
}