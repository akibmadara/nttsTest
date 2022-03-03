import React, {useState} from "react";
const EventTask= ()=> {
    const [name,setName]= useState("Akib");
    return(

        <div>
            {name}
        <button onClick={()=>setName("Momin")}>Click Here</button>
        </div>

    );

}

export default EventTask;