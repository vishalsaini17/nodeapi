const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { create, selectUser } = require('./user.service')
require('dotenv').config()
const env = process.env

module.exports = {
  signup: (req, res) => {
    const body = req.body
    const salt = genSaltSync(10)
    body.password = hashSync(body.password, salt)

    create(body, (err, results) => {
      if (err) {
        return res.status(500).send({
          success: 0,
          message: err.sqlMessage,
          code: err.code
        })
      }
      return res.status(200).send({
        success: 1,
        data: results
      });
    })
  },
  signin: (req, res) => {
    const body = req.body
    selectUser(body.user, (err, results) => {
      if (err) {
        return res.status(500).send({
          success: 0,
          message: err
        })
      }

      if (results.length == 0) {
        return res.status(200).send({
          success: 0,
          message: "invalid username or email!!!"
        })
      }

      const data = results[0]
      const passCompare = compareSync(body.password, data.password)
      if (passCompare) {
        data.password = undefined
        const jwt = sign({ result: data }, env.APP_ENC, {
          expiresIn: '1h'
        })
        return res.send({
          success: 1,
          message: "login successfully",
          token: jwt
        })
      }
      else {
        return res.send({
          success: 0,
          message: "password didn't match",
        })
      }

    })
  },
  logout: (req, res) => {
    
  }
}