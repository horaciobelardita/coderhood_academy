const pedidos = [
  { id: '1', pedido: 'hamburgesa', extras: ['mayonesa'] },
  { id: '1', pedido: 'pancho' },
  { id: '1', pedido: 'pizza' },
  { id: '1', pedido: 'pancho', extras: ['ketchup'] },
  { id: '1', pedido: 'empanadas' },
]
const resultadoEsperado = [
  { id: '1', pedido: 'hamburgesa', extras: ['mayonesa'] },
  { id: '1', pedido: 'pancho', extras: ['ketchup'] },
]

const tieneIngredientesExtras = (pedido) => Boolean(pedido?.extras)
const pedidosConIngredientesExtras = pedidos.filter(tieneIngredientesExtras)

console.assert(
  JSON.stringify(resultadoEsperado) ===
    JSON.stringify(pedidosConIngredientesExtras),
  `Se esperaba ${JSON.stringify(
    resultadoEsperado
  )} pero se recibio ${JSON.stringify(pedidosConIngredientesExtras)}`
)
