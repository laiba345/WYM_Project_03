// 在react中书写任何组件都需要继承Component或者PureComponent
import React, { PureComponent } from 'react'

/**
 * 类组件最大的特点是里面有两个属性
 * 1. state
 * 2. props
 */
interface Iprops {
    name: string
    age?: number
}

interface IState {
    message: string
    counter: number
}

interface ISnapshot {
    address: string
}

// 还有可能有第三个类型是定义返回值类型；
class Demo02 extends PureComponent<Iprops, IState> {
    // 类型定义在这一块是不生效的；
    // props一般都是通过别的组件传递过来的；
    // 写法1；
    // constructor(props: Iprops) {
    //     super(props) // 不写的话，其实默认就会进行super操作；
    //     // 对于类式组件，其也有原始状态存在state当中
    //     // 对于state我们也需要定义相关的内容来操作；
    //     this.state = {
    //         message: 'hello world',
    //         counter: 100
    //     }
    // }

    // 写法2
    name = 'aaa'
    state = {
        message: 'hello world',
        counter: 100
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<Iprops>, prevState: Readonly<IState>) {
        return { address: '洛杉矶' }
    }

    render(): React.ReactNode {
        return (
            <div>
                name: {this.props.name}
                age: {this.props.age}
                message: {this.state.message}
                counter: {this.state.counter}
            </div>
        )
    }
}

export default Demo02
