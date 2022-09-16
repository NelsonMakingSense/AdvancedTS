const numbers: ReadonlyArray<number> = [1,2,5,47,7]

// estos metodos no son permitidos con el tipo ReadonlyArray porque estos metodos mutan el array original

// numbers.push(1)
// numbers.pop()
// numbers.shift(3)

// los siguientes metodos si son permitidos porque estos metodos no modifican el array original 

numbers.filter(() =>{})
numbers.reduce(() =>0)
numbers.map(() =>{})

// como evitar hacer mutaciones en el array 