import { TASKS_RECEIVE, TASKS_DELETE, TASKS_UPDATE } from './tasks.actions'

export const initialState = {}

export default function tasks( state = initialState, action ) {
  switch ( action.type ) {
    case TASKS_RECEIVE:
      return Object.assign( {}, state, { [ action.task.id ]: action.task } )
    case TASKS_DELETE: {
      let newState = Object.assign( {}, state )
      delete newState[ action.taskId ]
      return newState
    }
    case TASKS_UPDATE:
      return Object.assign( {}, state, { [ action.task.id ]: action.task } )
    default:
      return state
  }
}

export function countTasksByUserAndStatus( state, userId, status ) {
  let tasks = Object.assign( {}, state.tasks )
  return Object.values( tasks ).filter( task => task.status === status && task.user === `${userId}` ).length
}

export function getTasksByStatus( state, status ) {
  let tasks = Object.assign( {}, state.tasks )
  return Object.values( tasks ).filter( task => task.status === status )
}
