import { configureStore } from "@reduxjs/toolkit";
import issueReducer from './slices/IssueSlice';
import taskReducer from './slices/AddTaskSlice'
import studUserReducer from './slices/StudentProfileSlice';
import  facultyissueReducer from './slices/FacultyIssueSlice'


export const store = configureStore({
  reducer: {       
    issues: issueReducer,              
    issuesfaculty:facultyissueReducer,
    assigntask:taskReducer,
    studentprofile:studUserReducer
  },
});
