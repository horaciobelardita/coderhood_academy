function pedirInformacion() {
  let persona = { id: 19310, nombre: 'Bautista', apellido: 'Di Santo' }

  const randomNumber = Math.random()
  const errores = {
    NetworkError: 'Hubo un problema en la conexion de internet',
    InternalError: 'Hubo un error interno en el el servidor',
    AlienError: 'Una anomalia intercepto la informacion',
  }

  if (randomNumber <= 0.1) {
    throw new Error(errores.AlienError)
  }
  if (randomNumber <= 0.18) {
    throw new Error(errores.InternalError)
  }
  if (randomNumber <= 0.25) {
    throw new Error(errores.NetworkError)
  }

  return console.log(persona)
}

try {
  pedirInformacion()
} catch ({ message }) {
  console.error(message)
}
