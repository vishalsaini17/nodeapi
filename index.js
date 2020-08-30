require('dotenv').config()
const env = process.env
const express = require('express')
const app = express()
app.use(express.json())

if(env.APP_ENV == 'development'){
  let bodyParser = require('body-parser')
  app.use(bodyParser.urlencoded({ extended: true }));
}

// imports
const userRouter = require('./api/user/user.router')
const talkRouter = require('./api/talk/talk.router')

app.use('/api/user', userRouter)
app.use('/api/talk', talkRouter)




app.listen(env.APP_PORT)