function myRandomError({ chance, message, result }) {
  const percentage = chance / 100,
    randomNumber = Math.random()
  if (randomNumber <= percentage) {
    throw new Error(message)
  }
  return result
}

try {
  const result = myRandomError({
    chance: 20,
    message: 'Error, algo a ocurrido :(',
    result: 100,
  })
  console.log(`Resultado: ${result}`)
} catch ({ message }) {
  console.error(message)
}
