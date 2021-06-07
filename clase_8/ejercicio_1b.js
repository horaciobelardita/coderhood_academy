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

function main() {
  divide(10, 0)
    .then((result) => {
      console.log(result)
    })
    .catch(({ message }) => {
      console.error(message)
    })
}

main()
