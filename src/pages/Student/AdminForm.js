import React from 'react'
import Studentnav from '../../Layouts/Header/StudentNav'
import AdminReportForm from '../../Components/Carts/Administrativeform'

function AdminForm() {
  return (
    <div className='AdminForm'>
        <Studentnav/>
        <AdminReportForm/>
    </div>
  )
}

export default AdminForm