import React from 'react'
import Facultynav from '../../Layouts/Header/FacultyNav'
import FRaiseIssue from '../../Components/Carts/Faculty/FacultyRaiseIssue'

function FacultyRaiseIssues() {
  return (
    <div className='CreateIssues'>
    <Facultynav/>
   <div style={{padding:'3rem'}}>
   <FRaiseIssue/>
   </div>
</div>
  )
}

export default FacultyRaiseIssues