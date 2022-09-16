type Sizes = 'S' | 'M' | 'L' | 'XL'

// interface funciona igual que type, solo cambia la palabra reservada y que no se pone el signo igual

// type Product = {
//     id: string |number
//     title: string
//     creatdAt: Date
//     stock: number
//     size?: Sizes
// }


interface Product {
    id: string |number
    title: string
    creatdAt: Date
    stock: number
    size?: Sizes
}


const products: Product[] = []

products.push({
    id: '2',
    title: 'shirts',
    creatdAt: new Date(),
    stock: 90   
})

const addProduct = (data: Product) => {
    products.push(data)
}