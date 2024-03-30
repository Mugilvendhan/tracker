import { configureStore } from "@reduxjs/toolkit";
import issueReducer from './slices/IssueSlice';
import taskReducer from './slices/AddTaskSlice'
import studUserReducer from './slices/StudentProfileSlice';
import  facultyissueReducer from './slices/FacultyIssueSlice'


export const store = configureStore({                                      // centralized location for managing application state and enables predictable state management using the Redux pattern.
  reducer: {                                                                //handling changes to different parts of the state tree.
    issues: issueReducer,              
    issuesfaculty:facultyissueReducer,
    assigntask:taskReducer,
    studentprofile:studUserReducer
  },
});
