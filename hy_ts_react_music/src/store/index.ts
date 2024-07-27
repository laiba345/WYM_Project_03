/**
 * configureStore是Redux Toolkit 提供的一个函数，用于简化 store 的配置和创建
 * counterReducer是从 ./module/counter 文件中导入的 reducer
 */
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector, shallowEqual } from 'react-redux'
import counterReducer from './module/counter'

// 创建并配置store
const store = configureStore({
    reducer: {
        // 这意味着store中counter这个slice的状态将由counterReducer来管理
        counter: counterReducer
    }
})

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// 可以封装好几个东西
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const appShallowEqual = shallowEqual

export default store
