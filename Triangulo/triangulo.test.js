const { clasificarTriangulo } = require('./triangulo');


// clases de equivalencia validas

describe('triangulos validos', () => {

  // equilatero
  test('lados_iguales_tres', () => {
    // arrange
    const a = 3, b = 3, c = 3;
    const expected = 'Equilatero';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });

  test('lados_iguales_grandes', () => {
    // arrange
    const a = 1000, b = 1000, c = 1000;
    const expected = 'Equilatero';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });

  // isosceles - las 3 permutaciones
  test('dos_lados_iguales_ab', () => {
    // arrange
    const a = 5, b = 5, c = 3;
    const expected = 'Isosceles';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });

  test('dos_lados_iguales_ac', () => {
    // arrange
    const a = 5, b = 3, c = 5;
    const expected = 'Isosceles';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });

  test('dos_lados_iguales_bc', () => {
    // arrange
    const a = 3, b = 5, c = 5;
    const expected = 'Isosceles';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });

  // escaleno
  test('tres_lados_distintos_3_4_5', () => {
    // arrange
    const a = 3, b = 4, c = 5;
    const expected = 'Escaleno';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });

  test('tres_lados_distintos_6_8_10', () => {
    // arrange
    const a = 6, b = 8, c = 10;
    const expected = 'Escaleno';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });
});


// clases de equivalencia invalidas

describe('entradas invalidas', () => {

  // desigualdad triangular
  test('lado_a_muy_grande', () => {
    const a = 10, b = 3, c = 4;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('No es un triangulo');
  });

  test('lado_b_muy_grande', () => {
    const a = 3, b = 10, c = 4;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('No es un triangulo');
  });

  test('lado_c_muy_grande', () => {
    const a = 3, b = 4, c = 10;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('No es un triangulo');
  });

  // lados en cero
  test('lado_a_es_cero', () => {
    const a = 0, b = 5, c = 5;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Longitudes no validas');
  });

  test('lado_b_es_cero', () => {
    const a = 5, b = 0, c = 5;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Longitudes no validas');
  });

  test('lado_c_es_cero', () => {
    const a = 5, b = 5, c = 0;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Longitudes no validas');
  });

  // lados negativos
  test('lado_a_negativo', () => {
    const a = -1, b = 5, c = 5;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Longitudes no validas');
  });

  test('lado_b_negativo', () => {
    const a = 5, b = -3, c = 5;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Longitudes no validas');
  });

  test('lado_c_negativo', () => {
    const a = 5, b = 5, c = -2;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Longitudes no validas');
  });

  // decimales
  test('lado_a_con_decimal', () => {
    const a = 3.5, b = 4, c = 5;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Longitudes no validas');
  });

  test('lado_b_con_decimal', () => {
    const a = 3, b = 4.7, c = 5;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Longitudes no validas');
  });

  test('lado_c_con_decimal', () => {
    const a = 3, b = 4, c = 5.1;
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Longitudes no validas');
  });
});

// condiciones de borde

describe('casos limite', () => {

  // isosceles casi equilatero
  test('casi_equilatero_ab_difieren', () => {
    // arrange
    const a = 5, b = 5, c = 4;
    const expected = 'Isosceles';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });

  test('casi_equilatero_bc_difieren', () => {
    // arrange
    const a = 4, b = 5, c = 5;
    const expected = 'Isosceles';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });

  // escaleno casi isosceles
  test('casi_isosceles_diferencia_uno', () => {
    // arrange
    const a = 10, b = 11, c = 9;
    const expected = 'Escaleno';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });

  // triangulo muy pequeno
  test('lados_minimos_posibles', () => {
    // arrange
    const a = 1, b = 1, c = 1;
    const expected = 'Equilatero';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });

  // triangulo muy grande
  test('lados_muy_grandes', () => {
    // arrange
    const a = 999999, b = 999999, c = 999999;
    const expected = 'Equilatero';
    // act
    const result = clasificarTriangulo(a, b, c);
    // assert
    expect(result).toBe(expected);
  });

  // combinaciones largo-corto
  test('un_lado_largo_dos_cortos_abc', () => {
    const a = 9, b = 5, c = 5;
    expect(clasificarTriangulo(a, b, c)).toBe('Isosceles');
  });

  test('un_lado_largo_dos_cortos_bac', () => {
    const a = 5, b = 9, c = 5;
    expect(clasificarTriangulo(a, b, c)).toBe('Isosceles');
  });

  test('un_lado_largo_dos_cortos_cab', () => {
    const a = 5, b = 5, c = 9;
    expect(clasificarTriangulo(a, b, c)).toBe('Isosceles');
  });

  // lado igual a suma de los otros (invalido)
  test('a_igual_suma_bc', () => {
    // 10 = 6 + 4
    expect(() => clasificarTriangulo(10, 6, 4)).toThrow('No es un triangulo');
  });

  test('b_igual_suma_ac', () => {
    // 10 = 6 + 4
    expect(() => clasificarTriangulo(6, 10, 4)).toThrow('No es un triangulo');
  });

  test('c_igual_suma_ab', () => {
    // 10 = 6 + 4
    expect(() => clasificarTriangulo(6, 4, 10)).toThrow('No es un triangulo');
  });

  // lado apenas menor a la suma (valido)
  test('a_uno_menos_que_suma_bc', () => {
    // 9 < 6 + 4
    expect(clasificarTriangulo(9, 6, 4)).toBe('Escaleno');
  });

  test('b_uno_menos_que_suma_ac', () => {
    // 9 < 6 + 4
    expect(clasificarTriangulo(6, 9, 4)).toBe('Escaleno');
  });

  test('c_uno_menos_que_suma_ab', () => {
    // 9 < 6 + 4
    expect(clasificarTriangulo(6, 4, 9)).toBe('Escaleno');
  });

  // lado apenas mayor a la suma (invalido)
  test('a_uno_mas_que_suma_bc', () => {
    // 11 > 6 + 4
    expect(() => clasificarTriangulo(11, 6, 4)).toThrow('No es un triangulo');
  });

  test('b_uno_mas_que_suma_ac', () => {
    // 11 > 6 + 4
    expect(() => clasificarTriangulo(6, 11, 4)).toThrow('No es un triangulo');
  });

  test('c_uno_mas_que_suma_ab', () => {
    // 11 > 6 + 4
    expect(() => clasificarTriangulo(6, 4, 11)).toThrow('No es un triangulo');
  });
});