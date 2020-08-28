const { create } = require('./user.service')


module.exports = {
  signup: (req, res) => {
    const body = req.body
    // body.verified = false

    create(body, (err, results) => {
      if (err) {
        return res.status(500).send({
          success: 0,
          message: err.sqlMessage
        })
      }
      return res.status(200).send(results);
    })
  },
  signin: (req, res) => {

  }
}