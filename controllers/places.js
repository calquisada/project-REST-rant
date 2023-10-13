const router = require('express').Router()

router.get('/', (req, res) => {
   res.render('GET /places')
})

// GET /places
app.get('/', (req, res) => {
   res.render('places/index')
 })
 

module.exports = router


/*  router.get('/', (req, res) => {
    res.render('GET /places')
 }) */

 /* router.get('/', (req, res) => {
    res.send('GET /places')
 }) */