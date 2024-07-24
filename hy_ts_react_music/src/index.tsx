import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import 'normalize.css'
import '@/assets/css/index.less'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
// React18之前是通过ReactDOM.render直接来进行
// 两个不同的版本
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    // 在index.tsx文件中，会将 Redux 的 Provider 组件包裹在你的应用组件外部，
    // 以确保 Redux store 在整个应用中都可用。
    // 在后续的子组件中提供store
    <Provider store={store}>
        <React.StrictMode>
            {/* 需要使用路由包裹 */}
            <HashRouter>
                <App />
            </HashRouter>
        </React.StrictMode>
    </Provider>
)
