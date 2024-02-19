import React from 'react'
import Studentnav from '../../Layouts/Header/StudentNav'
import StudentProfile from '../../Components/Carts/Student/profile/Mainprofile'

function Profile() {
  return (
    <div className='Profile'>
        <Studentnav />
      <StudentProfile/>

    </div>
  )
}

export default Profile;