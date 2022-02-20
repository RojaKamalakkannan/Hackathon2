import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';


function AppBar(){
  return(
    <div>
     <Navbar variant="dark" bg="primary" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home" align="center">MONEY MANAGER DASHBOARD</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav >
        <NavDropdown 
          id="nav-dropdown-dark-example"
          title="INCOME AND EXPENDITURE"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Month wise income and Expenditure</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">weekly wise income and Expenditure</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">yearly wise income and Expenditure</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">History of income and Expenditure</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar><br/>




    </div>
  )
}
export default AppBar;



