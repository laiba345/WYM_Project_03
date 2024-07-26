import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    // 这里不需要写什么类型，会自动进行类型推导
    name: 'counter',
    // 不用写类型，会自动进行类型推导操作
    initialState: {
        count: 100,
        message: '哈哈哈哈'
    },
    // 必须写上reducers
    reducers: {}
})

// 使用了一定要进行导出操作
export default counterSlice.reducer
