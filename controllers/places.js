const router = require('express').Router()

router.get('/', (req, res) => {
  // GET /places
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/weera-thai1-1024x683.jpg'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/1200px-Internet_cafe_golden_princess.jpg'
  }]  
   res.render('places/index', {places})
 })
 

 module.exports = router
 
/*  router.get('/', (req, res) => {
    res.render('GET /places')
 }) */

 /* router.get('/', (req, res) => {
    res.send('GET /places')
 }) */