// const faker = require('faker')
// const fs = require('fs')

// const getViews = () => {
//     const list = []
//     for (let i = 0; i < 30; i++) {
//         const item = {
//             id: faker.datatype.uuid(),
//             content: faker.lorem.sentence(),
//             productId: Math.floor(Math.random() * 8 + 1),
//             rating: Math.floor(Math.random() * 5 + 1),
//             createAt: faker.date.past().toDateString()
//         }
//         list.push(item)
//     }
//     return list
// }


// const getDes = () => {

// }

// (() => {
//     const db = {
//         reviews: getViews()
//     } 

//     fs.writeFile("data.json", JSON.stringify(db), () => {
//         console.log("Success!")
//     })
// })()


const date = new Date()

console.log(date.getHours())

