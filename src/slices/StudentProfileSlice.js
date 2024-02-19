import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState={
    
    profileList:[],
    selectedUser:{},
    isLoading:false,         
    error:null
}

    
const BASE_URL="http://localhost:5000/studentprofile"

export const getUserFromServer= createAsyncThunk(
    "studentprofile/getUserFromServer",
    
    async(_,{rejectWithValue})=>{
        const response=await fetch(BASE_URL)
        if(response.ok){
            const jsonResponse=await response.json()
            console.log(jsonResponse)
            return jsonResponse
        }
        else{
            return rejectWithValue({error:'user not found'})
        }
    }
)         



//post(add)
export const addUserToServer = createAsyncThunk(
    "studentprofile/addUserToServer",
    async ( profilestud,{rejectWithValue }) => {
      const options ={
          method:"POST",
          body:JSON.stringify(profilestud),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("http://localhost:5000/studentprofile/",options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in user addition" });
      }
    }
    );

                

 //PUT
 
 export const updateUserToServer = createAsyncThunk(
    "studentprofile/updateUserToServer",
    async ( profilestud,{rejectWithValue }) => {
      const options ={
          method:"PATCH",
          body:JSON.stringify(profilestud),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("http://localhost:5000/studentprofile/"+profilestud.id,options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in Issue UPDATE" });
      }
    }
    );


    export const removeUserFromServer = createAsyncThunk(
        "studentprofile/removeUserFromServer",
        async ( profilestud,{rejectWithValue }) => {
          const options ={
              method:"DELETE",
              body:JSON.stringify(profilestud),
              headers:{"content-type":"application/json;charset=UTF-8"},
          }
              const response = await fetch("http://localhost:5000/studentprofile/"+profilestud.id,options);
          if (response.ok) {
            const data = response.json();
            return data;
          } 
        }
        );





const studUserSlice = createSlice({

    name:'studUserSlice',
    initialState,
    reducers:{



        addUserStud: (state, action) => {
            const id = Math.random() * 100;
            let newIssue = { ...action.payload, id };
            state.profileList.push(newIssue);
          },


          removeUserStud: (state, action) => {
            state.profileList = state.profileList.filter(
              (profilestud) => profilestud.id !== action.payload.id
            );
          },

          updateUserStud: (state, action) => {
            state.profileList = state.profileList.map((profilestud) =>
              profilestud.id === action.payload.id ? action.payload : profilestud
            );
          },


          setSelectedUserStud: (state, action) => {
            state.selectedUser = action.payload;
          },




            //FACULTY REDUCER


            

      /*     setSelectedIssueFaculty: (state, action) => {
            state.selectedField = action.payload;
          }
 */

        

    },




    extraReducers:(builder)=>{
        builder
        // GET
        .addCase(getUserFromServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getUserFromServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=''
            state.profileList = action.payload
        })
        .addCase(getUserFromServer.rejected,(state,action)=>{
            state.error=action.payload.error
            state.isLoading=false
            state.profileList=[]
        })

        
        .addCase(addUserToServer.pending, (state) => {})
      .addCase(addUserToServer.fulfilled, (state, action) => {
        state.profileList.push(action.payload);
        state.error = "";
      })
      .addCase(addUserToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        
      })


       .addCase(updateUserToServer.fulfilled, (state, action) => {
       /*  const updatedIssue = action.payload; */
        state.profileList = state.profileList.map((profilestud) =>
          profilestud.id === action.payload.id ? action.payload : profilestud
        );
        state.error = "";
       /*  state.isLoading = false; */
      })
      .addCase(updateUserToServer.pending, (state) => {
       /*  state.isLoading = true; */
      })
      .addCase(updateUserToServer.rejected, (state, action) => {
        state.error = action.payload.error;
      /*   state.isLoading = false; */


      })

      .addCase(removeUserFromServer.pending, (state) => {})
      .addCase(removeUserFromServer.fulfilled, (state, action) => {
        state.profileList = state.profileList.filter(
            (profilestud) => profilestud.id !== action.payload.id
          );
        state.error = "";
      })
      .addCase(removeUserFromServer.rejected, (state, action) => {
        state.error = action.payload.error; 
      })

   





    
    },
}



);




 export const {addUserStud,removeUserStud,updateUserStud,setSelectedUserStud} = studUserSlice.actions ;
 export const { error } = studUserSlice;
export default studUserSlice.reducer;

