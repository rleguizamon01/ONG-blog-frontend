import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link, NavLink, useHistory} from "react-router-dom";

const Header = () => {
  let history = useHistory();

  const user = JSON.parse(localStorage.getItem('user-info'));

  function logOut()
  {
    localStorage.clear();
    history.push("/register");
  }
  
  return (
    <header className="header">
      {/* <!-- Main Navbar--> */}
      <Navbar expand="lg">
        {/* <!-- Navbar Brand --> */}
        <Link to="/">
          <Navbar.Brand>ONG Team</Navbar.Brand>
        </Link>
        {/* <!-- Toggle Button--> */}
        <Navbar.Toggle aria-controls="navbarcollapse"/>
        {/* <!-- Navbar Menu --> */}
        <Navbar.Collapse id="navbarcollapse">
          <Nav className="ml-auto align-items-center">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/volunteers/create">Voluntariado</NavLink>
            <NavLink to="/donations/create">Donar</NavLink>
          </Nav>
          <Nav>
            {localStorage.getItem('user-info') && user.role==="admin" 
            ?
            <NavDropdown title="Admin" id="collasible-nav-dropdown">
              <NavLink to="/admin/posts">Posts</NavLink>
              {/* <NavLink to="/admin/voluntarios">Voluntarios</NavLink>
              <NavLink to="/admin/comentarios">Comentarios</NavLink>
              <NavLink to="/admin/categorias">Categorias</NavLink>
              <NavLink to="/admin/suscriptores">Suscriptores</NavLink>
              <NavLink to="/admin/donaciones">Donaciones</NavLink> */}
            </NavDropdown>
            :<></>
          }
          </Nav>
          {localStorage.getItem('user-info')
          ? 
          <Nav>
            <NavDropdown title={localStorage.getItem('user-info')&&user.first_name} >
              <NavDropdown.Item onClick={logOut}>Salir</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :
          <Nav>
            <NavLink to="/login">Ingresar</NavLink>
            <NavLink to="/register">Registrarse</NavLink>
          </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
export default Header