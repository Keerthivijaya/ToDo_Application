import { Navbar, Container } from "react-bootstrap";

const Footer:React.FC=()=>{
    return(
        <><Navbar bg="dark"
        variant="dark"
        className="fixed-bottom d-flex justify-content-center align-items-center"
        style={{ padding: "0px" }} >
      <Container className="text-center" style={{ maxWidth: "20%" }}>
          <Navbar.Brand>copyrights reserved</Navbar.Brand>

          </Container>
       
      </Navbar>
      
 
     </>

    );
  }
export default Footer;  