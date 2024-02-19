import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState={
    
    issuesList:[],
    selectedField:{},                                          
    isLoading:false,
    error:null
}


const BASE_URL="http://localhost:5000/issues/"

export const getIssuesFromServer= createAsyncThunk(
    "issues/getIssuesFromServer",
    
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



 //PUT
 
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
  
//FACULTY ASUYNCTHRUNK

/* 
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
 */




const issueSlice = createSlice({

    name:'issueSlice',
    initialState,
    reducers:{



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




            //FACULTY REDUCER


            
/* 
          setSelectedIssueFaculty: (state, action) => {
            state.selectedField = action.payload;
          } */


        

    },




    extraReducers:(builder)=>{
        builder
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

   


      //FACULTY EXTRATHRUNK

     /*  .addCase(getIssuesFromServerFaculty.pending,(state)=>{
        state.isLoading=true
    })
    .addCase(getIssuesFromServerFaculty.fulfilled,(state,action)=>{
        state.isLoading=false
        state.error=''
        state.issuesList = action.payload
    })
    .addCase(getIssuesFromServerFaculty.rejected,(state,action)=>{
        state.error=action.payload.error
        state.isLoading=false
        state.issuesList=[]
    })


      
    .addCase(addIssueToServerFaculty.pending, (state) => {})
    .addCase(addIssueToServerFaculty.fulfilled, (state, action) => {
      state.issuesList.push(action.payload);
      state.error = "";
    })
    .addCase(addIssueToServerFaculty.rejected, (state, action) => {
      state.error = action.payload.error;
      
    })


    .addCase(updateIssueToServerFaculty.fulfilled, (state, action) => {
        
         state.issuesList = state.issuesList.map((issuefaculty) =>
         issuefaculty.id === action.payload.id ? action.payload : issuefaculty
         );
         state.error = "";
       
       })
       .addCase(updateIssueToServerFaculty.pending, (state) => {
     
       })
       .addCase(updateIssueToServerFaculty.rejected, (state, action) => {
         state.error = action.payload.error;
      
 
 
       })

       .addCase(removeIssueFromServerFaculty.pending, (state) => {})
       .addCase(removeIssueFromServerFaculty.fulfilled, (state, action) => {
         state.issuesList = state.issuesList.filter(
             (issuefaculty) => issuefaculty.id !== action.payload.id
           );
         state.error = "";
       })
       .addCase(removeIssueFromServerFaculty.rejected, (state, action) => {
         state.error = action.payload.error; 
       }) */



    
    },
}



);




 export const {addIssue,updateIssue,removeUser,setSelectedIssue,/* setSelectedIssueFaculty */} = issueSlice.actions ;
 export const { error } = issueSlice;
export default issueSlice.reducer;

