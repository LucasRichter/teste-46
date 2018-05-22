import { TASKS } from '../utils/prefixes'
import tasks from './tasks/tasks.reducer'
import { SELECT_USER, CLOSE_MODAL, OPEN_MODAL, SELECT_TASK } from './index.actions'

const initialState = {
  users: {
    1: {
      id: 1,
      name: 'Lisa Helma Davoz',
      role: 'Senior dev',
      avatar: '01.jpg'
    },
    2: {
      id: 2,
      name: 'Ásta Grietin',
      role: 'Junior Dev',
      avatar: '02.jpg'
    },
    3: {
      id: 3,
      name: 'Fedot Eko',
      role: 'Project Manager',
      avatar: '03.jpg'
    },
    4: {
      id: 4,
      name: 'Basit Boaz',
      role: 'Senior Dev',
      avatar: '04.jpg'
    },
  },
  tasks: {},
  userSelected: 1,
  showModal: false,
  taskSelected: '',
}

export default function index( state = initialState, action ) {
  if ( !action ) {
    return state
  }

  let prefix = action.type.split( '_' )[ 0 ]
  switch ( prefix ) {
    case TASKS:
      return Object.assign( {}, state, { tasks: tasks( state.tasks, action ) } )
    default:
      switch ( action.type ) {
        case SELECT_USER:
          return Object.assign( {}, state, { userSelected: action.userId } )
        case CLOSE_MODAL:
          return Object.assign( {}, state, { showModal: false } )
        case OPEN_MODAL:
          return Object.assign( {}, state, { showModal: true } )
        case SELECT_TASK:
          return Object.assign( {}, state, { taskSelected: action.taskId } )
        default:
          return state
      }
  }
}
