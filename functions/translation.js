import axios from 'axios'
exports.handler = async function (event, context) {
  let requestParams = event['queryStringParameters']
  let value = requestParams['value']
  let baselocalecode = requestParams['baselocalecode']
  let datalanguagecode = requestParams['datalanguagecode']
  let response
  const urlValue = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${baselocalecode}&tl=${datalanguagecode}&dt=t&q=${value}`
  const url = encodeURI(urlValue)
  try {
    response = await axios.get(url)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Request-With, Content-Type , Accept',
    },
    body: JSON.stringify(response.data),
  }
}
