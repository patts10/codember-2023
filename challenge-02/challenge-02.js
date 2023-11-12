const miniCompiler = (message) => {
  let code = 0
  const symbol = '#' | '@' | '*' | '&'
  let answer = ''

  characterList = message.split('')

  characterList.forEach((char) => {
    if (char === '&') {
      answer += code
      return
    }

    if (char === '#') {
      code++
    } else if (char === '@') {
      code--
    } else {
      code = code * code
    }
  })
  console.log(answer)
  return answer
}

miniCompiler(
  '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
)
