const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = 3001

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose error!')
})
db.once('open', () => {
  console.log('mongoose connected!')
})

app.get('/', (req, res) => {
  res.send('express test.')
})

app.listen(PORT, () => {
  console.log(`This app running on http://localhost:${PORT}`)
})

