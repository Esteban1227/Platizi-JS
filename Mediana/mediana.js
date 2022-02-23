const list = [
    400000,
    200,
    500,
    10,
    300000,
];

list.sort((a, b) => a - b);

const midList = parseInt(list.length / 2);


function isPair(number){
    if(number % 2 === 0){
        return true;
    }
}


let median;

if (isPair(list.length)){
    const elementOne = list[midList - 1]
    const elementTwo = list[midList]

    const promedioElementOneAndTwo = calcularMediaAritmetica([
        elementOne,
        elementTwo,
    ]);

    median = promedioElementOneAndTwo;

}
else{
    median = list[midList]
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    
    const promedioLista = sumaLista / lista.length

    return promedioLista
}