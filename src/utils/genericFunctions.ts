// built in generics type
// Array, Promise


interface Tconstraints {
    name: string
    age: number
}
interface Uconstraints {
    profession: string
}

export const name = <T extends Tconstraints, U extends Uconstraints>(objA: T, objB: U) => {
    return Object.assign(objA, objB)
}

name({name: 'Godfrey', age: 28}, {profession: 'engineer'})

export const AccessObjectKey = <T extends object, U extends keyof T>(obj: T, key: U) => {
    return obj[key]
}

export const extractData = <T>(description: string, value: T) => {
    return description + ' ' + value
}

console.log(extractData<string>('userID', 'sjd8h21dj9x'))
console.log(extractData<number>('userID', 21321681318))