import MainContainer from './MainContainer'
import MessageBar from './MessageBar/MessageBar'
import ModalContainer from './Modals/ModalContainer'
import { Outlet } from 'react-router-dom'
import React from 'react'
import Sidebar from './Sidebar/Sidebar'

function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <MessageBar />
      <ModalContainer />
    </div>
  )
}

export default Layout