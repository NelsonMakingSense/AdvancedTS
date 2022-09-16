let anyVar: any

anyVar = true
anyVar = []
anyVar = {}

// esto es un error pero TS no lo detecta porque any desactiva la verificacion TS 
let isNew: boolean = anyVar;

// cuando se usa any, TS no sugiere nada porque TS no sabe que tipo de variable se esta introduciendo

anyVar.doAnything()
anyVar.toUpperCase()

let unknownVar: unknown

unknownVar = true
unknownVar = []
unknownVar = {}

// unknown nos pide verificar el tipo de dato que tiene la variable antes de ejecutar cualquier funcion 

// unknownVar.toUpperCase() no lo permite porque no se sabe que tipo de dato tiene la variable, con any si se puede

if(typeof unknownVar === 'string') {
    unknownVar.toUpperCase()
}

const parse = (str:string): unknown => {
 return JSON.parse(str)
}