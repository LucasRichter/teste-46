import React, { Fragment } from 'react'
import { TASKS_STATUS } from '../../utils/constants'
import GroupTasks from '../groupTasks'

export default function Tasks() {
  return (
    <Fragment>
      { TASKS_STATUS.map( status => (
        <GroupTasks
          key={ status }
          type={ status }
        />
      ) ) }
    </Fragment>
  )
}
