const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://secretlasvegas.co/wp-content/uploads/2023/07/weera-thai1-1024x683.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://res.heraldm.com/content/image/2020/03/12/20200312000625_0.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})



// https://secretlasvegas.co/wp-content/uploads/2023/07/weera-thai1-1024x683.jpg
// https://res.heraldm.com/content/image/2020/03/12/20200312000625_0.jpg