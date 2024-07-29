import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
// 如果不希望二次导入的话，可以将下面的也导入别的文件
// import { shallowEqual } from 'react-redux'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
    return (
        <div className="App">
            <AppHeader></AppHeader>
            <Suspense>
                <div className="main">{useRoutes(routes)}</div>
            </Suspense>
            <AppFooter></AppFooter>
        </div>
    )
}

export default App
