import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

// 类型检查：用于对传递给该组件的props进行类型检查，通过定义这个接口
// 可以确保传递给download组件的props符合指定的类型，帮助在开发过程中捕捉潜在的错误和问题
interface IProps {
    /**
     *   定义了一个可选的children属性，这个属性的类型是ReactNode，
     *   这意味着传递给Download组件的children属性可以是任何被渲染的React节点(元素、字符串、数组)
     */
    children?: ReactNode
}
// interface Iprops2 {
//     children?: ReactNode,
//     name: string,
//     age: number,
//     height?: number
// }

// const Download2 = (props: Iprops2) => {

// }
// FC<IProps>: 这是TypeScript语法，
// 表示该组件是一个函数组件（Function Component），
// 且接受的props类型是IProps。
// 因为我们也是直接从React中导入了FC
const Download: FC<IProps> = () => {
    return <div>Download</div>
}

// memo用于优化组件的性能，通过避免不必要的重新渲染来提升应用的效率
export default memo(Download)
