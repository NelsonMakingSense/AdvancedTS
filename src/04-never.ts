// esta funcion es infinta, por eso TS infiere que es never 

// const withoutEnd = () => {
//     while(true) {
//         console.log('nunca pares de aprender')
//     }
// }

// cuando una funcion lanza un error, esta tambien TS la infiere como never, porque detiene la funcion 
const fail = (message: string) => {
    throw new Error(message)
}

// cuando la funcion example ejecute la funcion fail, la funcion example va a dejar de funcionar.

const example = (input: unknown) => {

    if(typeof input === "string") {
        return "es un string"
    } else if(Array.isArray(input)) {
        return "es un array"
    }

    return fail("not match")

}

console.log(example("hola"))
console.log(example([2,3,4,5,3]))
console.log(example(5))
console.log(example("hola despues de fail"))