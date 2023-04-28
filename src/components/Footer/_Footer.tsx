import { Footer } from "flowbite-react";
import _Container from "../Others/_Container";
import BraineLogo from "../../assets/images/logo-braine.svg";
import { Link } from "react-router-dom";
const _Footer = () => {
  const year = new Date().getFullYear();
  return (
    <_Container>
      <Footer container={true}>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="/"
              src={BraineLogo}
              alt="Flowbite Logo"
              name=""
            />
            <Footer.LinkGroup>
              <Footer.Link as={"span"} href="" className="mr-2">
                FAQ
              </Footer.Link>
              <Footer.Link as={"span"} href="" className="mr-2">
                <Link to={"/about"}>A Propos</Link>
              </Footer.Link>
              <Footer.Link as={"span"} href="" className="mr-2">
                <Link to={"/contact"}>Contact</Link>
              </Footer.Link>
              <Footer.Link as={"span"} href="" className="mr-2">
                <Link to={"/terms"}>Conditions Générales</Link>
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="/" by="Braine Trust" year={year} />
        </div>
      </Footer>
    </_Container>
  );
};

export default _Footer;
