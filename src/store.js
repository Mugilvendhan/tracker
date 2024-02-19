/* import {configureStore} from "@reduxjs/toolkit"
import issueReducer from './slices/IssueSlice'
import thunk from 'redux-thunk';

export const store = configureStore({

    reducer:
    {

        issues: issueReducer,
        applyMiddleware(thunk)               
        
    
        }

}

) */


/* import { configureStore } from "@reduxjs/toolkit";
import issueReducer from './slices/IssueSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    issues: issueReducer,
  },
  middleware: [thunk],
});

 */



/* import { configureStore } from "@reduxjs/toolkit";
import issueReducer from './slices/IssueSlice';

export const store = configureStore({
  reducer: {
    issues: issueReducer,
  }
});
 */



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
