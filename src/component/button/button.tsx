import './button.css'

import React from 'react'

/**
 * Button component props
 */
interface IButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const Button = (_props: IButtonProps) => {
  const {
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
  } = _props

  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  )
}
