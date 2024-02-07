import { FormEvent, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { createTodo, getTodoById, updateTodo } from "../Services/TodoServices";
interface RouteParams{
    id:string;
}
type todo={
   
    title:string,
    description:string,
    status:string
}

const Todo:React.FC=()=>{

    const [title, settitle] = useState('');
        const [description, setdescription] = useState('');
        const [status, setStatus] = useState<string>('Yes');
        const {id} = useParams<RouteParams>();
        
        const history = useHistory();

        useEffect(() => {

            getTodoById(Number(id)).then((response) => {
              settitle(response.data.title);
              setdescription(response.data.description);
              setStatus(response.data.status);
            }).catch(error => {
              console.error(error);
            })
        
          }, [id])

          function saveOrUpdateTodo(e:FormEvent){
           e.preventDefault();
        
            const todo = { title, description ,status};
        
          
        
            if(id){
              updateTodo(Number(id), todo).then((response) => {
              
                history.push('/');
              }).catch(error => {
                console.error(error);
              })
            }else {
              createTodo(todo).then(() => {
             
                history.push('/')
              }).catch(error => {
                console.error(error);
              })
            }
        
          }
          function pageTitle(){
            if(id){
                return <h2 className='text-center'>Update TODO</h2>
            } else {
                return <h2 className='text-center'>Add Todo</h2>
            }
          }

    return(

    <>
    <div className='container'><br /><br />
      <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
              {
                pageTitle()
              }

              <div className='card-body'>
                  <form>
                      <div className='form-group mb-2'>
                          <label className='form-label'>Todo Title:</label>
                          <input
                            type='text'
                            name='title'
                            placeholder='Enter Todo Title'
                            className='form-control'
                            value={title}
                            onChange={(e) => settitle(e.target.value)}

                          >
                          </input>
                      </div>

                      <div className='form-group mb-2'>
                          <label className='form-label'>Todo Description:</label>
                          <input
                            type='text'
                            name='description'
                            placeholder='Enter Todo Description'
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                            className='form-control'
                          >
                          </input>
                      </div>
                      <div className='form-group mb-2'>
                          <label className='form-label'>Todo Completed:</label>
                          <input
                            type='text'
                            name='completed'
                            placeholder='Enter Todo Completed'
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className='form-control'
                          >
                          </input>
                      </div>
                      <button className='btn btn-success mb-2' onClick={(e) => saveOrUpdateTodo(e)}>Submit</button>
                  </form>

              </div>
          </div>

      </div>

    </div>
    </>
)

}
export default Todo;


