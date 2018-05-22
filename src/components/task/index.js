import React from 'react'
import { connect } from 'react-redux'
import { object, func, number } from 'prop-types'
import { selectUser, selectTask, openModal } from '../../__store__/index.actions'
import { deleteTask } from '../../__store__/tasks/tasks.actions'
import { TASKS_CLASS } from '../../utils/constants'

TaskComponent.propTypes = {
  deleteTask: func.isRequired,
  openModal: func.isRequired,
  selectTask: func.isRequired,
  selectUser: func.isRequired,
  task: object.isRequired,
  user: object.isRequired,
  userSelected: number.isRequired,
}

function TaskComponent( { task, user, selectUser, deleteTask, userSelected, selectTask, openModal } ) {
  return (
    <section className={ `task` }>
      <i className={ `icon-drag` } />
      <div className={ `task__main` }>
        <p
          className={ `task__description` }
          onClick={ () => {
            selectTask( task.id )
            openModal()
          } }
        >
          { task.description }
        </p>
        <div
          className={ `task__user${user.id === userSelected ? '--active' : ''}` }
          onClick={ () => selectUser( user.id ) }
        >
          <img
            src={ require( `./assets/${user.avatar}` ) }
          />
          <p>{ user.name }</p>
        </div>
        <div className={ `task__status` }>
          <span className={ `task__circle--${TASKS_CLASS[ task.status ]}` } />
          <p>{ task.status }</p>
        </div>
      </div>
      <i
        className={ `icon-trash` }
        onClick={ () => deleteTask( task.id ) }
      />
    </section>
  )
}

const mapStateToProps = ( state, props ) => {
  return {
    user: state.users[ props.task.user ],
    userSelected: state.userSelected
  }
}

const Task = connect(
  mapStateToProps,
  { selectUser, deleteTask, selectTask, openModal }
)( TaskComponent )

export default Task
