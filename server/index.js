require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./controllers/authCtrl')
const auth = require('./middleware/authMiddleware')
const dashboard = require('./controllers/dashboard')
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

// get access to req.body in controllers
app.use(express.json())

// express static 
app.use(express.static('public'))

// Initiate user session
app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false
}))

// Connect server to database
massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => {
    console.log('Listening on port:', SERVER_PORT)
  })
})

// Credentials endpoints
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/checkForSession', authCtrl.checkForSession)
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)

// Dashboard endpoint
app.get('/api/dashboard/:id', auth.usersOnly, dashboard.getUsername)

app.get('/api/books')