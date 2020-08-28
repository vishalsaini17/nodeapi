const db = require('../../database/')


module.exports = {
  create: (data, callback) => {
    db.query(
      'insert into user set username = ?, name = ?, email = ?, password = ?',
      [data.username, data.name, data.email, data.password],
      (error, result) => {
        if (error) {
          callback(error)
        }
        else {
          return callback(null, result)
        }
      }
    )
  },

  select: (data, callback) => {

  }
}
