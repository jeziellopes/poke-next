import { IconProps } from '@/presentation/types'
import React from 'react'

const Icon = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      data-testid="heart-icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 33"
      width={size || '40'}
      height={size || '33'}
      {...props}
    >
      <path
        fill={color || '#fff'}
        d="M29.09 0C25.274 0 21.91 1.91 20 4.91 18.09 1.91 14.727 0 10.91 0 4.91 0 0 4.91 0 10.91c0 10.817 20 21.817 20 21.817S40 21.818 40 10.91C40 4.91 35.09 0 29.09 0z"
      ></path>
    </svg>
  )
}

export const HeartIcon = React.memo(Icon)
