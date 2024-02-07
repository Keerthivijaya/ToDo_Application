import { Container, Navbar } from "react-bootstrap";
import ListOfTodos from "./ListOfTodos";

const Header:React.FC=()=>{
    return(
        <><Navbar bg="dark" data-bs-theme="dark" style={{padding:"0px"}}>
        <Container style={{marginLeft:"0px"}}>
          <Navbar.Brand>TODO MANAGEMENT APPLICATION</Navbar.Brand>

        </Container>
       
      </Navbar>
      
 
     </>

    );
  }
export default Header;     
    
