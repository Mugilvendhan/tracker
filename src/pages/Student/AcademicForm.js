import React from 'react'
import Studentnav from '../../Layouts/Header/StudentNav'
import AcademicReportForm from '../../Components/Carts/Academicform'
import StaffTable from '../../Components/Carts/staff/StaffCompliants/StaffTable'
import ProgressCard from '../../Components/Carts/Admin/AdminDashboard/ProgressCard'


function AcademicForm() {
  return (
    <div className='AcademicForm'>
        <Studentnav/>
        <AcademicReportForm />
      {/*    <StaffTable/> */}
     {/*    <ProgressCard/>  */}
    </div>
  )
}

export default AcademicForm

