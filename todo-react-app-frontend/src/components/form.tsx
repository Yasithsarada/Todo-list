import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Placeholder } from 'react-bootstrap';

interface TextFieldProps {
    inputLabel : string;
    placeholder :string;
    afterKeyword ?:string;
    onChange :(e : string) => void;
    value ?:string;
}

// const onChangeText = (e) => {
//   onChange(e.target.value)
// } 

const FormField: React.FC<TextFieldProps> =  ({inputLabel , placeholder , afterKeyword , onChange,value} : TextFieldProps) => {
  return <div>
     <div className='container' style = {{width : "60%" , float : "left" ,marginLeft : "auto" , marginRight : "auto"}}>
      <Form.Item
      label={inputLabel}
      name="username"
       >
      <Input placeholder={placeholder} onChange={(e) => {onChange(e.target.value)}} value={value}  />   
    </Form.Item>
    {afterKeyword  && <label > {afterKeyword}</label>}
    
    </div>   
  </div>;
};
export default FormField;

