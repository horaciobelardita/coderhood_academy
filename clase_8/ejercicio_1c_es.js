function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    const TIME_OUT_IN_MS = 3000
    if (divisor === 0) {
      return reject(new Error('Zero Division Error: division by zero'))
    }
    setTimeout(() => {
      resolve(dividendo / divisor)
    }, TIME_OUT_IN_MS)
  })
}
async function main() {
  try {
    const dividendo = 5,
      divisor = 0
    const resultado = await dividir(dividendo, divisor)
    console.log(`${dividendo} / ${divisor} = ${resultado}`)
  } catch ({ message }) {
    console.error(message)
  }
}
main()
