## Ejercicios

1.  - Reescribir la siguiente función tal que retorne una promesa que se cumpla luego de 3 segundos (usar setTimeout), devolviendo el
      mismo resultado que la función dada.
    ```js
    function dividirNumeros(dividendo, divisor) {
      return dividendo / divisor
    }
    ```
    - Usando then y catch completar la función "programa" dada para llamar a **dividirNumeros** e imprimir el resultado o imprimir un
      mensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.
    ```js
    function programa() {
      // Tu código acá
    }
    programa()
    ```

- Reescribir la función **programa** del insiso anterior para que use **async** y **await**
