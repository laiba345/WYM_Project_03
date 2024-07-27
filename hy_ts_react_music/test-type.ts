// interface IFnCall {
//     (name: string, age: number): string
// }

// 1. 定义函数的调用签名
interface IFnCall {
    <KK>(fn: () => KK, age: number): KK
}

// 2. 定义函数对象
const foo: IFnCall = function (fn, age) {
    return fn() // 
}

// 调一个函数，可以在这个函数后面传一个类型
// 不传入明确的调用时的泛型，使用类型推断
// 3. 调用函数
foo<string>(() => {
    return 'aaa'
}, 18)

// 不传入明确的调用时的泛型，类型推断
const res = foo(() => {
    return 'aaa'
}, 18)

