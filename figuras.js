
//Código Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(){
    const lado = document.getElementById('InputCuadrado').value;
    const perimetro = lado * 4 ;
    alert('El perimetro del cuadrado es de ' + perimetro + ' cm.');
}
function areaCuadrado(){
    const lado = document.getElementById('InputCuadrado').value;
    const area = lado * lado;
    alert('El área del cuadrado es de ' + area + ' cm2.');
}
//perimetroCuadrado(5);
//areaCuadrado(5);
console.groupEnd();

//Código Triangulo
console.group("Triangulo")
function perimetroTriangulo(lado1, lado2, base){
    const perimetro = lado1 + lado2 + base ;
    console.log('El perimetro del triangulo es de ' + perimetro + 'cm.');
}
function areaTriangulo(altura, base){
    const area = (base * altura) / 2 ;
    console.log('El área del triangulo es de ' + area + 'cm2.');
}
perimetroTriangulo(6, 6, 4);
areaTriangulo(5.5,4)
console.groupEnd();

//Código Circulo
const pi = Math.PI;


function perimetroCirculo(){
    let radio = document.getElementById('InputCirculo').value;
    const diam = radio * 2;
    const perimetro = diam * pi ;
    alert('El perimetro del circulo es de ' + perimetro + 'cm.');
}
function areaCirculo(){
    let radio = document.getElementById('InputCirculo').value;
    const area = (pi * radio * radio);
    alert('El área del circulo es de ' + area + 'cm2.');
}

