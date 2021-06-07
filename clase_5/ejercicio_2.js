const alumnos = [
  { nombre: 'Ema', carrera: 'Ingenieria en computacion' },
  { nombre: 'Luis', carrera: 'Produccion audiovisual' },
  { nombre: 'Pablo', carrera: 'Licenciatura en sistemas' },
  { nombre: 'Meison', carrera: 'Ingenieria en computacion' },
]

const CARRERA_A_BUSCAR = 'Ingenieria en computacion'

const esAlumnoDeIngInformatica = ({ carrera }) =>
  carrera.toLowerCase() === CARRERA_A_BUSCAR.toLocaleLowerCase()

const alumnosDeIngInformatica = alumnos.filter(esAlumnoDeIngInformatica)

console.log(alumnosDeIngInformatica)
