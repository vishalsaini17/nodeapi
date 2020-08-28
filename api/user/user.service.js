const db = require('../../database/')


module.exports = {
  create: (data, callback) => {
    db.query(
      'insert into user set username = ?, name = ?, email = ?, password = ?',
      [data.username, data.name, data.email, data.password],
      (error, result) => {
        (error) ? callback(error) : callback(null, result)
      }
    )
  },

  selectUser: (user, callback) => {
    db.query(
      `select * from user where username="${user}" or email="${user}"`,
      (error, result) => {
        (error) ? callback(error) : callback(null, result)
      }
    )
  },

  changePassword: (data, callback) => {

  }
}
