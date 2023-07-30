import React from 'react'
import Layouts from '../../Layouts/Layouts'
import HomeBar from './HomeBar'
import Message from './Message'
import CompanyGroup from './CompanyGroup'
import Objectives from './Objectives'

function UserHome() {
  return (
    <div>
    <Layouts>
    <HomeBar/>
    <Objectives/>
    <CompanyGroup/>
    </Layouts>
    </div>
  )
}

export default UserHome