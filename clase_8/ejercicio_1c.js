function divide(dividend, divider) {
  return new Promise((resolve, reject) => {
    const timeToResolve = 3000
    setTimeout(() => {
      if (divider === 0) {
        reject(new Error('Zero Division Error'))
      }
      resolve(dividend / divider)
    }, timeToResolve)
  })
}

async function main() {
  try {
    const result = await divide(10, 0)
    console.log(result)
  } catch ({ message }) {
    console.error(message)
  }
}

main()
