const db = require('../../database/')


module.exports = {
  create: (data, callback) => {
    db.query(
      'insert into user set username = ?, name = ?, email = ?, password = ?, verified = ?',
      [data.username, data.name, data.email, data.password, data.verified],
      (error, result) => {
        console.log("query callback running...");
        if (error) {
          console.log("query error");
          callback(error)
        }
        else {
          console.log("no query error");
          return callback(null, result)
        }
      }
    )

  },

  select: (data, callback) => {

  }
}
