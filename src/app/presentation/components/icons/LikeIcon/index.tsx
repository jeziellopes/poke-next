import { IconProps } from '@/presentation/types'
import React from 'react'

const Icon = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      data-testid="like-icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 417 417"
      width={size || '417'}
      height={size || '417'}
      {...props}
    >
      <circle
        cx="208.5"
        cy="208.5"
        r="208.5"
        fill={color || '#F8D02F'}
      ></circle>
      <path
        fill="#fff"
        d="M266.234 105c-23.918 0-44.989 11.959-56.948 30.752C197.327 116.959 176.256 105 152.338 105 114.752 105 84 135.752 84 173.338c0 67.768 125.286 136.676 125.286 136.676s125.286-68.338 125.286-136.676c0-37.586-30.752-68.338-68.338-68.338z"
      />
    </svg>
  )
}

export const LikeIcon = React.memo(Icon)
