import React from 'react'
import Studentnav from '../../Layouts/Header/StudentNav'
import AcademicReportForm from '../../Components/Carts/Academicform'



function AcademicForm() {
  return (
    <div className='AcademicForm'>
        <Studentnav/>
        <AcademicReportForm />
    </div>
  )
}

export default AcademicForm

