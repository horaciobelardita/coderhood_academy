function lte(value) {
  return (field) => field <= value
}

function getError(number) {
  const errores = {
    NetworkError: 'Hubo un problema en la conexion de internet',
    InternalError: 'Hubo un error interno en el el servidor',
    AlienError: 'Una anomalia intercepto la informacion',
  }
  const error = [
    [lte(0.1), errores.AlienError],
    [lte(0.18), errores.InternalError],
    [lte(0.25), errores.NetworkError],
  ].find(([fn]) => fn(number))
  return error?.pop()
}

function getInfo() {
  let person = { id: 19310, nombre: 'Bautista', apellido: 'Di Santo' }

  const randomNumber = Math.random()

  const error = getError(randomNumber)
  if (error) {
    throw new Error(error)
  }
  return console.log(person)
}

try {
  getInfo()
} catch (error) {
  console.error(error)
}
