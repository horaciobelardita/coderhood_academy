const silabas = [
  '¡Ho',
  'la, ',
  'mun',
  'do! ',
  '¿To',
  'do ',
  'bien? ',
  'Me ',
  'a',
  'le',
  'gro.',
]
// 1 - opcion
let resultado = silabas.join('')
// 2 - opcion
resultado = silabas.reduce((res, silaba) => res + silaba, '')
const resultadoEsperado = '¡Hola, mundo! ¿Todo bien? Me alegro.'
console.assert(
  resultado === resultadoEsperado,
  `Se esperaba [${resultadoEsperado}] pero se recibio [${resultado}]`
)
