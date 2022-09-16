// estos objetos se exportan porque se van a usar en la clase 7

export enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer"
}


export type User = {
    username: string,
    role: ROLES
}

const nelsonUser: User = {
    username: 'nelsonalayon',
    role: ROLES.ADMIN
}