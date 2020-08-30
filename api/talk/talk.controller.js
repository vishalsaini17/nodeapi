require('dotenv').config()
const env = process.env
const io = require('socket.io')(env.SOCKET_PORT)

module.exports = {
  talk: (req, res) => {
    return res.send({
      success: 1,
      mesage: "router works :)"
    })
  }
}