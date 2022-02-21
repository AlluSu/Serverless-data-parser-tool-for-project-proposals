const { slackService } = require('../services/slackService')
const { slackClient } = require('../services/slackClient')
const slack = slackService({ slackClient })
const { parseTimestamp } = require('./parseSlackTimestamp.js')

/**
 * Regex which is used to determine is a parameter coming from the Slash command a number of hours as in "24"
 * @param {A value to be checked if is a numeric value} val 
 * @returns True if is numeric as in is a valid number of hours
 */
function isNumeric(val) {
  return /^-?\d+$/.test(val)
}

/**
 * Checks if parameter is username.
 * @param {Username coming from Slack in the form of "@user.name"} param 
 * @returns True if parameter is username.
 */
const parameterIsUsername = (param) => {
  return param.charAt(0) === '@'
}

/**
 * Checks if parameter is an amount of hours (a number).
 * @param {Some value coming from the Slack channel} param 
 * @returns True if the parameter is a number.
 */
const parameterIsHours = (param) => {
  return isNumeric(param)
}

/**
 * Checks if given parameter is a valid channels in the Slack workspace where the command is launched.
 * @param {Some value coming from the Slack channel} param 
 * @returns True if given parameter is a valid and existing channel.
 */
const parameterIsValidChannel = async (param) => {
  const validChannels = await slack.getChannels()
  for (const channel in validChannels.channels) {
    if (param === validChannels.channels[channel].name) {      
      return true
    }
  }
  return false
}

/**
 * Function which takes the Slash command parameters sent from the Slack workspace.
 * Checks the amount and type of parameters e.g "24" as a number, @user.name as a user and so on.
 * All parameters are optional: {"channel": CHANNEL_NAME, "user": USER_NAME, "hours": HOW_MANY_HOURS_BACK}
 * TODO: Possibly in the future to work with 2 parametersm e.g "@user.name, 24" or "general, 24" and so on.
 * @param {An object of parameters, expected 0, 1 or 3} parameters 
 * @param {Channel where the command is sent e.g "general" or "random"} source_channel 
 * @returns arguments depending on the parameters which are passed then forward.
 */
const parseParameters = async (parameters, source_channel) => {
  if (parameters.length === 0) {
    const channel = source_channel
    const user = null
    const oldest = parseTimestamp(Date.now() * 1000, null)
    const args = { channel, user, oldest }
    return args
  } else {
    const args = { channel: false, user: null, oldest: false}
    parameters.forEach(element => {
      if (parameterIsUsername(element) && !args.user) args.user = element
      else if (parameterIsHours(element) && !args.oldest) args.oldest = parseTimestamp(Date.now() * 1000, element)
      else if (parameterIsValidChannel(element) && !args.channel) args.channel = element
      else throw new Error('Invalid parameters')
    })
    if (!args.channel) args.channel = source_channel
    return args
}

/*
  if (parameters.length === 1) {
    
    if (parameterIsHours(parameters[0])) {
      const hours = parameters[0]
      const oldest = parseTimestamp(Date.now() * 1000, hours)
      const channel = source_channel
      const user = null
      const args = { channel, user, oldest }
      return args
    }
    else if (parameterIsUsername(parameters[0])) {
      const user = parameters[0]
      const oldest = parseTimestamp(Date.now() * 1000, null)
      const channel = source_channel
      const args = { channel, user, oldest }
      return args
    }
    else if (parameterIsValidChannel(parameters[0])) {
      
      const channel = parameters[0]
      const user = null
      const oldest = parseTimestamp(Date.now() * 1000, null)
      const args = { channel, user, oldest }
      return args
    } else {
      throw new Error('Invalid parameter(s).')
    }
  }
  if (parameters.length === 3) {
    const isValidChannel = await parameterIsValidChannel(parameters[0])
    if(!isValidChannel) throw new Error('Invalid Channel')
    const channel = parameters[0] || 'general'
    const user = parameters[1]
    const hours = parameters[2]
    const oldest = parseTimestamp(Date.now() * 1000, hours)
    const args = { channel, user, oldest }
    return args
  }*/
}

module.exports = { parseParameters }
