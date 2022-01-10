var strOutput = []
const getScript = document.currentScript
const from = getScript.dataset.from
const to = getScript.dataset.to
console.log(from, to)
async function getapi(url) {
  document.querySelector('.buttonClass').innerText = 'Please wait..'
  const response = await fetch(url)
  let data = await response.json()

  document.querySelector('.buttonClass').innerText = 'Translate'

  if (data) {
    data &&
      data[0].map((item) => {
        item[0].length > 0 && strOutput.push(item[0])
      })
  }

  strOutput = strOutput.toString()
  return strOutput
}
async function getInputValue() {
  strOutput = []
  var inputString = document.getElementById('input-string').value
  if (inputString) {
    var outputStr = await translateFunction(inputString, from, to)
    document.getElementById('output-string').value = outputStr.replace(
      /['",]+/g,
      ''
    )
  } else {
    console.clear()
  }
}

// reset input fiels
function resetInputValue() {
  document.getElementById('input-string').value = ''
  document.getElementById('output-string').value = ''
}
async function translateFunction(string, sl, tl) {
  try {
    const api_url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q='${string}'`
    return await getapi(api_url)
  } catch (error) {
    try {
      const api_url = `/.netlify/functions/translation/?baselocalecode=${sl}&datalanguagecode=${tl}&value=${string}`
      return await getapi(api_url)
    } catch (error) {
      console.log(error)
    }
  }
}
