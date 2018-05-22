import React from 'react'
import { connect } from 'react-redux'
import { object, number } from 'prop-types'
import { countTasksByUserAndStatus } from '../../__store__/tasks/tasks.reducer'
import { PENDING, IN_PRODUCTION, SOLVED } from '../../utils/constants'
import { formatNumber } from '../../utils/formatters'

UserInfosComponent.propTypes = {
  inProductionTasks: number.isRequired,
  pendingTasks: number.isRequired,
  solvedTasks: number.isRequired,
  user: object.isRequired,
}

function UserInfosComponent( { user, pendingTasks, inProductionTasks, solvedTasks } ) {
  return (
    <section className={ `user-infos` } >
      <img
        className={ `user-infos__avatar` }
        src={ require( `./assets/${user.avatar}` ) }
      />
      <div className={ `user-infos__block` }>
        <h1 className={ `user-infos__name` }>{ user.name }</h1>
        <p className={ `user-infos__role` }>{ user.role }</p>
        <div className={ `user-infos__task-status` }>
          <p className={ `user-infos__task-status__text` }>{ `Você possui:` }</p>
          <div className={ `user-infos__task-status__block` }>
            <div className={ `user-infos__task-status__status` }>
              <p className={ `user-infos__task-status__count` }>{ formatNumber( pendingTasks ) }</p>
              <p className={ `user-infos__task-status__text` }>{ PENDING }</p>
            </div>
            <div className={ `user-infos__task-status__status` }>
              <p className={ `user-infos__task-status__count` }>{ formatNumber( inProductionTasks ) }</p>
              <p className={ `user-infos__task-status__text` }>{ IN_PRODUCTION }</p>
            </div>
            <div className={ `user-infos__task-status__status` }>
              <p className={ `user-infos__task-status__count` }>{ formatNumber( solvedTasks ) }</p>
              <p className={ `user-infos__task-status__text` }>{ SOLVED }</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    user: state.users[ state.userSelected ],
    pendingTasks: countTasksByUserAndStatus( state, state.userSelected, PENDING ),
    inProductionTasks: countTasksByUserAndStatus( state, state.userSelected, IN_PRODUCTION ),
    solvedTasks: countTasksByUserAndStatus( state, state.userSelected, SOLVED ),
  }
}

const UserInfos = connect(
  mapStateToProps
)( UserInfosComponent )

export default UserInfos
