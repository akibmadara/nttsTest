import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Component/Loading';
import TodosList from './Component/TodosList';
function App() {

  const [todos,setTodos]=useState(null);

  useEffect(()=>{
    
    // Axios.get("http://localhost:3500/posts").then((response)=>{
    //   console.log(response.data);
    //   setTodos(response.data)

    fetch("http://localhost:3500/posts")
    .then((response)=>response.json())
    .then((data)=>{
        setTodos(data)
      });
},[]);
  return (
   
    <div>
      {todos ? <TodosList todos={todos}/> :<Loading/>}
      
    </div>);

}

export default App;
