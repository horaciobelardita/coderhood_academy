const alumnos = [
  { user: 'miafate', ranking: 4 },
  { user: 'argentum', ranking: 2 },
  { user: 'lucas', ranking: 6 },
  { user: 'ema', ranking: 3 },
]

// 1 - Opcion
const mayorRanking = Math.max(...alumnos.map(({ ranking }) => ranking))
let alumnoConMayorRanking = alumnos.find(
  ({ ranking }) => ranking === mayorRanking
)
console.log(alumnoConMayorRanking)

// 2 - opcion

function buscarAlumnoConMayorRanking(alumnos) {
  let pos = 0,
    mayorRanking = alumnos[0].ranking
  const { length: len } = alumnos
  for (let index = 1; index < len; index++) {
    const alumno = alumnos[index]
    if (alumno.ranking > mayorRanking) {
      mayorRanking = alumno.ranking
      pos = index
    }
  }
  return alumnos[pos]
}
alumnoConMayorRanking = buscarAlumnoConMayorRanking(alumnos)
console.log(alumnoConMayorRanking)
