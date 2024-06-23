import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import 'normalize.css'
import '@/assets/css/index.less'
import { HashRouter } from 'react-router-dom'

// React18之前是通过ReactDOM.render直接来进行
// 两个不同的版本
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
)
