const router = require('express').Router()
const { createUser } = require('./user.controller')

router.post('/signup', createUser)

router.post('/signin', createUser)

router.get('/', (req, res) => {
  return res.send({
    availableRoutes: [
      'signup',
      'signin'
    ]
  })
})


module.exports = router
