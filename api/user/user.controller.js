const { genSaltSync, hashSync } = require('bcrypt')
const { create } = require('./user.service')


module.exports = {
  signup: (req, res) => {
    const body = req.body
    const salt = genSaltSync(10)
    console.log({ body, salt });
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

  }
}