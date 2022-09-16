import {User, ROLES} from './01-enum'


// parametros rest js

const myFunc = (...args:string[]) => console.log(args)


// parametros res TS 

const currentUser:User = {
    username: 'Nelson',
    role: ROLES.CUSTOMER
} 

export const checkAdminRole = () => {
    if (currentUser.role === ROLES.ADMIN) {
   return true;
    }
    return false
}

export const checkRoleV3 = (...roles:string[]) => {
    if(roles.includes(currentUser.role)) {
        return true
    }

    return false

}

const rta = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)

console.log('checkRoleV3', rta)

// Mi experimento

const pruebaRest = (...params:number[]) => {

    let result = params.reduce((a, b) => {
        return a + b
    })
   console.log( `this is the result of plus all atributes of this function: ${result}`)
}

pruebaRest(2,56,92,8,5,5,5,4,7)
pruebaRest(12,15,12.5,22.01,12)