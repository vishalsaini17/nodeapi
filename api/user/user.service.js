const db = require('../../database/')

module.exports = {
  create: (data, callback) => {
    console.log({ data, callback });
    try {
      db.query(
        `insert into user (username, name, email, password, verified) values (?,?,?,?,?)`,
        [data.username, data.name, data.email, data.password, data.verified],
        (error, resultes, fields) => {
          console.log("query callback running...");
          if (error) {
            // callback(error)
            console.log("error");
          }
          // callback(null, resultes)
          console.log("no error");
        }
      )
    }
    catch (error) {
      console.log(error);
    }
  },

  select: (data, callback) => {

  }
}
