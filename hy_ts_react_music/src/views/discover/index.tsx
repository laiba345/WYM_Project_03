import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'

interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    return (
        <div>
            <div>
                <Link to="/discover/recommend">推荐</Link>
                <Link to="/discover/ranking">排行榜</Link>
                <Link to="/discover/songs">歌单</Link>
                <Link to="/discover/djradio">主播电台</Link>
                <Link to="/discover/artist">歌手</Link>
                <Link to="/discover/album">新碟上架</Link>
            </div>
            {/* 表示懒加载子路由部分 */}
            {/* 二级路由的情况也是可以用我们的懒加载来实现的； */}
            <Suspense fallback="">
                {/* 使用Outlet来进行占位操作，后续在进行定位的时候，会自动定位到该处 */}
                <Outlet />
            </Suspense>
        </div>
    )
}
// memo函数用于优化函数组件的性能。它通过记忆（memoization）来避免不必要的重新渲染。
// 当组件的 props 没有变化时，memo 可以阻止该组件重新渲染，从而提高应用的性能。
export default memo(Discover)
