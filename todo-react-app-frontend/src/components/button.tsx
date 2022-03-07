import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import 'antd-button-color/dist/css/style.css';
import 'antd/dist/antd.css'




interface buttonProps {    
    btn_name : string;
    onClick ?:() => void;
    type ?: any;
    ghost3 ?: any;
    disabled ?: boolean;
}

const  Button_model: React.FC<buttonProps> = ({btn_name, onClick , type ="primary" ,ghost3 ,disabled = false}:buttonProps) => {
  return <div>
      <Button type={type} onClick={onClick} ghost ={ghost3}  disabled = {disabled}>{btn_name} </Button>
  </div>;
};

export default Button_model;
