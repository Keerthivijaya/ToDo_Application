import axios from 'axios';
const baseUrl="http://localhost:8080/api/todos";
export const createTodo=(todo:any)=>axios.post(baseUrl,todo);
export const getAllTodos=()=>axios.get(baseUrl);
export const updateTodo=(id:number,todo:any)=>axios.put(baseUrl+"/"+id,todo);
export const getTodoById=(id:number)=>axios.get(baseUrl+"/"+id);
export const deleteTodo=(id:number)=>axios.delete(baseUrl+"/"+id);
export const completeTodo = (id:number) => axios.put(baseUrl+"/completeTodo/"+id);
  
  export const incompleteTodo = (id:number)=>axios.put(baseUrl+"/incompleteTodo/"+id);