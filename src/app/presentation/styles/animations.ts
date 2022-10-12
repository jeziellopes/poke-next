import { css, Keyframes, keyframes } from 'styled-components'

/**
 * Default fade animations for the project
 */
export const fadeAnimations = css`
  animation: fade 0.5s ease-in-out;
  transition: transform 0.2s;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }
`

/**
 * Default scale animations for the project
 */
export const scaleAnimations = css`
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s;
  }
`

/**
 * Default shadow animations for the project
 */
export const shadowAnimations = css`
  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.25);
  }
`

/**
 * Default color animations for the project
 */
export const colorAnimations = css`
  border-color: #581d8a;
  box-shadow: 0px 0px 0px 0px #581d8a;
  transition: border 0.15s ease;

  &:hover {
    border: 2px solid;
  }

  &:focus {
    border: 2px solid;
  }
`

/**
 * Default spin animations for the project
 */

export const spin: Keyframes = keyframes`
  from {
    transform:rotate(0deg);
  }

  to {
    transform:rotate(360deg);
  }
`
