function getMayorNumber(lista){
    let resultado
    if( lista == []){
        resultado= Math.max
        return resultado
    }
}
console.log(getMayorNumber(2,2,2,2,4))



const getHighest = (numbers) => {
    let numero = 0;

    for(let i= 0; i<= numbers.length; i++){
        for (let j = 1; j < numbers.length; j++) {
            if(numbers[i] > numbers[j]){
                numero = numbers[i]
            }    else {
                numero = numbers[j]
            }
        }
    }

    console.log(numero);

}

console.log(getHighest([1,10,3,400]));



let persona={
    nombre :'Antonio',
    edad: 27,
    estatura:1.77,
    lugarDeNacimiento: 'Zacaatecas' 
}

console.log(persona)

function getPerson(person) {
    let nombre;
    
    console.log('nombre:', person.nombre ); 
}