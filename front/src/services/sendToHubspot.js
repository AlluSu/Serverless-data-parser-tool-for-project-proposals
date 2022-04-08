import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL // eslint-disable-line

const sendJSON = async(assignedWords, responseTarget) => {
  const sendUrl = `${baseUrl}?route=sendToHubspot`
  const sendData = JSONfromAssignedWords(assignedWords, responseTarget)
  console.log(JSON.stringify(sendData))
  const res = await axios.post(sendUrl, JSON.stringify(sendData))
  return res.data
}
const updateDeal = async(id, assignedWords) => {
  const properties = JSONfromAssignedWords(assignedWords) //propertiesOfAssignedWords(assignedWords)
  const sendData = { dealId: id, properties: properties }
  console.log(JSON.stringify(sendData))
  const updateUrl = `${baseUrl}?route=updateDeal`
  const res = await axios.post(updateUrl, JSON.stringify(sendData))
  console.log(res, res.data)
  return res.data
}

const JSONfromAssignedWords = (assignedWords, responseTarget) => {
  const JSONObj = { deal: {} }
  assignedWords.forEach(word => {
    if (!JSONObj.deal[word.category]) JSONObj.deal[word.category] = []
    JSONObj.deal[word.category].push(word.word)
  })
  if (responseTarget) JSONObj.responseTarget = responseTarget
  return JSONObj
}

export default { sendJSON, updateDeal }
