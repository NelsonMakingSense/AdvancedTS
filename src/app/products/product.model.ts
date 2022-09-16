import {BaseModel} from './../base.model'

import {Category} from './../categories/category.model'

export type Sizes = 'S' | 'M' | 'L' | 'XL'

export interface Product extends BaseModel {  
    title: string    
    image: string
    description: string 
    stock: number
    size?: Sizes
    color: string
    price: number   
    category: Category
    isNew: boolean
    tags: string[]
}

// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>

// como buena practica, guardamos todos los DTOs dentro de un archivo aparte, como el siguiente

// interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
//     categoryId: string
// }