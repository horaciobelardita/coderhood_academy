const alumnos = [
  { numAlumno: '1234/0', nombre: 'maria', nota: 7 },
  { numAlumno: '4459/2', nombre: 'juan', nota: 3 },
  { numAlumno: '5877/1', nombre: 'pepe', nota: 5 },
  { numAlumno: '5512/0', nombre: 'josefina', nota: 9 },
  { numAlumno: '9874/0', nombre: 'jaime', nota: 7 },
]

const gte = (value) => {
  return (field) => field >= value
}

const NOTA_MINIMA_APROBAR = 6
const esAprobado = gte(NOTA_MINIMA_APROBAR)
const getNumAlumno = ({ numAlumno }) => numAlumno

const alumnosAprobados = alumnos
  .filter(({ nota }) => esAprobado(nota))
  .map(getNumAlumno)

console.log(alumnosAprobados)
