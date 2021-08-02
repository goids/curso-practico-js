// Cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado son: ${ladoCuadrado} cm`);

const perimetroCuadrado = (lado) =>  console.log(`El perímetro del cuadrado es: ${lado * 4} cm`);
const areaCuadrado = (lado) => console.log(`El área del cuadrado es: ${lado * lado} cm2`);

perimetroCuadrado(ladoCuadrado);
areaCuadrado(ladoCuadrado)
console.groupEnd();

// Triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.group('Triangulo');
console.log(`Los lados del triandulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, y la base ${baseTriangulo}`);
console.log(`La Altura del triangulo es: ${alturaTriangulo}`);

const perimetroTriangulo = (lado1, lado2, base) => console.log(`El perímetro del triangulo es: ${lado1 + lado2 + base} cm`);
const areaTriangulo = (base, altura) => console.log(`El área del triangulo es: ${(base * altura) / 2} cm2`);

perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo);
areaTriangulo(baseTriangulo, alturaTriangulo);
console.groupEnd();

//Circulo
console.group('Circulo');

// radio
const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}`);
// diametro
const diametroCirculo = (radio) => radio * 2;
console.log(`El diametro del circulo es: ${diametroCirculo(radioCirculo)}`);
// pi
const PI = Math.PI;
console.log(`PI es: ${PI}`);
// perimetro cirulo
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
console.log(`El perimetro del ciruclo es: ${perimetroCirculo(radioCirculo)}`);
// area
const areaCirculo = (radio) =>  (radio * radio) * PI;
console.log(`El area del circulo es: ${areaCirculo(radioCirculo)}`);

console.groupEnd();
