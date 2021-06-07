function divide(dividend, divider) {
  return new Promise((resolve, reject) => {
    const timeToResolve = 3000
    setTimeout(() => {
      if (divider === 0) {
        reject('Zero Division Error')
      }
      resolve(dividend / divider)
    }, timeToResolve)
  })
}
