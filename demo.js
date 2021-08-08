const faker = require('faker')
const fs = require('fs')

const getViews = () => {
    const list = []
    for (let i = 0; i < 30; i++) {
        const item = {
            id: faker.datatype.uuid(),
        }
        list.push(item)
    }
    return list
}


const getDes = () => {

}

(() => {
    const db = {
        reviews: getViews()
    } 

    fs.writeFile("data.json", JSON.stringify(db), () => {
        console.log("Success!")
    })
})()


