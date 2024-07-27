import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
// 如果不希望二次导入的话，可以将下面的也导入别的文件
// import { shallowEqual } from 'react-redux'
import routes from './router'
// 在最后进行使用的时候，只需要用到这个已经定义好的函数即可，会自动进行类型识别操作
import { useAppSelector, useAppDispatch, appShallowEqual } from './store'
import { changeMessageAction } from './store/module/counter'
// import store from './store'

// // const state = store.getState()
// // 如果每次获取类型都要这样写的话，非常的麻烦，需要进行简单的抽取操作；
// // 可以放到最终的index.ts文件当中
// type GetStateFnType = typeof store.getState
// type IRootState = ReturnType<GetStateFnType>

function App() {
    /**
     * useSelector是 React-Redux提供的一个 Hook
     * 用于从 Redux store 中提取数据
     * 它的作用是允许你在函数组件中访问 Redux store 的状态
     * 并且在 store 状态发生变化时重新渲染组件
     *
     * unknow 类型上面不能进行任何操作；
     * 可以直接先解构赋值操作出来也行；
     * 对于ts相关的项目来说，很多都是类型问题，这里写any类型肯定是不好的
     * 通过手动来定义一个类型也是相当复杂的
     * 在使用useSelector，如果要知道里面具体的类型，需要使用到getState()函数来获取
     */
    const { count, message } = useAppSelector(
        (state) => ({
            count: state.counter.count,
            message: state.counter.message
        }),
        appShallowEqual
    )

    // 事件处理函数
    const dispatch = useAppDispatch()
    // 事件处理函数通常放在return上面
    function handleChangeMessage() {
        // console.log('handleChangeMessage')
        dispatch(changeMessageAction('hello kk'))
    }
    // return后面一般写的是相关结构啥的；
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
            <button onClick={handleChangeMessage}>修改message</button>
            <Suspense>
                <div className="main">{useRoutes(routes)}</div>
            </Suspense>
        </div>
    )
}

export default App
