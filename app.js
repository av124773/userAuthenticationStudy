// include modules
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const User = require('./models/user')

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = 3001

// mongoose setting
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongoose error!')
})
db.once('open', () => {
  console.log('mongoose connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cookieParser('9527'))

// route config
app.get('/', (req, res) => {
  if (req.signedCookies.id) {
    const id = req.signedCookies.id
    User.findOne({ _id: id })
      .lean()
      .then(user => {
        res.render('welcome', { user, cookieStatus: true })
      })
      .catch(error => console.log(error))
  } else {
    res.render('index', { cookieStatus: false })
  }
})

app.post('/login', (req, res) => {
  const {email, password} = req.body
  return User.findOne({ email: email, password: password })
    .lean()
    .then(user => {
      if (user) {
        res.cookie('id', `${user._id}`, {signed: true})
        res.redirect('/')
      } else {
        res.render('index', { noFind: true })
      }
    })
    .catch(error => console.log(error))
})

app.get('/logout', (req, res) => {
  res.clearCookie('id', {})
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`This app running on http://localhost:${PORT}`)
})

