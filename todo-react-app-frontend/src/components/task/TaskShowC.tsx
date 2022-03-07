import { Button, Card, Input } from 'antd';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import TaskMoDL from '../../model/Taskmodel';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'antd-button-color/dist/css/style.css'; 
import Button_model from '../button';
import { useAppDispatch } from '../../reducer/store';
import { deleteTask, editTask, getTaskList } from '../../reducer/TaskSlice';
import FormField from '../form';

interface taskPro1 {
    task : TaskMoDL;
    onComplete:() => void;
} 



const TaskShowC: React.FC<taskPro1> = ({task,onComplete}) => {
  const [isEditable,setisEditable] = useState<boolean>(false);
  const dispatcher = useAppDispatch();
  const [editTaskValue,setEditTaskValue] = useState<string>('');
  const [EditTask ,seteditTask] = useState<TaskMoDL>({
    Tname : editTaskValue,
    date : new Date(),
    done : false,
    _id: task._id
  });

  // useEffect(() => {
  //   seteditTask({
  //     ...task,
  //     Tname : editTaskValue,
  //     date : new Date(),
      
  //   },[editTaskValue,task]);
  
  // }, [task]);
  useEffect(()=> {
    seteditTask({
          Tname: editTaskValue,
          _id: task._id
      })
  },[task,editTaskValue]);







  


    useLayoutEffect(()=>{
      setEditTaskValue(task.Tname);
    },[task.Tname]);
    

  const onClickEdit = () => {
    setisEditable(true);
  };

  const onClickDelete = () => {
    dispatcher(deleteTask(task._id))
  };

  const handleEdit = () => {
    dispatcher(editTask(EditTask));
    setisEditable(false);
  };
  // display:'flex', alignItems: 'center', justifyContent: 'space-between'
  return <div>
    
    <Card type="inner" className='container' style={{ background : task.done ? "#28a745" : "" , }}>
    { !isEditable 
      ?<div>
          <h4>{task.Tname}</h4>
          <h5>{task.date}</h5>
          </div>
      :<div>
        <Input placeholder='type here' onChange={(e)=>setEditTaskValue(e.target.value)} value={editTaskValue}  />  
        <Button type="primary" shape="round" style={{marginLeft : "20px" ,background : "#F4D03F" ,border : 'none'}} onClick ={handleEdit}> Update</Button>
      </div>
    }
    {/* <div id="done_btn">
     <Button_model btn_name='Done'  disabled={task.done} ghost3={true}  onClick={onComplete} />
    </div> */}
    <div className="btn_set">
     <Button disabled={isEditable} type="primary" shape="round" style={{marginLeft : "20px" ,background : "#F4D03F" ,border : 'none'}} onClick ={onClickEdit}> Edit</Button>
     <Button type="primary" shape="round" style={{marginLeft : "20px" , background : '#C70039',border : 'none'}} onClick ={onClickDelete} > Delete</Button>

    </div>
    </Card>

  </div>;
};

export default TaskShowC;