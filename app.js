// include modules
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
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

// route config
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const {email, password} = req.body
  return User.findOne({email: email, password: password})
    .lean()
    .then(user => {
      user ? res.render('welcome', { user }) 
           : res.render('index', {noFind: 1})
    })
    .catch(error => console.log(error))
})

app.listen(PORT, () => {
  console.log(`This app running on http://localhost:${PORT}`)
})

