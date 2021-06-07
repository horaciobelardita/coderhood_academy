function obtenerNumeroAsync(timeInMiliseconds) {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random()
    setTimeout(() => {
      if (randomNumber < 0.5) {
        resolve(10)
      }
      reject('Algo fue mal :(')
    }, timeInMiliseconds)
  })
}

function sleep(timeInMiliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeInMiliseconds)
  })
}

async function main() {
  try {
    const result = await obtenerNumeroAsync(2000)
    console.log(result)
    console.log('start sleep')
    await sleep(3000)
    console.log('sleep end')
  } catch (error) {
    console.error(error)
  }
}

main()
