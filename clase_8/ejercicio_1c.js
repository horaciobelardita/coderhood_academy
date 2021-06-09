function divide(dividend, divider) {
  return new Promise((resolve, reject) => {
    const timeOut = 3000
    if (divider === 0) {
      return reject(new Error('Zero Division Error: division by zero'))
    }
    setTimeout(() => {
      resolve(dividend / divider)
    }, timeOut)
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
