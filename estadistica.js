//const lista1 = [100, 200, 300, 500];
let lista = [];
let calcular = document.getElementById('btn-2');

if (lista==[]){
    calcular.setAttribute(disabled, true)
    console.log('mi lista es: '+ lista)
}

function construirLista(){
    let item = document.getElementById('list');
    if(item.value === ''){
        alert('No puedes ingresar datos vacio')
    }else {
        lista.push(parseInt(item.value));
        mostrarLista();
        item.value = '' ;
        return lista
    }
}

function mostrarLista(){
    let showList = document.getElementById('showList');
    showList.innerHTML = '<h3>[' + lista + ']</h3>';
}

function calcularPromedio(itemsLista){
    /*   let sumaLista = 0;
    for(let i=0; i<lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }  */
    console.log('esto es lista '+ itemsLista)
    const showPromedio = document.getElementById('promedio');
    const sumaLista = itemsLista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return parseInt(valorAcumulado) + parseInt(nuevoElemento);
        }
    );
    const promedio = sumaLista / itemsLista.length;
    showPromedio.innerHTML = promedio;
    return promedio 
}
function calcularMediana(){
    const showMediana = document.getElementById('mediana');
    const mitadLista = parseInt(lista.length/2)
    function esPar(numero){
        if(numero % 2 === 0 ){
            return true
        }else{
            return false
        }
    }
    
    let mediana
    lista = lista.sort();
    console.log('ordenada' + lista)
    if (esPar(lista.length)){
        const el1 = lista[mitadLista - 1];
        const el2 = lista[mitadLista];
        console.log('mitad lista pares: '+ el1 +''+el2)
        mediana = (el1 + el2)/2;
        console.log('mitad lista par: '+ mediana)
    
    }else{
        mediana = lista[mitadLista]
    }
    showMediana.innerHTML = mediana;
    return mediana
}
function calcularModa(){
  //  lista1=[1,2,3,1,2,3,2,2,1];

    const listaCount = {};
    lista.map( function(elemento){ 
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    });
    const listArray = Object.entries(listaCount).sort(function(valorAcum, nuevoValor){
        return valorAcum[1] - nuevoValor[1]
    });
    console.log('estees mi list array: ' + listArray)
    
    const moda = listArray[listArray.length - 1]
    console.log('esta es la '+ moda)
    let showModa = document.getElementById('moda');
    showModa.innerHTML = '<h3>' + moda[0] + '</h3><p>Se repite '+ moda[1]+' veces</p>';
}
function calculoEstadistico(){
    calcularPromedio(lista);
    console.log('mi promedio '+ calcularPromedio(lista))
    calcularMediana(lista);
    console.log('mi mediana '+ calcularMediana(lista))
    calcularModa(lista);
    console.log('mi moda '+ calcularModa(lista))
}

/******************************************************************************* */

//let lista = [ 101, 300, 200, 250];



