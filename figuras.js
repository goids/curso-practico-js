// Cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado son: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado} cm2`);
console.groupEnd();

// Triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.group('Triangulo');
console.log(`Los lados del triandulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, y la base ${baseTriangulo}`);
console.log(`La Altura del triangulo es: ${alturaTriangulo}`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triangulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triangulo es: ${areaTriangulo} cm2`);
console.groupEnd();

//Circulo
console.group('Circulo');

// radio
const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}`);
// diametro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es: ${diametroCirculo}`);
// pi
const PI = Math.PI;
console.log(`PI es: ${PI}`);
// perimetro cirulo
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del ciruclo es: ${perimetroCirculo}`);
// area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El area del circulo es: ${areaCirculo}`);

console.groupEnd();
