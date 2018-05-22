import React from 'react'
import { bool, oneOfType, element, array, func } from 'prop-types'

export default class ModalComponent extends React.Component {
  static propTypes = {
    children: oneOfType( [
      element,
      array,
    ] ).isRequired,
    onClose: func.isRequired,
    show: bool,
  }

  static defaultProps = {
    show: false,
  }

  constructor( props ) {
    super( props )
    this.state = {
      show: props.show
    }
  }

  componentWillReceiveProps( nextProps ) {
    const { show } = nextProps
    this.setState( { show } )
  }

  closeModal( e ) {
    const { onClose } = this.props
    let isOverlay = e.target.classList.contains( 'modal-overlay' )
    let isClose = e.target.classList.contains( 'modal__close' )

    if ( !( isOverlay || isClose ) ) {
      return
    }

    this.setState( { show: false }, () => onClose() )
  }

  render() {
    const show = this.state.show ? 'modal-overlay--show' : ''
    return (
      <div
        className={ `modal-overlay ${show}` }
        onClick={ this.closeModal.bind( this ) }
      >
        <div className={ `modal` } >
          <div
            className={ `modal__close` }
            onClick={ this.closeModal.bind( this ) }
          >
            <span>
              { `X` }
            </span>
          </div>
          { this.props.children }
        </div>
      </div>
    )
  }
}
