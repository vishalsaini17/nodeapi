require('dotenv').config()
const { verify } = require('jsonwebtoken')

const env = process.env

module.exports = {
  auth: (req, res, next) => {
    let token = req.get("authorization")
    if (token) {
      token = token.slice(7)
      verify(token, env.APP_ENC, (err, decoded) => {
        (err) ? res.send({
          success: 0,
          message: "Invalid token"
        }) : next()
      })
    }
    else {
      res.send({
        success: 0,
        message: "Access denied! unauthorized user"
      })
    }
  }
}