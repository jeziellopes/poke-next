import { IconProps } from '@/presentation/types'
import React from 'react'

import * as S from './styles'

const Icon = ({ size, ...props }: IconProps) => {
  return (
    <S.Container>
      <svg
        data-testid="prev-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={size || 17}
        height={size || 17}
        fill="none"
        viewBox="0 0 17 17"
        {...props}
      >
        <path
          fill="#000"
          d="M12.17 17c-.684 0-1.347-.23-1.878-.652l-7.366-5.963a2.416 2.416 0 01-.682-.838 2.37 2.37 0 010-2.092c.16-.326.393-.613.682-.838L10.292.653a3.086 3.086 0 013.192-.368 2.53 2.53 0 011.095.907c.27.4.415.867.421 1.345v11.927a2.46 2.46 0 01-.42 1.345c-.27.4-.65.715-1.097.908-.412.184-.86.28-1.314.283z"
        ></path>
      </svg>
    </S.Container>
  )
}

export const PrevIcon = React.memo(Icon)
