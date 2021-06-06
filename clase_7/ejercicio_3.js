function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const errores = {
  ForbiddenInformation: 'Informacion Prohibida',
  NetworkError: 'Hubo un problema en la conexion de internet',
}

function pedirUsuario() {
  const lista = [
    {
      id: 19310,
      nombre: 'Bautista',
    },
    {
      id: 90010,
      nombre: 'Ema',
    },
    {
      id: Number('00519'),
      nombre: 'Lucas',
    },
    {
      id: 00000,
      nombre: 'Meison',
    },
  ]
  const len = lista.length
  const randomIndex = generateRandomInt(0, len)
  const usuarioRandom = lista[randomIndex]
  if (usuarioRandom?.id === 00000) {
    throw new Error(errores.ForbiddenInformation)
  }
  return usuarioRandom
}
function pedirInformacion() {
  try {
    const usuario = pedirUsuario()
    return console.log(usuario)
  } catch (error) {
    throw new Error(errores.NetworkError)
  }
}

try {
  pedirInformacion()
} catch (error) {
  console.error(error)
}
