import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import 'antd/dist/antd.css';

import FormField from '../components/form';

import Button_model from '../components/button';
import 'antd-button-color/dist/css/style.css';
import 'antd/dist/antd.css'
import { useAppDispatch } from '../reducer/store';
import {  addTask } from '../reducer/TaskSlice';
import TaskMoDL from '../model/Taskmodel';
import { DatePicker, Space } from 'antd';






function addToDo() {
  const [task , setTask] = useState('');
  const [newTask , setnewTask] = useState<TaskMoDL>({
      Tname : '',
      date : new Date(),
      done : false,
      _id: ''
  })

  useEffect(() => {
    setnewTask( {
      Tname : task,
      date : new Date(),
      done : false,
      _id: ''
    }) 
    
  }, [task]);
  
  const dispatcher = useAppDispatch();
  function List () { 
    
    dispatcher(addTask( newTask ));
    
  }
  function dateF() {
    console.log();
  }
 

return (
  <div>
    <>
      <h1 style={{ textAlign: "center", color: "#28B463" }}>Be healthy</h1>
      <br></br>
      <br></br>
      <FormField
        inputLabel="Patient's Name "
        placeholder="Type here"
        afterKeyword="Please Wait while ur order is Completed"
        onChange={(e) => {
          setTask(e);
        }}
      />
      <Space direction="vertical" >
        <DatePicker />
      </Space>
      
      <Button_model btn_name="Add" onClick={List} />
    </>
  </div>
);
}

export default addToDo;
