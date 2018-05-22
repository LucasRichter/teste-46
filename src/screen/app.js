import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bool, func } from 'prop-types'

import UserInfos from '../components/userInfos'
import Button, { ADD_TYPE } from '../components/button'
import Modal from '../components/modal'
import TaskForm from '../components/taskForm'
import { closeModal, openModal } from '../__store__/index.actions'
import Tasks from '../components/tasks'

AppScreen.propTypes = {
  closeModal: func.isRequired,
  openModal: func.isRequired,
  showModal: bool.isRequired,
}

function AppScreen( { closeModal, openModal, showModal } ) {
  return (
    <Fragment>
      <section className={ `app__header` }>
        <UserInfos />
        <Button
          onClick={ () => openModal() }
          text={ `Adicionar Task` }
          type={ ADD_TYPE }
        />
      </section>
      <section className={ `app__body` }>
        <Tasks />
      </section>
      <Modal
        onClose={ () => closeModal() }
        show={ showModal }
      >
        <TaskForm />
      </Modal>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    showModal: state.showModal
  }
}

const App = connect(
  mapStateToProps,
  { openModal, closeModal }
)( AppScreen )

export default App
