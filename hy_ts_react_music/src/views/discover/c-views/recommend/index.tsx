import React, { memo, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'

interface IProps {
    children?: ReactNode
}

interface IBannerData {
    bannerBizType: string
    encodeId: string
    imageUrl: string
    scm: string
    song?: any
    targetId: number
    targetType: number
    titleColor: string
    typeTitle: string
    url?: any
    video?: any
}

const Recommend: FC<IProps> = () => {
    // 具体知道服务器返回的数据的话可以写具体的类型，否则写any类型即可，<>中写的是具体类型
    const [banners, setBanners] = useState<IBannerData[]>([])
    // 测试网络请求
    /**
     * 在React中，useEffect是一个Hook，用于在函数组件中处理副作用。
     * 副作用可以包括数据获取、订阅、手动DOM操作以及在React组件内执行的其他需要与外部系统交互的操作。
     */
    useEffect(() => {
        hyRequest
            .get({
                url: '/banner'
            })
            .then((res) => {
                setBanners(res.banners) // 每次调用的时候，会进行重新渲染操作；
            })
    }, [])
    return (
        <div>
            {banners.map((item) => {
                return <div key={item.imageUrl}>{item.imageUrl}</div>
            })}
        </div>
    )
}

export default memo(Recommend)
