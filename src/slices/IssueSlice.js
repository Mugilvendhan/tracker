import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState={
    
    issuesList:[],
    selectedField:{},                                          
    isLoading:false,
    error:null
}


const BASE_URL="http://localhost:5000/issues/"

export const getIssuesFromServer= createAsyncThunk(
    "issues/getIssuesFromServer",                                                      //string type / callback function
    
    async(_,{rejectWithValue})=>{
        const response=await fetch(BASE_URL)
        if(response.ok){
            const jsonResponse=await response.json()
            console.log(jsonResponse)
            return jsonResponse
        }
        else{
            return rejectWithValue({error:'issues not found'})
        }
    }
)



//post(add)
export const addIssueToServer = createAsyncThunk(
    "issues/addIssueToServer",
    async ( issue,{rejectWithValue }) => {
      const options ={
          method:"POST",
          body:JSON.stringify(issue),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("http://localhost:5000/issues/",options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in Issue addition" });
      }
    }
    );



 //PATCH
 
 export const updateIssueToServer = createAsyncThunk(
    "issues/updateIssueToServer",
    async ( issue,{rejectWithValue }) => {
      const options ={
          method:"PATCH",
          body:JSON.stringify(issue),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("http://localhost:5000/issues/"+issue.id,options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in Issue UPDATE" });
      }
    }
    );


    export const removeIssueFromServer = createAsyncThunk(
        "issues/removeIssueFromServer",
        async ( issue,{rejectWithValue }) => {
          const options ={
              method:"DELETE",
              body:JSON.stringify(issue),
              headers:{"content-type":"application/json;charset=UTF-8"},
          }
              const response = await fetch("http://localhost:5000/issues/"+issue.id,options);
          if (response.ok) {
            const data = response.json();
            return data;
          } 
        }
        );
  




const issueSlice = createSlice({

    name:'issueSlice',
    initialState,
    reducers:{                                                                     //action to be performed



        addIssue: (state, action) => {       
            const id = Math.random() * 100;
            let newIssue = { ...action.payload, id };
            state.issuesList.push(newIssue);
          },


          removeUser: (state, action) => {
            state.issuesList = state.issuesList.filter(
              (issue) => issue.id !== action.payload.id
            );
          },

          updateIssue: (state, action) => {
            state.issuesList = state.issuesList.map((issue) =>
              issue.id === action.payload.id ? action.payload : issue
            );
          },


          setSelectedIssue: (state, action) => {
            state.selectedField = action.payload;
          },




           


        

    },




    extraReducers:(builder)=>{                                                           //lifecycle action(pending,fulfilled,rejected)
        builder                                                                          //parameter
        // GET
        .addCase(getIssuesFromServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getIssuesFromServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=''
            state.issuesList = action.payload
        })
        .addCase(getIssuesFromServer.rejected,(state,action)=>{
            state.error=action.payload.error
            state.isLoading=false
            state.issuesList=[]
        })

        
        .addCase(addIssueToServer.pending, (state) => {})
      .addCase(addIssueToServer.fulfilled, (state, action) => {
        state.issuesList.push(action.payload);
        state.error = "";
      })
      .addCase(addIssueToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        
      })


       .addCase(updateIssueToServer.fulfilled, (state, action) => {
       /*  const updatedIssue = action.payload; */
        state.issuesList = state.issuesList.map((issue) =>
          issue.id === action.payload.id ? action.payload : issue
        );
        state.error = "";
       /*  state.isLoading = false; */
      })
      .addCase(updateIssueToServer.pending, (state) => {
       /*  state.isLoading = true; */
      })
      .addCase(updateIssueToServer.rejected, (state, action) => {
        state.error = action.payload.error;
      /*   state.isLoading = false; */


      })

      .addCase(removeIssueFromServer.pending, (state) => {})
      .addCase(removeIssueFromServer.fulfilled, (state, action) => {
        state.issuesList = state.issuesList.filter(
            (issue) => issue.id !== action.payload.id
          );
        state.error = "";
      })
      .addCase(removeIssueFromServer.rejected, (state, action) => {
        state.error = action.payload.error; 
      })

    
    },
}



);




 export const {addIssue,updateIssue,removeUser,setSelectedIssue,/* setSelectedIssueFaculty */} = issueSlice.actions ;
 export const { error } = issueSlice;
export default issueSlice.reducer;

