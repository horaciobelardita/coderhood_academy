const jugadores = [
  {
    ID: '1',
    clase: 'mago',
    nivel: 35,
    inventario: ['Manzana', 'Poción de maná', 'Vara mágica'],
  },
  {
    ID: '2',
    clase: 'ladron',
    nivel: 65,
    inventario: ['Daga', 'Katana de fuego', 'Poción de vida'],
  },
  {
    ID: '4',
    clase: 'curandero',
    nivel: 73,
    inventario: ['Vara mágica', 'Armadura ligera'],
  },
  {
    ID: '3',
    clase: 'espadachin',
    nivel: 36,
    inventario: ['Casco de hierro', 'Katana de fuego', 'Pocíón de velocidad'],
  },
  {
    ID: '5',
    clase: 'mago',
    nivel: 26,
    inventario: ['Carta de PecoPeco', 'Oridecon', 'Poción de concentración'],
  },
]
const ITEM_PROHIBIDO = 'Katana de fuego'

const tieneItemProhibido = ({ inventario }) =>
  inventario.includes(ITEM_PROHIBIDO)

const getID = ({ ID }) => ID

const jugadoresSospechosos = jugadores.filter(tieneItemProhibido).map(getID)

console.log(jugadoresSospechosos)
