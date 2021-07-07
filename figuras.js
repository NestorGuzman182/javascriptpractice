
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

function perimetroTriangulo(){
    const lado1 = parseInt(document.getElementById('InputTriangle1').value);
    const lado2 = parseInt(document.getElementById('InputTriangle2').value);
    const base = parseInt(document.getElementById('InputTriangleBase').value);
    const perimetro = (lado1 + lado2 + base) ;
    alert('El perimetro del triangulo es de ' + perimetro + 'cm.');
}
function areaTriangulo(){ 
    const lado1 = document.getElementById('InputTriangle1').value;
    const lado2 = document.getElementById('InputTriangle2').value;
    const base = document.getElementById('InputTriangleBase').value;
    const altura = Math.sqrt(Math.pow(lado1, 2) - Math.pow((base/2),2));
    const area = (base * altura) / 2 ;
    if(lado1 == lado2){
        alert('El área del triangulo es de ' + area + 'cm2.');
    }else{
        alert('El triangulo debe ser isosceles')
    }
}

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

