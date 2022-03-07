import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import TaskMoDL from '../model/Taskmodel';

interface TaskState {
    tasks : TaskMoDL[],
    loading : boolean,
    error : boolean
}

const  initialState : TaskState = {
    tasks : [],
    loading : false,
    error : false
};

export const getTaskList = createAsyncThunk("task/get", async () => {
    const res = await axios.get(`http://localhost:8070/tasks/`);
    console.log(res.data, 'get data')
    return res.data;
});

export const addTask = createAsyncThunk("task/add", async (newTask : TaskMoDL) => {
    const res = await axios.post(`http://localhost:8070/tasks/add`,newTask);
    return res.data;
});

export const editTask = createAsyncThunk("task/update", async (task: TaskMoDL) => {
    await axios.post(`http://localhost:8070/tasks/update/${task._id}`, task);
    console.log(task,'this is task')
    return task;
});

export const deleteTask = createAsyncThunk("task/delete", async (id: string) => {
    await axios.delete(`http://localhost:8070/tasks/delete/${id}`);
    return id;
});
const taskSlice = createSlice( {
    name : "tasks",
    initialState,
    reducers :{
        // addNewTask : (state,action:PayloadAction<TaskMoDL>) => {
        //     state.tasks = [action.payload, ...state.tasks]
        // },
        // markAsDone : (state, action:PayloadAction<TaskMoDL>) => {
        // const task = action.payload
        // const list = state.tasks.map( (te) =>  task.date === te.date ? {...te, done :true}:te);
        // state.tasks = list;
        // }
        
    },
    extraReducers  :(builder) => {
        //get task
        builder.addCase(getTaskList.pending, state => {
            state.loading = true;
        });

        builder.addCase(getTaskList.fulfilled, (state, { payload }) => {

            state.tasks = payload;
        });
        builder.addCase(getTaskList.rejected, state => {
            state.loading = false;
            state.error = true;
        });
        //add task
        builder.addCase(addTask.pending, state => {
            state.loading = true;
        });

        builder.addCase(addTask.fulfilled, (state, { payload }) => {
            

            // state.tasks = payload;
        });
        builder.addCase(addTask.rejected, state => {
            state.loading = false;
            state.error = true;
        });
        //edit task
        builder.addCase(editTask.pending, state => {
            state.loading = true;
        });

        builder.addCase(editTask.fulfilled, (state, { payload }) => {
            let taskIndex = state.tasks.findIndex(task => task._id === payload._id);
            const newtaskList = state.tasks;
            newtaskList[taskIndex].Tname = payload.Tname;
            state.tasks[taskIndex].Tname = payload.Tname;
            // state.tasks = payload;
        });
        builder.addCase(editTask.rejected, state => {
            state.loading = false;
            state.error = true;
        });
        //delete task
        builder.addCase(deleteTask.pending, state => {
            state.loading = true;
        });

        builder.addCase(deleteTask.fulfilled, (state, { payload }) => {
            const newtaskList = state.tasks.filter(task => {return task._id !== payload });
            state.tasks =  newtaskList;
            // state.tasks = payload;
        });
        builder.addCase(deleteTask.rejected, state => {
            state.loading = false;
            state.error = true;
        });
        

    }

})
// export  const {addNewTask ,markAsDone} = taskSlice.actions;

export default taskSlice.reducer;