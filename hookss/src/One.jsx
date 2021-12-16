import React,{useEffect, useState} from "react";

export const One=()=>
{
   const[values,setValues] = useState([])

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setValues([json]))
   },[  ])

    return(
        <div>
            {
                values.map(e=> <h1>
                    {
                    e.title
                    }
                </h1>)
            }
       
        </div>
    )
}
