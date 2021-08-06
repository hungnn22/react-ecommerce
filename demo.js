const faker = require('faker')
const fs = require('fs')

const getViews = () => {
    const list = []
    for (let i = 0; i < 20; i++) {
        const view = {
            hehe: faker.commerce.productDescription()
        }
        list.push(view)
    }
    return list
}


const getDes = () => {

}

(() => {
    const db = {
        views: getViews()
    } 

    fs.writeFile("data.json", JSON.stringify(db), () => {
        console.log("Success!")
    })
})()