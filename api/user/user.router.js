const router = require('express').Router()
const { signup, signin } = require('./user.controller')

router.post('/signup', signup)

router.post('/signin', signin)

router.get('/', (req, res) => {
  return res.send({
    availableRoutes: [
      'signup',
      'signin'
    ]
  })
})

module.exports = router
