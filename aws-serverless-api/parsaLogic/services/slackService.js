const slackService = ({ slackClient }) => {

  const getUsers = async () => {
    const users = []
    let apiResult = undefined
    try {
      const newApiResult = await slackClient.users.list({})
      apiResult = newApiResult
      
      apiResult.members
        .filter((elem) => !elem.is_bot)
        .forEach((elem) =>
          users.push({ id: elem.id, real_name: elem.real_name, username: elem.name })
        )
    } catch (error) {
      throw new Error(`Error in getUsers: ${error}`)
    }
    return users
  }

  const getChannels = async () => {
    try {
      const channels = await slackClient.conversations.list({})      
      return channels
    } catch (error) {
      throw new Error(`Error in getChannels: ${error}`)
    }
  }

  const getChannelNames = async () => {
    const channels = []
    try {
      const result = await slackClient.conversations.list({})
      result.channels.filter((elem) => elem.is_channel).forEach((elem) => channels.push(elem.name))
    } catch (error) {
      throw new Error(`Error in getChannels: ${error}`)
    }
    return channels
  }

  const getChannelIds = async () => {
    const channels = []
    const result = await slackClient.conversations.list({})
    result.channels.filter((elem) => elem.is_channel).forEach((elem) => channels.push(elem.id))
    return channels
  }

  const getChannelMessages = async (channelId) => {
    try {
      const apiResult = await slackClient.conversations.history({
        channel: channelId,
      })
      return apiResult.messages
    } catch (error) {
      throw new Error(`Error in getChannelMessages: ${error}`)
    }
  }

  /**
   * Gets a Slack message and all of it's replies by channel Id and timestamp.
   * @param {Object} args In the form of {channel: CHANNEL_ID, ts: THREAD_TIMESTAMP}
   * @returns All messages from the desired thread
   */
  const getThreadMessages = async (args) => {
    try {
      const apiResult = await slackClient.conversations.replies(args)
      return apiResult.messages
    } catch (error) {
      throw new Error(`Error in getThreadMessages: ${error}`)
    }
  }

  const getAllThreadsMessages = async (channelId, ts_array) => {
    let messages = []
    try {
      for (const ts of ts_array) {
        const apiResult = await slackClient.conversations.replies({
          channel: channelId,
          ts: ts,
        })
        messages = messages.concat(apiResult.messages)
      }
    } catch (error) {
      throw new Error(`Error in getAllThreadsMessages: ${error}`)
    }
    return messages
  }

  const getChannelWithParameters = async (channelId) => {
    let messages = []
    console.log('Not implemented ', channelId)
    return messages
  }

  const findAllByUser = async (id) => {
    let messages = []

    try {
      const result = await slackClient.conversations.list({})

      for (const channel of result.channels) {
        const channelMessages = await getChannelMessages(channel['id'])
        const ts = []
        channelMessages.forEach((msg) => {
          if (msg.thread_ts) ts.push(msg.ts)
          if (msg.user === id) messages.push(msg)
        })
        const threadMessages = await getAllThreadsMessages(channel['id'], ts)
        threadMessages.forEach((msg) => {
          if (msg.user === id) {
            messages.push(msg)
          }
        })
      }
    } catch (error) {
      throw new Error(`Error in findAllByUser: ${error}`)
    }

    return messages
  }

  const sendMessage = async (channelId, text) => {
    const result = await slackClient.chat.postMessage({
      channel: channelId,
      text: text,
    })

    console.log('sendMessage : ', channelId, text)
    console.log('Result : ', result)
  }

  /**
   * A function which opens a modal after using a message shortcut in slack.
   * @param {string} triggerId 
   * @param {object} viewObject 
   */
  const sendModalView = async (triggerId, viewObject) => {
    try {
      const result = await slackClient.views.open({
        trigger_id:triggerId,
        view: viewObject,
      })
      console.log(result)
    }
    catch (error) {
      console.error(error)
    }
  }

  return Object.freeze({
    getUsers,
    getChannels,
    getChannelNames,
    getChannelIds,
    getChannelMessages,
    getChannelWithParameters,
    getThreadMessages,
    findAllByUser,
    sendMessage,
    getAllThreadsMessages,
    sendModalView,
  })
}

module.exports = { slackService }
