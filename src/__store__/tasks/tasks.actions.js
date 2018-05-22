import { TASKS } from '../../utils/prefixes'
import uuid from 'uuid/v4'

export const TASKS_RECEIVE = `${TASKS}_RECEIVE`
export const receiveTask = task => {
  task.id = uuid()
  return {
    type: TASKS_RECEIVE,
    task
  }
}

export const TASKS_DELETE = `${TASKS}_DELETE`
export const deleteTask = taskId => {
  return {
    type: TASKS_DELETE,
    taskId
  }
}

export const TASKS_UPDATE = `${TASKS}_UPDATE`
export const updateTask = task => {
  return {
    type: TASKS_UPDATE,
    task
  }
}

