import React, { useState } from 'react'

const TodoInput = () =>{
    const addTodo = () =>{
        console.log("heloo ")
    }

    console.log(useState())
   
    const [] 

    const incrementCount = () => {
        setCurrentCount(currentCount + 1);
    }

    const handleChange = (event) => {
        console.log(event.target.value)
    }
   return(
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={addTodo}>Add</button>
        </div>
   ) 
}

export default TodoInput