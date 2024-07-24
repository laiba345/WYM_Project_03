import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

// 用到了可以再将props定义进去
const Template: FC<IProps> = () => {
    return <div>Template</div>
}

export default memo(Template)
      