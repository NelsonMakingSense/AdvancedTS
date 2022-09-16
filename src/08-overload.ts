// Nelson => [N,e,l,s,o,n] == string => string[]

// [N,e,l,s,o,n] => Nelson == string[] => string

// La sobrecarga de funciones NO sirve con arrow functions ()=>{}

function parseStr (input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join('')
    } else {
        return input.split('')
    }
}

const respuestaArray = parseStr('Nelson')

// La siguiente funcion no se puede ejecutar porque TS no sabe que tipo de dato es respuestaArray. Puede ser un string o un array 
// respuestaArray.reverse()

// para poderla ejecutar primero debemos hacer una validacion del tipo de dato que devuelve respuestaArray

if(Array.isArray(respuestaArray)) {
    respuestaArray.reverse()
}

console.log(`respuesta array: ${respuestaArray}`)

const respuestaString = parseStr(['N', 'e', 'l', 's', 'o', 'n'])


 
console.log(`respuestaString: ${respuestaString}`)