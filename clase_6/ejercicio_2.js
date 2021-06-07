const productos = [
  { id: '1', nombre: 'lapiceras', stock: 164 },
  { id: '2', nombre: 'marcadores', stock: 0 },
  { id: '3', nombre: 'cartulinas', stock: 25 },
  { id: '4', nombre: 'cartucheras', stock: 0 },
  { id: '5', nombre: 'mochilas', stock: 4 },
]

const productosTransformados = productos.map((producto) => ({
  ...producto,
  agotado: producto.stock === 0,
}))

console.log(productosTransformados)
