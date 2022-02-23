//Helpers

function ispair(number){
    return (number % 2 == 0);
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

////////////////////////////////////////////////////////////////

//Calculadora de mediana 

function medinaSalarios (list){
    const mid = parseInt(list.length / 2);

    if (ispair(list.length)){
        const midPersonOne = list[mid -1]
        const midPersonTwo = list[mid]

        const median = calcularMediaAritmetica([midPersonOne, midPersonTwo]);
        return median
    }
    else{
        const midPerson = list[mid];
        return midPerson
    }
}

/////////////////////////////////////////////////////////////////

//Mediana General

const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB
    }
);

const medianaGeneralCol = medinaSalarios(salariosColSorted);

//////////////////////////////////////////////////////////////////////////

//Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceEnd = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceEnd,
);

const medianaTop10Col = medinaSalarios(salariosColTop10);


//////////////////////////////////////////////////////////////////////////


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

///////////////////////////////////////////////////////////////