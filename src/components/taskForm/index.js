import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object, func } from 'prop-types'

import Input from '../input'
import { TYPE_TEXT } from '../input/types'
import Button, { TYPE_FORM } from '../button'
import { receiveTask, updateTask } from '../../__store__/tasks/tasks.actions'
import { TASKS_STATUS } from '../../utils/constants'
import { closeModal, selectTask } from '../../__store__/index.actions'

class TaskFormComponent extends Component {
  static propTypes = {
    closeModal: func.isRequired,
    receiveTask: func.isRequired,
    selectTask: func.isRequired,
    taskSelected: object,
    updateTask: func.isRequired,
    users: object.isRequired,
  }

  static defaultProps = {
    taskSelected: undefined
  }

  constructor( props ) {
    super( props )

    this.state = {
      description: '',
      user: '',
      status: '',
    }
  }

  componentWillReceiveProps( nextProps ) {
    const { taskSelected } = nextProps

    if ( taskSelected ) {
      this.setState( { ...taskSelected } )
    }
  }

  handleDescription( e ) {
    this.setState( { description: e.target.value } )
  }

  handleUser( e ) {
    this.setState( { user: e.target.value } )
  }

  handleStatus( e ) {
    this.setState( { status: e.target.value } )
  }

  getUserSelect() {
    const { users } = this.props

    return (
      <select
        onChange={ this.handleUser.bind( this ) }
        value={ this.state.user }
      >
        <option
          disabled
          value={ `` }
        >
          { `Responsável` }
        </option>
        { Object.values( users ).map( user => (
          <option
            key={ user.id }
            value={ user.id }
          >
            { user.name }
          </option>
        ) ) }
      </select>
    )
  }

  getStatusSelect() {
    return (
      <select
        onChange={ this.handleStatus.bind( this ) }
        value={ this.state.status }
      >
        <option
          disabled
          value={ `` }
        >
          { `Status` }
        </option>
        { Object.values( TASKS_STATUS ).map( status => (
          <option
            key={ status }
            value={ status }
          >
            { status }
          </option>
        ) ) }
      </select>
    )
  }

  onSubmit() {
    const { closeModal, receiveTask, selectTask, updateTask } = this.props
    const task = Object.assign( {}, this.state )

    if ( this.isValid() ) {
      if ( task.id ) {
        updateTask( task )
        selectTask( '' )
      } else {
        receiveTask( this.state )
      }
      closeModal()
      this.setState( {
        id: '',
        description: '',
        user: '',
        status: '',
      } )
    }
  }

  isValid() {
    const { status, user, description } = this.state
    return status && user && description
  }

  render() {
    return (
      <div className={ `task__form` }>
        <h2>{ `Criar Tarefa` }</h2>
        <Input
          fieldName={ `Descrição` }
          onChange={ this.handleDescription.bind( this ) }
          type={ TYPE_TEXT }
          value={ this.state.description }
        />
        { this.getUserSelect() }
        { this.getStatusSelect() }
        <Button
          onClick={ this.onSubmit.bind( this ) }
          text={ `Enviar` }
          type={ TYPE_FORM }
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    taskSelected: state.taskSelected ? state.tasks[ state.taskSelected ] : undefined
  }
}

const TaskForm = connect(
  mapStateToProps,
  { receiveTask, closeModal, updateTask, selectTask }
)( TaskFormComponent )

export default TaskForm
