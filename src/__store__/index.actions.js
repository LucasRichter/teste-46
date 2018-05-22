export const SELECT_USER = 'SELECT-USER'
export const selectUser = userId => {
  return {
    type: SELECT_USER,
    userId
  }
}

export const CLOSE_MODAL = 'CLOSE-MODAL'
export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}

export const OPEN_MODAL = 'OPEN-MODAL'
export const openModal = () => {
  return {
    type: OPEN_MODAL
  }
}

export const SELECT_TASK = 'SELECT_TASK'
export const selectTask = taskId => {
  return {
    type: SELECT_TASK,
    taskId
  }
}
