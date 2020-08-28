const router = require('express').Router()
const { signup, signin, logout } = require('./user.controller')
const { auth } = require("../../auth")

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/logout', auth, logout)

router.get('/', auth, (req, res) => {
  return res.send({
    availableRoutes: [
      'signup',
      'signin',
      'logout'
    ]
  })
})

module.exports = router
