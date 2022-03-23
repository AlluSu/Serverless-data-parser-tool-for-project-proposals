const { parseParameters } = require('./parsaLogic/utils/parseParameters')
const parseReqBody = require('./parsaLogic/utils/parseReqBody')

module.exports = async (event) => {
    let data = event.body
    let buff = new Buffer(data, 'base64');
    event.body = buff.toString('ascii');
    event = parseReqBody(event)

    if(!event.body.channel_name) { 
        return {status: 200, body: "Info missing in your request."}
    }

    const params = event.body.text.split('+').filter(Boolean)

    try {
        const parsedParams = await parseParameters(params, event.body.channel_name)
        var queryParams = ''
        Object.keys(parsedParams).forEach(key => queryParams += `${key}=${parsedParams[key]}&`)
        return `Please find your parsed data with the parameters: channel = ${parsedParams.channel}, user = ${parsedParams.user || 'not chosen'} and timelimit = ${parsedParams.oldest || 'not chosen'}. See the result at https://aws.d2fgc3zkz3vtk1.amplifyapp.com/${queryParams.substring(0,queryParams.length-1)}`
    } catch (error) {
        console.log(error)
        return 'There was a problem with your parsing.'
    }
}