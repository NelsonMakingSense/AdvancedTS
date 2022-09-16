// export const createProduct = (
//     id: string | number, 
//     isNew?: boolean,
//     stock?: number 
// ) => {
//     return {
//         id, 
//         // stock: stock || 10, 
//         // isNew: isNew || true
//         stock: stock ?? 10, 
//         isNew: isNew ?? true

//     }
// }

// ojo con el operador || porque considera los siguientes valores como false:

// 0 === false
// '' === false
// false === false

// por consiguiente si le enviamos esos valores TS los va a interpretar como falsos y TS va a asignar la opcion opcional si algo es falso

// La solucion es reemplazar el simbolo || por ??

// existe otra forma de asignar valor por defecto a las variables: De la siguiente forma se puede omitir el ? para indicar que un parametro es opcional y tambien el ?? que asigna el valor por defecto en la variable

export const createProduct = (
    id: string | number, 
    isNew: boolean = true,
    stock: number = 10
) => {
    return {
        id, 
        // stock: stock || 10, 
        // isNew: isNew || true
        stock, 
        isNew
    }
}

const p1 = createProduct(1, true, 12);
console. log(p1);

const p2 = createProduct(1, true);

console.log(p2)