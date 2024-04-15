import { useState } from "react";

function State(){
    const[city,setCity]=useState("Hyderabad")

    return(
        <div>
            <h1>{city}</h1>
            <button onClick={()=>setCity("Hyderabad")}>Hyderabad</button>
            <button onClick={()=>setCity("Chennai")}>Chennai</button>
        </div>
    )
}

export default State