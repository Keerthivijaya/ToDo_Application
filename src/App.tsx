import { BrowserRouter, Route, Switch } from "react-router-dom"

import Header from "./Component/Header";
import { Container } from "react-bootstrap";
import Todo from "./Component/Todo";
import ListOfTodos from "./Component/ListOfTodos";
import Footer from "./Component/Footer";

function App(){
  return(
   <>
   
   <BrowserRouter>
  
      <Header />
    
      <Container>
      <Switch>

        <Route exact path='/add-todo'><Todo /></Route>
        <Route exact  path='/edit-todo/:id'><Todo /></Route>
     
<Route exact path='/'><ListOfTodos/></Route>


      </Switch>
      </Container>
    </BrowserRouter>
<Footer/>
    </>
  );
}
export default App;