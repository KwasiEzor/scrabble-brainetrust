import { Navbar, Dropdown } from "flowbite-react";
import _Container from "../Others/_Container";
import BraineLogo from "../../assets/images/logo-braine.svg";
import { NavLink } from "react-router-dom";
const _Navbar = () => {
  const user = true;
  return (
    <_Container>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand as={"span"} to="/navbars">
          <NavLink to={"/"}>
            <img src={BraineLogo} className="mr-3 h-12" alt="Braine Logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={"span"} active={true}>
            <NavLink to={"/"}>Accueil</NavLink>
          </Navbar.Link>
          <Navbar.Link as={"span"}>
            <NavLink to={"/agenda"}>Agenda</NavLink>
          </Navbar.Link>
          <Navbar.Link as={"span"}>
            <NavLink to={"/scrabble"}>Scrabble</NavLink>
          </Navbar.Link>
          <Navbar.Link as={"span"}>
            <Dropdown label="Club" inline={true}>
              <Dropdown.Item>
                <NavLink to={"/about"}>Braine Trust?</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to={"/members"}>Membres</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to={"/clubs"}>Liste des clubs</NavLink>
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link as={"span"}>
            <NavLink to={"/games"}>Parties</NavLink>
          </Navbar.Link>
          <Navbar.Link as={"span"}>
            <NavLink to={"/blog"}>Blog</NavLink>
          </Navbar.Link>
          <Navbar.Link as={"span"}>
            <NavLink to={"/contact"}>Contact</NavLink>
          </Navbar.Link>
          <Navbar.Link as={"span"}>
            <NavLink to={"/login"}>Se connecter</NavLink>
          </Navbar.Link>
          <Navbar.Link as={"span"}>
            <NavLink
              to={"/register"}
              className={`bg-gradient-to-r from-yellow-400 to-yellow-300 px-3 py-1 rounded-lg`}
            >
              S'inscrire
            </NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </_Container>
  );
};

export default _Navbar;
