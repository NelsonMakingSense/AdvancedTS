// Sobrecarga de funciones

export function parseStr(input:string): string[] 
export function parseStr(input:string[]): string 

// Se puede definir la sobrecarga con el mismo nombre de la funcion a sobrecargar, en la sobrecarga solamente se define, no se crea logica, la sobrecarga y la funcion se deben exportar para que funcione


export function parseStr (input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join('')
    } else {
        return input.split('')
    }
}

const respuestaArray = parseStr('Nelson')

// Como la funcion ha sido sobrecargada, ahora TS sabe que el dato que recibe la funcion es un string y por lo tanto nos puede dar consejos de metodos para este dato
respuestaArray.reverse()

// Ya no tenemos que validar el tipo de dato, 

// if(Array.isArray(respuestaArray)) {
//     respuestaArray.reverse()
// }

console.log(`respuesta array: ${respuestaArray}`)

const respuestaString = parseStr(['N', 'e', 'l', 's', 'o', 'n'])


 
console.log(`respuestaString: ${respuestaString}`)

// mi ejemplo, 

export function recibaArrayOString(data:string):string[]
export function recibaArrayOString(data:string[]):string


export function recibaArrayOString(data:unknown): unknown {
    
    if(Array.isArray(data)) {
         let res = data.join('')
         console.log(`esta es la respuesta cuando se recibe un array: ${res}`)
         return res
    } else if(typeof data === 'string') {
        let res = data.split('')
        console.log(`esta es la respuesta cuando se recibe un string: ${res}`)
        return res
    }
    
}

const resultadoGuardado = recibaArrayOString('juan perez')

resultadoGuardado.reverse()


 recibaArrayOString('joselito')
 recibaArrayOString(['j','o','s','e','l','i','t','o'])

