// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
/* import Academicform from './Components/Carts/Academicform';
import StatusTable from './Components/Carts/DataTable';
import Cardhold from './Components/Carts/Student/createIssue/Main';
import FCreateIssue from './pages/Faculty/FCreateIssue';
import FaProfile from './pages/Faculty/Profile';*/

import AcademicForm from './pages/Student/AcademicForm';
import AdminForm from './pages/Student/AdminForm';
import MyIssues from './pages/Student/MyIssues';
import  Profile  from './pages/Student/Profile'; 
import Landingpage from './pages/Landingpage';
import CreateIssues from './pages/Student/CreateIssues';
//import InfraReportForm from './Components/Carts/Infraform';
import InfrastructureForm from './pages/Student/InfrastructureForm'
import Tasks from './pages/Student/Tasks';
import FProfile from './pages/Faculty/FProfile';
import FTasks from './pages/Faculty/FTasks';
import FMyIssues from './pages/Faculty/FMyIssues';
import FacultyRaiseIssues from './pages/Faculty/FRaiseIssue';
import FAcademicReport from './pages/Faculty/FAcademicReport';
import FAdminReport from './pages/Faculty/FAdminReport';
import FInfraReport from './pages/Faculty/FInfraReport';
import StaffProfile from './pages/Staff/StaffProfile';
import StaffCompliaints from './pages/Staff/StaffCompliaints';
import AdminProfile from './pages/Admin/AdminProfile';
import StaffComplaintFaculty from './pages/Staff/StaffComplaintFaculty';
import AdminDashboard from './pages/Admin/AdminDashboard';
//import AStudentTable from './Components/Carts/Admin/ACompliantTables.js/AStudentTable';
import AStudentReportTable from './pages/Admin/AStudentReportTable';
import AFacultyReportTable from './pages/Admin/AFacultyReportTable';
//import AddUserStud from './Components/Carts/Admin/AddUserStud.js/AddStudTable';
import AddStudentPage from './pages/Admin/AddStudentPage';
function App() {
  return (
    <div className="App">
<Routes>
  
  <Route path="/" element={<Landingpage/>}/>
  <Route path="/studentprofile" element={<Profile/>}/>
  <Route path="/myissues" element={<MyIssues/>}/>
  <Route path="/createissue" element={<CreateIssues/>}/>
  <Route path="/studentacademicreport" element={<AcademicForm />}/>
  <Route path="/studentinfrastructurereport" element={<InfrastructureForm />}/>
  <Route path="/studentadminreport" element={<AdminForm />}/>
  <Route path="/tasktable" element={<Tasks />}/>
  <Route path="/facultyprofile" element={<FProfile />}/>
  <Route path="/ftasks" element={<FTasks />}/>
  <Route path="/fmyissues" element={<FMyIssues />}/>
  <Route path="/fraiseissues" element={<FacultyRaiseIssues />}/>
  <Route path="/facademicform" element={<FAcademicReport />}/>
  <Route path="/fadminform" element={<FAdminReport />}/>
  <Route path="/finfraform" element={<FInfraReport />}/>
  <Route path="/staffprofile" element={<StaffProfile />}/>
  <Route path="/staffcomplaint" element={<StaffCompliaints />}/>
  <Route path="/adminprofile" element={<AdminProfile />}/>
  <Route path="/staffcomplaintfaculty" element={<StaffComplaintFaculty />}/>
  <Route path="/admindashboard" element={<AdminDashboard />}/>
  <Route path="/adminstudenttable" element={<AStudentReportTable />}/>
  <Route path="/adminfacultytable" element={<AFacultyReportTable />}/>
  <Route path="/adduserstudent" element={<AddStudentPage />}/>
  
  
</Routes>



 {/*  <Landingpage/> */}
   {/*  <Profile/> */}
   {/*  < CreateIssues /> */}
{/* <MyIssues/> */}

{/*    <AcademicForm/> */}
  {/*  <FaProfile/> */}
  {/*  <FCreateIssue/> */}
  {/*  <FCreateIssue/> */}
    </div>



  );
}

export default App;





