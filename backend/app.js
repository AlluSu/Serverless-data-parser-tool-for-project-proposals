require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const importHistory = require('./controllers/slackMessages.js')
const slackChannels = require('./controllers/slackChannels.js')
const { slackUsers, slackGetAllByUser } = require('./controllers/slackUsers.js')
const { parseTimestamp } = require('./utils/parseSlackTimestamp')
const { slackService } = require('./services/slackService')
const { slackClient } = require('./services/slackClient')
const slack = slackService({ slackClient })


app.use(cors())
app.use(express.static('build'))

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.get('/api/data/:channelId', (req, res) => {
  importHistory(res, req.params.channelId)
})

app.get('/api/channels', (req, res) => {
  slackChannels(res, slack)
})

app.get('/api/users', (req, res) => {
  slackUsers(res, slack)
})

app.get('/api/users/:id', (req, res) => {
  if (req.params.id) slackGetAllByUser(res, slack, req.params.id)
  else return res.badRequest()
})

app.post('/api/data', (req, res) => {
  //expects a post with data in format, all parameters are optional: {"channel": CHANNEL_NAME, "hours": HOW_MANY_HOURS_BACK, "user": USER_NAME}
  console.log(req.body)
  var channel = req.body.channel || 'general'
  var oldest = parseTimestamp(Date.now() * 1000, req.body.hours)
  var user = req.body.user

  importHistory(res, channel, oldest, user)
})

module.exports = app
