import { useEffect, useState } from "react";
import { completeTodo, deleteTodo, getAllTodos, incompleteTodo } from "../Services/TodoServices";
import Table from 'react-bootstrap/Table';
import { Link, useHistory } from "react-router-dom";
import {Button} from "react-bootstrap";
import { error } from "console";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { Prev } from "react-bootstrap/esm/PageItem";



type Todo={
    id:number;
    title:string;
    description:string;
   status:string;
};

const ListOfTodos=()=>{
    const history=useHistory();
    const [todos,settodos]=useState<Todo[]>([]);

 
 
     const ListTodos=()=>{
         getAllTodos().then((response)=>{
             settodos(response.data)

         }).catch((error)=>{
             console.log(error);
         })
     }
     useEffect(()=>ListTodos(),[])
    const addTodo=(id:number)=>{
      history.push(`/add-todo`)
    }
    const updateTodo=(id: number)=>{
        history.push(`/edit-todo/${id}`);
     }  
    const removeTodo=(id: number)=>{
        deleteTodo(id).then(()=>ListTodos()).catch((error)=>console.log(error));
    
     }
 // const [todoComplete,settodoComplete]=useState('');
    const completedTodo = (id:number) => {

            completeTodo(id).then((response)=>ListTodos())
        
       .catch((error)=>{
        console.log(error);
       })
      };
    
      const incompletedTodo = (id:number) => {
        incompleteTodo(id).then((response)=>ListTodos())
        .catch((error)=>console.log(error));
    
      }; 
       
     
    return(
<>
<h2 className='text-center'>List Of Todos</h2>


<br>
</br>
<Link to='/add-todo' className='btn btn-primary mb-2'>Add Todo</Link>
<Table striped bordered hover>
    <thead>
        <tr>
            <th>Todo ID</th>
            <th>Todo Title</th>
            <th>Todo Description</th>
            <th>Todo Completed</th>
            <th >Actions</th>
        </tr>
    </thead>
    <tbody>
        {todos.map((todo) => (
         
            <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.status?'Yes':'No'}</td>
              <td>
            <Button onClick={()=>updateTodo(todo.id)} variant="primary">Update</Button>{''}  
                <Button onClick={()=>removeTodo(todo.id)} variant="danger" >Delete</Button>{''}  
              
              
                   <Button variant="success" onClick={()=>completedTodo(todo.id)}
                  >
                    complete
                  </Button>
              
                  <Button variant="warning"
                    onClick={()=>incompletedTodo(todo.id)}
                  >
                    InComplete
                  </Button> 
                  
              </td>
            </tr>
        ))}
    </tbody>
</Table>
</>
    );
}

export default ListOfTodos;
