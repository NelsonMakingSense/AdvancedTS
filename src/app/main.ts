import {faker} from '@faker-js/faker'
import { addProduct, products, updateProduct, findProducts } from "./products/product.service";

for (let index = 0; index < 50; index++) {
   addProduct({
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl(),
      title: faker.commerce.productName(),
      stock: faker.datatype.number({ min: 10, max: 100 }),
      color: faker.color.human(),
      price: parseInt(faker.commerce.price(), 10),
      isNew: faker.datatype.boolean(),
      tags: faker.helpers.arrayElements(),
      size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
      categoryId: faker.datatype.uuid()
   })
   
}

console.log(products)

const product = products[0]

updateProduct(product.id, {
 title: "hello", 
 stock: 33   
})

findProducts({
   stock: 10,
   color: 'red',
   tags: []
})
