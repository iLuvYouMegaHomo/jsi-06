import React from 'react';
import TodoItem from './todoItem.js';
import todos from './constants/mockData.js'

const TodoLists = () =>{
   return(
        <div>
            {
            todos.map((todo) => {
               return( <TodoItem todo={todo} key={todo.id} />)
            })
            }
        </div>
   ) 
} 

export default TodoLists;