import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';



    interface btn{   //maade for check wheather the ffirect funtion calling is possible or not within components
        name : string;
        onClick ():  void;
    }

const btn_compo : React.FC<btn> = ({name, onClick}) => {

    
  return <div>
      <Button type="primary" onClick={onClick}>{name}</Button>
  </div>;
}



export default btn_compo;
