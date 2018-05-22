import React from 'react'
import { string, array } from 'prop-types'
import { connect } from 'react-redux'
import { getTasksByStatus } from '../../__store__/tasks/tasks.reducer'
import Task from '../task'
import { TASKS_CLASS } from '../../utils/constants'

GroupTasksComponent.propTypes = {
  tasks: array.isRequired,
  type: string.isRequired,
}

function GroupTasksComponent( { tasks, type } ) {
  return (
    <section className={ `group-tasks` }>
      <div className={ `group-tasks__header` } >
        <span className={ `group-tasks__circle--${TASKS_CLASS[ type ]}` } />
        <h2 className={ `group-tasks__title` }>{ type }</h2>
      </div>
      <div className={ `group-tasks__table` }>
        <p>{ `Descrição` }</p>
        <p>{ `Responsável` }</p>
        <p>{ `Status` }</p>
      </div>
      { tasks ? tasks.map( task => (
        <Task
          key={ task.id }
          task={ task }
        />
      ) ) : <p>{ `Nenhuma tarefa cadastrada.` }</p> }
    </section>
  )
}

const mapStateToProps = ( state, props ) => {
  return {
    tasks: getTasksByStatus( state, props.type ),
  }
}

const GroupTasks = connect(
  mapStateToProps,
)( GroupTasksComponent )

export default GroupTasks
