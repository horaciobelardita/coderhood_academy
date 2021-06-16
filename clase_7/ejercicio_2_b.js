class InternalError extends Error {
  constructor() {
    super();
    this.name = 'InternalError';
    this.message = 'Hubo un error interno en el el servidor';
  }
}

class AlienError extends Error {
  constructor() {
    super();
    this.name = 'AlienError';
    this.message = 'Una anomalia intercepto la informacion';
  }
}

class NetworkError extends Error {
  constructor() {
    super();
    this.name = 'NetworkError';
    this.message = 'Hubo un problema en la conexion de internet';
  }
}

function lte(value) {
  return (field) => field <= value;
}

function getError(number) {
  const error = [
    [lte(0.1), AlienError],
    [lte(0.18), InternalError],
    [lte(0.25), NetworkError],
  ].find(([fn]) => fn(number));
  return error?.pop();
}

function getInfo() {
  const person = { id: 19310, firstName: 'Bautista', lastName: 'Di Santo' };
  const randomNumber = Math.random();
  const error = getError(randomNumber);
  if (error) {
    throw new error();
  }
  return console.log(person);
}

try {
  getInfo();
} catch (error) {
  console.error(error);
}
