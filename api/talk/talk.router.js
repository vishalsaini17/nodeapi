const router = require('express').Router()
const { auth } = require("../../auth")
const { talk } = require("./talk.controller")

router.get("/", auth, talk)

module.exports = router