const _pipe = (f: (arg0: any) => any, g: (arg0: any) => any) => (arg: any) => g(f(arg))
const pipe = (...fns: any[]) => fns.reduce(_pipe)

const id = (x:any) => x

const filterNullish = (array:any[]) => array.filter(Boolean)

function arrayCombinator<T>(handler: (t: T) => any) {
    return function (value: T | T[] | undefined) {
        if (value === undefined) {
            return undefined
        } else if (Array.isArray(value)) {
            return value.map(handler)
        } else {
            return handler(value)
        }
    }
}

export default { pipe, id, filterNullish, arrayCombinator };