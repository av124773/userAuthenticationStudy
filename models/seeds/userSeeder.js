const mongoose = require('mongoose')
const User = require('../user')
const userList = require('../../user.json')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongoose error!')
})
db.once('open', () => {
  userList.results.forEach((userData) => {
    console.log(userData)
    User.create({
      firstName: userData.firstName,
      email: userData.email,
      password: userData.password
    })
  })
  console.log('mongoose connected!')
})
