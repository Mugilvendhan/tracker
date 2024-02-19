import React from 'react'
import Studentnav from '../../Layouts/Header/StudentNav'

import Cardhold from '../../Components/Carts/Student/createIssue/Main'

function CreateIssues() {
  return (
    <div className='CreateIssues'>
        <Studentnav/>
       <div style={{padding:'3rem'}}>
       <Cardhold/>
       </div>
    </div>
  )
}

export default CreateIssues