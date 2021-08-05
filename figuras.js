// Cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado son: ${ladoCuadrado} cm`);

const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

const calcularPerimetro = () => {
    const value = document.querySelector('#lado').value;
    const perimetro = perimetroCuadrado(value);
    document.querySelector('.resultado').textContent = `El perimetro del cuadrado es ${perimetro} cm`;
}

const calcularArea = () => {
    const value = document.querySelector('#lado').value;
    const area = areaCuadrado(value);
    document.querySelector('.resultado').textContent = `El área del cuadrado es ${area} cm2`;
}

//perimetroCuadrado(ladoCuadrado);
console.groupEnd();

// Triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.group('Triangulo');
console.log(`Los lados del triandulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, y la base ${baseTriangulo}`);
console.log(`La Altura del triangulo es: ${alturaTriangulo}`);

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

const calcularPTriangulo = () => {
    const lado1 = document.querySelector('#lado1').value;
    const lado2 = document.querySelector('#lado2').value;
    const base = document.querySelector('#base').value;
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    document.querySelector('.resultado-t').textContent = `El perimetro del triangulo es ${perimetro} cm`;
}

const calcularATriangulo = () => {
    const altura = document.querySelector('#altura').value;
    const base = document.querySelector('#base').value;
    const area = areaTriangulo(base, altura);
    document.querySelector('.resultado-t').textContent = `El área del triangulo es ${area} cm`;
}

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

const calculoDiametro = () => {
    const radio = document.querySelector('#radio').value;
    const diametro = diametroCirculo(radio);
    document.querySelector('.resultado-c').textContent = `el diametro del ciruclo es ${diametro}`;
}

const calculoPerimetroC = () => {
    const radio = document.querySelector('#radio').value;
    const perimetro = perimetroCirculo(radio);
    document.querySelector('.resultado-c').textContent = `el diametro del ciruclo es ${perimetro}`;
}

const calculoAreaC = () => {
    const radio = document.querySelector('#radio').value;
    const area = areaCirculo(radio);
    document.querySelector('.resultado-c').textContent = `el diametro del ciruclo es ${area}`;
}

console.groupEnd();

// En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.
// Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.

const Altura = (lado1, lado2, base) => {
    let error;
    if(lado1 === lado2){
        if(lado1 !== base && lado2 !== base){
            const altura = Math.sqrt( (lado1*lado1) - ( (lado2 * lado2) / 4) );
            return altura;
        }
    }else{
        error = document.querySelector('.resultado-t').textContent = `Este triangulo no es isóscesles ya que sus lados no son iguales `;
        return error;
    }
}

const calcularAltura = () => {
    const lado1 = document.querySelector('#lado1').value;
    const lado2 = document.querySelector('#lado2').value;
    const base = document.querySelector('#base').value;
    const h = Altura(lado1, lado2, base)
    document.querySelector('.resultado-t').textContent = `La altura del circulo es ${h}`;
}
