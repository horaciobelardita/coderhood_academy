# Ejercicios

1. Funcion de errores
   : Crear una funcion que recibe tres parametros
   **chance** , **mensaje** y **resultado** .

   **chance**
   : es un numero que indica el porcentaje que tiene esa funcion de arrojar un error.
   si chance = 20 entonces la funcion tiene 20% de posibilidades de disparar un error

   **mensaje**
   : el mensaje que tiene que tener el error que puede disparar la funcion

   **resultado**
   : es cualquier cosa, un numero, un texto, un objeto, etc. es lo que retorna la
   funcion si no arrojo un error

2. Simulador de descarga de informacion
   : Cuando queremos descargar informacion de internet, varias cosas pueden ir mal:

   - desconexion de internet
   - corte de luz
   - perdida de informacion por culpa de seres
     desconocidos.
     Crear una funcion llamada **pedirInformacion** que no recibe parametros y
     que devuelve el siguiente objeto que corresponde a los datos de un usuario:

   ```js
   let persona = { id: 19310, nombre: 'Bautista', apellido: 'Di Santo' }
   ```

   La funcion **pedirInformacion** tiene:

   - 25% de posibilidades de disparar un error por desconexion de internet, el nombre del
     error es 'NetworkError'
   - 18% de posibilidades de disparar un error por error del servidor, el nombre del error es 'InternalError'
   - 10% de posibilidades de disparar un error por una anomalia, el nombre del error es 'AlienError'
     Cuando se llame a la funcion, informar:
     1. Si hubo un error, informar segun el mensaje del error:
     - NetworkError => informar "Hubo un problema en la conexion de internet"
     - InternalError => informar "Hubo un error interno en el el servidor"
     - AlienError => informar "Una anomalia intercepto la informacion"
     2. Si no hubo un error, informar el objeto persona
