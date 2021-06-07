const usuario1 = { id: '123', username: 'pepe24' }
const usuario1perfil = { nombre: 'pepe', edad: 27, profesion: 'programador' }
const resultadoEsperado = {
  id: '123',
  username: 'pepe24',
  nombre: 'pepe',
  edad: 27,
  profesion: 'programador',
}

const userObj = { ...usuario1, ...usuario1perfil }

console.assert(
  JSON.stringify(resultadoEsperado) === JSON.stringify(userObj),
  `Se esperaba ${JSON.stringify(
    resultadoEsperado
  )} pero se recibio ${JSON.stringify(userObj)}`
)
