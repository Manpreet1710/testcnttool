//get input
const getScripts = document.currentScript
const initaillanguage = getScripts.dataset.language

async function getInputValue() {
  let languageList = [
    'sq',
    'am',
    'ar',
    'zh',
    'da',
    'gu',
    'hy',
    'id',
    'it',
    'ja',
    'ko',
    'la',
    'ms',
    'ne',
    'pa',
    'sq',
    'ta',
    'te',
    'zh',
    'ur',
  ]
  let inputString = document.getElementById('input-string').value

  for (let i = languageList.length - 1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * i)
    const temp = languageList[i]
    languageList[i] = languageList[randomNum]
    languageList[randomNum] = temp
  }

  languageList[0] = initaillanguage
  languageList[5] = initaillanguage
  languageList[10] = initaillanguage
  languageList[15] = initaillanguage
  paraphraseControler(inputString, languageList)
}

//control paraphrase
async function paraphraseControler(string, lang) {
  let paraphrase = string

  //for 3 output - start position, end position and option number
  showParaphrase(0, 5, 1)
  showParaphrase(5, 10, 2)
  // showParaphrase(10, 15, 3)

  async function showParaphrase(start, end, option) {
    for (let i = start; i < end; i++) {
      try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${
          lang[i]
        }&tl=${lang[i + 1]}&dt=t&q=${paraphrase}`
        const response = await fetch(url)
        let data = await response.json()
        let strOutput = []
        if (data) {
          data &&
            data[0].map((item) => {
              item[0].length > 0 && strOutput.push(item[0])
            })
        }
        strOutput = strOutput.toString()
        paraphrase = strOutput.replace(/['",]+/g, '')
        console.log(paraphrase)
        if (i == end - 1) {
          let inputWords = document
            .getElementById('input-string')
            .value.toLowerCase()
            .replace(/ \s*/g, ' ')
            .split(' ')
          document.getElementById(`total-input-words-${option}`).innerText =
            inputWords.length
          let differentWordCount = 0
          paraphrase.split(' ').forEach((word) => {
            if (inputWords.indexOf(word.toLowerCase()) < 0) {
              differentWordCount++
            }
          })
          document.getElementById(`total-different-${option}`).innerText =
            differentWordCount
          document.getElementById(`paraphrase-output-${option}`).innerText =
            paraphrase
          document.getElementById(
            `tooltip-${option}`
          ).title = `${differentWordCount} out of ${inputWords.length} words are different from input words`
        }
      } catch (error) {
        try {
          const url = `/.netlify/functions/parapharse/?baselocalecode=${
            lang[i]
          }&datalanguagecode=${lang[i + 1]}&value=${paraphrase}`
          const response = await fetch(url)
          console.log(response)
          let data = await response.json()
          let strOutput = []
          if (data) {
            data &&
              data[0].map((item) => {
                item[0].length > 0 && strOutput.push(item[0])
              })
          }
          strOutput = strOutput.toString()
          paraphrase = strOutput.replace(/['",]+/g, '')
          console.log(paraphrase)
          if (i == end - 1) {
            let inputWords = document
              .getElementById('input-string')
              .value.toLowerCase()
              .replace(/ \s*/g, ' ')
              .split(' ')
            document.getElementById(`total-input-words-${option}`).innerText =
              inputWords.length
            let differentWordCount = 0
            paraphrase.split(' ').forEach((word) => {
              if (inputWords.indexOf(word.toLowerCase()) < 0) {
                differentWordCount++
              }
            })
            document.getElementById(`total-different-${option}`).innerText =
              differentWordCount
            document.getElementById(`paraphrase-output-${option}`).innerText =
              paraphrase
            document.getElementById(
              `tooltip-${option}`
            ).title = `${differentWordCount} out of ${inputWords.length} words are different from input words`
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}

// clipboard
function clipboardHandler(id) {
  let copyTextarea = document.getElementById(id)
  copyTextarea.focus()
  copyTextarea.select()
  try {
    document.execCommand('copy')
  } catch (err) {
    console.log('Oops, unable to copy')
  }
}
