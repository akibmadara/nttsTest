import React,{useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const LisDel =(props)=>{
    const [line,setLine]= useState(false);


    const delItem=()=>{
        setLine (true);
    };

    return (
    <div className="todo_style">
        <span onClick={delItem}> <DeleteIcon className="deleticon"/></span>

        <li style={{textDecoration: line ? "line-through" :  "none"}}>{props.text}</li>
    </div>
    )
};

export default LisDel;