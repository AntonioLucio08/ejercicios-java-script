const boolenaos = false;

const myLista= [1,2,3,4,5];

const string = 'notas';

const numeros= 12345;

const persona = {
     apellido: 'Lucio',
     nombre:'Antonio',
     edad: 27,
     estatura: 1.77
 }

 console.log(numeros);
 console.log(boolenaos);
 console.log(string);
 console.log(persona);

 function suma (x , y){

     let resultado = x + y;
     return resultado;

    
 }
console.log(suma(5,5))

function resta (x,y){

    let resultado = x-y;
    return resultado;
}
console.log(resta(50,35));

function divicion(x,y){

    let resultado = x/y;
    return resultado;
}
console.log( divicion(20,5));

function multiplicacion (x,y){

    let resultado = x*y;
    return resultado;
}

console.log(multiplicacion(3,3));

function operaciones (x,y,tipoOperacion){
    let resultado;

    if (tipoOperacion == 'suma'){
    resultado = x + y;
    return resultado
}else if (tipoOperacion == 'resta'){
    resultado = x-y;
    return resultado
}else if (tipoOperacion=='divicion'){
    resultado = x/y;
    return resultado
}else if(tipoOperacion == 'multiplicacion'){
    resultado= x+y;
    return resultado
}


}
console.log(operaciones(1,2,'-'))





const aritmetica = (num1, num2, tipoOperacion) => {

    let resultado;

    if(tipoOperacion == 'suma'){
        return resultado = num1 + num2
    } else if (tipoOperacion == 'resta'){
        return resultado = num1 - num2
    } else if (tipoOperacion == 'division'){
        return resultado = num1 / num2
    } else {
        return resultado = num1*num2
    }
}

console.log(aritmetica(3,5,'resta'))