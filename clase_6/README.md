## Ejercicios

---

1. Alumnos aprobados
   :
   Dado el siguiente array de alumnos de una clase

   ```js
   const alumnos = [
     { numAlumno: '1234/0', nombre: 'maria', nota: 7 },
     { numAlumno: '4459/2', nombre: 'juan', nota: 3 },
     { numAlumno: '5877/1', nombre: 'pepe', nota: 5 },
     { numAlumno: '5512/0', nombre: 'josefina', nota: 9 },
     { numAlumno: '9874/0', nombre: 'jaime', nota: 7 },
   ]
   ```

   Obtener un array con los **números de alumno** de aquellos alumnos que hayan
   aprobado la materia. Para approbar la matería la nota final debe ser mayor a **6**.

---

2. Stock agotado
   : Dado el siguiente array de productos en stock
   ```js
   const productos = [
     { id: '1', nombre: 'lapiceras', stock: 164 },
     { id: '2', nombre: 'marcadores', stock: 0 },
     { id: '3', nombre: 'cartulinas', stock: 25 },
     { id: '4', nombre: 'cartucheras', stock: 0 },
     { id: '5', nombre: 'mochilas', stock: 4 },
   ]
   ```
   agregar a cada producto un atributo booleano agotado en true si el stock es igual a
   0, caso contrario false.

---

3. Jugadores sospechosos
   : En nuestro juego online tenemos un array de usuarios sospechosos
   que están usando un item que fue prohibido, obtener la lista
   de IDs de usuarios que en su inventario tengan dicho item.
   El item prohibido se llama "Katana de fuego".

   ```js
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
       inventario: [
         'Casco de hierro',
         'Katana de fuego',
         'Pocíón de velocidad',
       ],
     },
     {
       ID: '5',
       clase: 'mago',
       nivel: 26,
       inventario: ['Carta de PecoPeco', 'Oridecon', 'Poción de concentración'],
     },
   ]
   ```

---

4. Nuestro software de reconocimiento de voz funciona de una forma un poco particualar,
   y el texto reconocido nos lo envía en un arreglo de silabas. Dado el siguiente array:

```js
const silabas = [
  '¡Ho',
  'la, ',
  'mun',
  'do! ',
  '¿To',
  'do',
  'bien?',
  'Me',
  'a',
  'le',
  'gro.',
]
```

obtener un string con todo el texto de corrido.
resultado esperado

```js
'¡Hola, mundo! ¿Todo bien? Me alegro.'
```

---

5. Pedidos
   Tenemos un array con pedidos para nuestro negocio de comidas. Obtener un array con solo aquellos pedidos que incluyan algun
   condimento extra.

```js
const pedidos = [
  { id: '1', pedido: 'hamburgesa', extras: ['mayonesa'] },
  { id: '1', pedido: 'pancho' },
  { id: '1', pedido: 'pizza' },
  { id: '1', pedido: 'pancho', extras: ['ketchup'] },
  { id: '1', pedido: 'empanadas' },
]
```

Resultado esperado:

```js
const resultado = [
  { id: '1', pedido: 'hamburgesa', extras: ['mayonesa'] },
  { id: '1', pedido: 'pancho', extras: ['ketchup'] },
]
```

---

6. Usuario y su perfil
   : Tenemos dos objetos, uno con la información de usuario, y otro con la información personal de dicho usuario,
   queremos obtener un solo objeto con toda la información.
   ```js
   const usuario1 = { id: '123', username: 'pepe24' }
   const usuario1perfil = { nombre: 'pepe', edad: 27, profesion: 'programador' }
   ```
   resultado esperado
   ```js
   { id: "123", username: "pepe24", nombre: "pepe", edad: 27, profesion: "programador" }
   ```
