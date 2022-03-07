import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import FormField from '../components/form';
import TaskShowC from '../components/task/TaskShowC';
import TaskMoDL from '../model/Taskmodel';
import { useAppSelector } from '../reducer/store';
import { useAppDispatch } from '../reducer/store';
import { getTaskList } from '../reducer/TaskSlice';

const ViewToDo = () => {

  const taskList = useAppSelector( (state) => state.task.tasks);
  const dispatcher = useAppDispatch();

  const onComplete = (task : TaskMoDL) => {
    // dispatcher(markAsDone(task))
    // setTaskName(listy);
  }

  useEffect(() => {
    dispatcher(getTaskList())
  },[dispatcher]);

  return <>
      
       
      <h1 style={{textAlign: 'center',color: '#28B463',marginBottom:"50px",marginTop : "30px"}}>Waiting patient's List</h1>  
      
      //use boootstrap card
      <ul className="off-bullets">
      {taskList.map((task,i) => 
        <div key={i} >
            <TaskShowC task= {task} onComplete={ () => {onComplete(task)}} /> 
        </div>
      )}
      </ul>  
  </>
};

export default ViewToDo;
