import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiTable,
  HiUsers,
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";

import React from "react";

interface AdminSidebarProps {
  className?: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ className, ...props }) => {
  return (
    <>
      <div className={`"w-fit" ${className}`} {...props}>
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Articles
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Profil
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUsers}>
                Utilisateurs
              </Sidebar.Item>

              <Sidebar.Item href="#" icon={HiTable}>
                Parties
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BiBuoy}>
                Aide ?
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
};

export default AdminSidebar;
