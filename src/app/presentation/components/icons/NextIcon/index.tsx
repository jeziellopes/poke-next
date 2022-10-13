import { IconProps } from '@/presentation/types'
import React from 'react'

import * as S from './styles'

const Icon = ({ size, ...props }: IconProps) => {
  return (
    <S.Container>
      <svg
        data-testid="next-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={size || 17}
        height={size || 17}
        fill="none"
        viewBox="0 0 17 17"
        {...props}
      >
        <path
          fill="#000"
          d="M4.83 17c.684 0 1.347-.23 1.878-.652l7.366-5.963c.289-.226.522-.512.682-.838a2.37 2.37 0 000-2.092 2.417 2.417 0 00-.682-.838L6.708.653A3.086 3.086 0 003.516.285a2.53 2.53 0 00-1.095.907A2.46 2.46 0 002 2.537v11.927c.006.479.152.946.42 1.345.27.4.65.715 1.096.908.413.184.861.28 1.315.283z"
        ></path>
      </svg>
    </S.Container>
  )
}

export const NextIcon = React.memo(Icon)
