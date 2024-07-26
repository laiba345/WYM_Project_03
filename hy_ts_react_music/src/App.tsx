import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import routes from './router'

function App() {
    /**
     * useSelector是 React-Redux提供的一个 Hook
     * 用于从 Redux store 中提取数据
     * 它的作用是允许你在函数组件中访问 Redux store 的状态
     * 并且在 store 状态发生变化时重新渲染组件
     *
     * unknow 类型上面不能进行任何操作；
     * 可以直接先解构赋值操作出来也行；
     */
    const { count, message } = useSelector(
        (state: any) => ({
            count: state.counter.count,
            message: state.counter.message
        }),
        shallowEqual
    )
    return (
        <div className="App">
            <div className="nav">
                <Link to="/discover">发现音乐</Link>
                <Link to="/mine">我的音乐</Link>
                <Link to="/focus">关注</Link>
                <Link to="/download">下载客户端</Link>
            </div>
            <h2>当前计数为：{count}</h2>
            <h2>当前计数为：{message}</h2>
            <Suspense>
                <div className="main">{useRoutes(routes)}</div>
            </Suspense>
        </div>
    )
}

export default App
