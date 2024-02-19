import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState={

      taskAssign:[],
      selectedFieldTask:{},
      isLoading:false,
      error:null

}     



export const getTaskFromServer= createAsyncThunk(
    "assigntask/getTaskFromServer",
    async(_,{rejectWithValue})=>{
        const response=await fetch("http://localhost:5000/assigntask/")
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





export const addTaskToServer = createAsyncThunk(
    "assigntask/addTaskToServer",
    async ( task,{rejectWithValue }) => {
      const options ={
          method:"POST",
          body:JSON.stringify(task),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("http://localhost:5000/assigntask/",options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in user addition" });
      }
    }
    );



    export const updateTaskToServer = createAsyncThunk(
        "assigntask/updateTaskToServer",
        async ( task,{rejectWithValue }) => {
          const options ={
              method:"PATCH",
              body:JSON.stringify(task),
              headers:{"content-type":"application/json;charset=UTF-8"},
          }
              const response = await fetch("http://localhost:5000/assigntask/"+task.id,options);
          if (response.ok) {
            const data = response.json();
            return data;
          } else {
            return rejectWithValue({ error: "Something Went Wrong in Issue UPDATE" });
          }
        }
        );



        export const removeTaskFromServer = createAsyncThunk(
            "assigntask/removeTaskFromServer",
            async ( task,{rejectWithValue }) => {
              const options ={
                  method:"DELETE",
                  body:JSON.stringify(task),
                  headers:{"content-type":"application/json;charset=UTF-8"},
              }
                  const response = await fetch("http://localhost:5000/assigntask/"+task.id,options);
              if (response.ok) {
                const data = response.json();
                return data;
              } 
            }
            );
      




const taskSlice = createSlice({

    name:'taskSlice',
    initialState,
    reducers:{

        addTask: (state, action) => {
            const id = Math.random() * 100;
            let newIssue = { ...action.payload, id };
            state.taskAssign.push(newIssue);
          },


          removeTask: (state, action) => {
            state.taskAssign = state.taskAssign.filter(
              (task) => task.id !== action.payload.id
            );
          },

          updateTask: (state, action) => {
            state.taskAssign = state.taskAssign.map((task) =>
            task.id === action.payload.id ? action.payload : task
            );
          },


          setSelectedTask: (state, action) => {
            state.selectedFieldTask = action.payload;
          }
    },


    extraReducers:(builder)=>{
        builder

        .addCase(getTaskFromServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getTaskFromServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=''
            state.taskAssign = action.payload
        })
        .addCase(getTaskFromServer.rejected,(state,action)=>{
            state.error=action.payload.error
            state.isLoading=false
            state.taskAssign=[]
        })


        .addCase(addTaskToServer.pending, (state) => {})
      .addCase(addTaskToServer.fulfilled, (state, action) => {
        state.taskAssign.push(action.payload);
        state.error = "";
      })
      .addCase(addTaskToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        
      })

      .addCase(updateTaskToServer.fulfilled, (state, action) => {
        /*  const updatedIssue = action.payload; */
         state.taskAssign = state.taskAssign.map((task) =>
         task.id === action.payload.id ? action.payload : task
         );
         state.error = "";
        /*  state.isLoading = false; */
       })
       .addCase(updateTaskToServer.pending, (state) => {
        /*  state.isLoading = true; */
       })
       .addCase(updateTaskToServer.rejected, (state, action) => {
         state.error = action.payload.error;
       /*   state.isLoading = false; */
 
 
       })

       .addCase(removeTaskFromServer.pending, (state) => {})
      .addCase(removeTaskFromServer.fulfilled, (state, action) => {
        state.taskAssign = state.taskAssign.filter(
            (task) => task.id !== action.payload.id
          );
        state.error = "";
      })
      .addCase(removeTaskFromServer.rejected, (state, action) => {
        state.error = action.payload.error; 
      })
    

    },
});


export const {addTask,updateTask,removeTask,setSelectedTask} = taskSlice.actions ;
//export const { error } = taskSlice;
export default taskSlice.reducer;

