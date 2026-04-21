/**
 * clasifica un triangulo segun las longitudes de sus lados.
 * @param {number} a - longitud del lado a
 * @param {number} b - longitud del lado b
 * @param {number} c - longitud del lado c
 * @returns {string} 'Equilatero', 'Isosceles' o 'Escaleno'
 */
function clasificarTriangulo(a, b, c) {
  // verificar que los parametros sean numeros enteros
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    throw new Error('Longitudes no validas: los lados deben ser numeros enteros');
  }

  // verificar que los lados sean positivos
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Longitudes no validas: los lados deben ser mayores que cero');
  }

  // verificar que formen un triangulo valido
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error('No es un triangulo: los lados no cumplen la desigualdad triangular');
  }

  // clasificar
  if (a === b && b === c) {
    return 'Equilatero';
  }

  if (a === b || b === c || a === c) {
    return 'Isosceles';
  }

  return 'Escaleno';
}

module.exports = { clasificarTriangulo };