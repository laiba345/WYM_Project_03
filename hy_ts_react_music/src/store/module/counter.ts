import { createSlice } from '@reduxjs/toolkit'

// 创建切片
const counterSlice = createSlice({
    // 这里不需要写什么类型，会自动进行类型推导
    name: 'counter', // 这个切片取名为counter，这个名字会用于生成action的类型
    // 不用写类型，会自动进行类型推导操作
    // initialState：定义初始状态，里面包含两个属性，类似于state
    initialState: {
        count: 100,
        message: '哈哈哈哈',
        address: '广州'
    },
    // 必须写上reducers
    // reducers是定义处理状态更新的reducer函数，目前为空，表示没有定义任何处理函数
    // 在reducers当中可以定义很多个函数，用于实现相应的增删改查操作
    // 一般用于实现状态的更新
    reducers: {
        changeMessageAction(state, { payload }) {
            state.message = payload
        }
    }
})
/**
 * 想要修改message的做法步骤
 * 1. 导出
 * 2. 在使用到地方使用，比如我们演示处的App.tsx
 */
export const { changeMessageAction } = counterSlice.actions // 1 相关的方法是放在切片的actions当中的；
/**
 * counterSlice.reducer是由createSlice自动生成的reducer函数
 * 用于管理这个切片的状态，
 * 通过导出这个reducer，可以在Redux store 中使用
 * 使用了一定要进行导出操作
 */
export default counterSlice.reducer
