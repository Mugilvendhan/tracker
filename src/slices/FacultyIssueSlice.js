import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState={

    issuesListFaculty:[],
    selectedFieldFaculty:{},                     
    isLoading:false,                  
    error:null
}




export const getIssuesFromServerFaculty= createAsyncThunk(
    "issuesfaculty/getIssuesFromServerFaculty",
    
    async(_,{rejectWithValue})=>{
        const response=await fetch("http://localhost:5000/issuesfaculty/")
        if(response.ok){
            const jsonResponse=await response.json()
            console.log(jsonResponse)
            return jsonResponse
        }
        else{
            return rejectWithValue({error:'issues not found'})
        }
    }
);

export const addIssueToServerFaculty = createAsyncThunk(
    "issuesfaculty/addIssueToServerFaculty",
    async ( issuefaculty,{rejectWithValue }) => {
      const options ={
          method:"POST",
          body:JSON.stringify(issuefaculty),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("http://localhost:5000/issuesfaculty/",options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in user addition" });
      }
    }
    );

    export const updateIssueToServerFaculty = createAsyncThunk(
        "issuesfaculty/updateIssueToServerFaculty",
        async ( issuefaculty,{rejectWithValue }) => {
          const options ={
              method:"PATCH",
              body:JSON.stringify(issuefaculty),
              headers:{"content-type":"application/json;charset=UTF-8"},
          }
              const response = await fetch("http://localhost:5000/issuesfaculty/"+issuefaculty.id,options);
          if (response.ok) {
            const data = response.json();
            return data;
          } else {
            return rejectWithValue({ error: "Something Went Wrong in Issue UPDATE" });
          }
        }
        );


        export const removeIssueFromServerFaculty = createAsyncThunk(
            "issuesfaculty/removeIssueFromServerFaculty",
            async ( issuefaculty,{rejectWithValue }) => {
              const options ={
                  method:"DELETE",
                  body:JSON.stringify(issuefaculty),
                  headers:{"content-type":"application/json;charset=UTF-8"},
              }
                  const response = await fetch("http://localhost:5000/issuesfaculty/"+issuefaculty.id,options);
              if (response.ok) {
                const data = response.json();
                return data;
              } 
            }
            );



            const issueSliceFaculty = createSlice({

                name:'issueSliceFaculty',
                initialState,
                reducers:{



                    addIssueFaculty: (state, action) => {
                        const id = Math.random() * 100;
                        let newIssue = { ...action.payload, id };
                        state.issuesListFaculty.push(newIssue);
                      },
            
                      
                      removeUserFaculty: (state, action) => {
                        state.issuesListFaculty = state.issuesListFaculty.filter(
                          (issuefaculty) => issuefaculty.id !== action.payload.id
                        );
                      },
            
                      updateIssueFaculty: (state, action) => {
                        state.issuesListFaculty = state.issuesListFaculty.map((issuefaculty) =>
                        issuefaculty.id === action.payload.id ? action.payload : issuefaculty
                        );
                      },
            
 
                   
                       setSelectedIssueFaculty: (state, action) => {
                       state.selectedFieldFaculty = action.payload;
                        }


                },

                

                extraReducers:(builder)=>{
                    builder

                    .addCase(getIssuesFromServerFaculty.pending,(state)=>{
                        state.isLoading=true
                    })
                    .addCase(getIssuesFromServerFaculty.fulfilled,(state,action)=>{
                        state.isLoading=false
                        state.error=''
                        state.issuesListFaculty = action.payload
                    })
                    .addCase(getIssuesFromServerFaculty.rejected,(state,action)=>{
                        state.error=action.payload.error
                        state.isLoading=false
                        state.issuesListFaculty=[]
                    })
                
                
                      
                    .addCase(addIssueToServerFaculty.pending, (state) => {})
                    .addCase(addIssueToServerFaculty.fulfilled, (state, action) => {
                      state.issuesListFaculty.push(action.payload);
                      state.error = "";
                    })
                    .addCase(addIssueToServerFaculty.rejected, (state, action) => {
                      state.error = action.payload.error;
                      
                    })
                
                
                    .addCase(updateIssueToServerFaculty.fulfilled, (state, action) => {
                        /*  const updatedIssue = action.payload; */
                         state.issuesListFaculty = state.issuesListFaculty.map((issuefaculty) =>
                         issuefaculty.id === action.payload.id ? action.payload : issuefaculty
                         );
                         state.error = "";
                        /*  state.isLoading = false; */
                       })
                       .addCase(updateIssueToServerFaculty.pending, (state) => {
                        /*  state.isLoading = true; */
                       })
                       .addCase(updateIssueToServerFaculty.rejected, (state, action) => {
                         state.error = action.payload.error;
                       /*   state.isLoading = false; */
                 
                 
                       })
                
                       .addCase(removeIssueFromServerFaculty.pending, (state) => {})
                       .addCase(removeIssueFromServerFaculty.fulfilled, (state, action) => {
                         state.issuesListFaculty = state.issuesListFaculty.filter(
                             (issuefaculty) => issuefaculty.id !== action.payload.id
                           );
                         state.error = "";
                       })
                       .addCase(removeIssueFromServerFaculty.rejected, (state, action) => {
                         state.error = action.payload.error; 
                       })
                
                
                },


            });

       
            
            export const {addIssueFaculty,removeUserFaculty,updateIssueFaculty,setSelectedIssueFaculty}   =     issueSliceFaculty.actions;  
            export const {error } = issueSliceFaculty;
            export default issueSliceFaculty.reducer;