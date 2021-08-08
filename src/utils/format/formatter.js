const formatter = values => {
    const formatInt = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    return formatInt.format(values)

}

export default formatter