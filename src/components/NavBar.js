import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
      const onUpdateActiveLink= (value)=>{
        setActiveLink(value);
      }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('skilss')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yassine-jerbi-bb6130256/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="social-icon-1" />
              </a>
              <a href="https://www.facebook.com/yassine.jerbi.779"target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="social-icon-2" />
              </a>
              <a href="https://www.instagram.com/yecine_jerbi9/"target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="social-icon-3" />
              </a>
            </div>
            
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
