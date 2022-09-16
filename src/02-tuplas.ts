// definicion de un array normal

const precios:(number | string)[] = [1,2,3,4,5,6,7,'abcd']

// tupla: array fuertemente tipado

let user:[string, number] = ['nelson', 16]

// como desestructurar una tupla

const [username, age] = user

console.log(username)
console.log(age)