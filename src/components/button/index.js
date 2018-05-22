import React from 'react'
import { func, string } from 'prop-types'

export const ADD_TYPE = 'add'

Button.propTypes = {
  onClick: func.isRequired,
  text: string.isRequired,
  type: string
}

Button.defaultProps = {
  type: ''
}

export default function Button( { text, type, onClick } ) {
  let icon = (
    <i className={ `icon-Add button__icon` } />
  )

  return (
    <button
      className={ `button` }
      onClick={ onClick }
    >
      { type === ADD_TYPE && icon }
      { text }
    </button>
  )
}
