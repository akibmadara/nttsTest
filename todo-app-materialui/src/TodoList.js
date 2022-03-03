import React,{useState} from "react";
import Button from "@mui/material/Button"
import AddIcon from '@mui/icons-material/Add';
import LisDel from "./ListDel";

const TodoList = () => {
    const [item,setItem] = useState("");
    const [newItem, setNewItem]=  useState([]);
    const itemEvent = (event) =>{
        setItem(event.target.value)
    }

    const listItem=()=>{
        setNewItem ((oldValue)=>{
            return [...oldValue,item]
        });

        setItem(" ");
        
    };

    return(
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDoList</h1>
                <br/>
                <input type="text" value={item} placeholder="Add an Item" onChange={itemEvent} />
                <Button className="newbtn" onClick={listItem} >
                    <AddIcon/>
                </Button>
                <br/>
                <ol>
                    {newItem.map((val)=>{
                        return <LisDel text={val}/>
                    })}
                </ol>
                <br/>
            </div>
            </div>
    )
}

export default TodoList;