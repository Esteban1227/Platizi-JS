//Cuadrado//

function perimetroDelCuadrado(ladoCuadrado){
    return ladoCuadrado *4
}

function areaDelCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado
}

//botones
function calcularPerimetroDelCuadrado(){
    const input = document.getElementById("input-cuadrado")
    const value = input.value;
    const perimetro = perimetroDelCuadrado(value)
    alert(perimetro);

}

function calcularAreaDelCuadrado(){
    const input = document.getElementById("input-cuadrado")
    const value = Number (input.value);
    const area = areaDelCuadrado(value)
    alert(area);
}

//End Cuadrado

//Triangulo

function perimetroDelTriangulo(ladoIzquierdoDelTriangulo, ladoDerechoTriangulo, baseDelTriangulo ) {
    return ladoIzquierdoDelTriangulo + ladoDerechoTriangulo + baseDelTriangulo;

}
function areaDelTriangulo(baseDelTriangulo, alturaDelTriangulo){
    return (baseDelTriangulo * alturaDelTriangulo) / 2;
}

//botones
function calcularPerimetroDelTriangulo(){
    const inputLeft = document.getElementById("input-triangulo-left")
    const valueLeft = Number(inputLeft.value);
    Math.ceil(valueLeft);
    const inputRight = document.getElementById("input-triangulo-right")
    const valueRight = Number(inputRight.value);
    Math.ceil(valueRight);
    const inputButton = document.getElementById("input-triangulo-button")
    const valueButton = Number(inputButton.value);
    Math.ceil(valueButton);
    const perimetro = perimetroDelTriangulo(valueLeft, valueRight, valueButton)
    alert(perimetro);

}

function calcularAreaDelTriangulo(){
    const inputButton = document.getElementById("input-triangulo-button")
    const valueButton = Number(inputButton.value);
    Math.ceil(valueButton);
    const inputHeight = document.getElementById("input-triangulo-height")
    const valueHeight = Number(inputHeight.value);
    Math.ceil(valueHeight);
    const area = areaDelTriangulo(valueButton, valueHeight)
    alert(area);

}

//End Triangulo


//Circulo//

const pI = Math.PI;

function diametroDelCirculo(radioDelCirculo){
    return radioDelCirculo * 2;
} 

function perimetroDelCirculo(radioDelCirculo){
    const    diametroCirculo = diametroDelCirculo(radioDelCirculo);
    return diametroCirculo * pI ;
}

function areaDelCirculo(radioDelCirculo){
    return (radioDelCirculo * radioDelCirculo) * pI;
}

function calcularDiametroDelCirculo(){
    const input = document.getElementById("input-circulo")
    const value = Number (input.value);
    const diametro = diametroDelCirculo(value)
    alert(diametro);
}

function calcularPerimetroDelCirculo(){
    const input = document.getElementById("input-circulo")
    const value = Number (input.value);
    const perimetro = perimetroDelCirculo(value)
    alert(perimetro);
}



function calcularAreaDelCirculo(){
    const input = document.getElementById("input-circulo")
    const value = Number (input.value);
    const area = areaDelCirculo(value)
    alert(area);
}




//End Circulo

