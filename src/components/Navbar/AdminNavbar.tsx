import BraineLogo from "../../assets/images/logo-braine.svg";

import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import { MdNotificationsActive, MdOutlineMessage } from "react-icons/md";

const AdminNavbar = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Link to={"/"}>
          <Navbar.Brand as={"span"}>
            <img
              src={BraineLogo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Admin
            </span>
          </Navbar.Brand>
        </Link>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">John Doe</span>
              <span className="block truncate text-sm font-medium">
                john@email.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
            className="flex items-center justify-center gap-1"
          >
            <MdNotificationsActive size={20} />
            Notifications
          </Navbar.Link>
          <Navbar.Link
            href="/navbars"
            className="flex items-center justify-center gap-1"
          >
            <MdOutlineMessage size={20} />
            Messages
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
